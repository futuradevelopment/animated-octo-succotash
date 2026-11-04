#!/usr/bin/env python3
"""Read-only HTTP verification for the explicitly selected 5,000-article release.

Run --plan without network access while the build is being prepared. Run the
default live mode only after the deployment is reported successful. No retries
are hidden; an old manifest produces a failed report and ends the invocation.
"""
import argparse
import concurrent.futures
import datetime
import hashlib
import json
import pathlib
import re
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from html.parser import HTMLParser

HERE = pathlib.Path(__file__).resolve().parent
EXPECTED_RELEASE = "code-articles-5000-20261102"
EXPECTED_COUNT = 5000
CANONICAL_ORIGIN = "https://cars.errhive.com"
CODE_FILE = re.compile(r"^[PBCU][0-3][0-9A-F]{3}\.md$")
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}
PREFERRED = {
    41: ("volkswagen-p1207", "chevrolet-p1257"),
    42: ("ford-p1575", "generic-p0a44"),
    46: ("ford-b103b", "ford-b1030"),
    47: ("honda-b1002", "ford-p1015"),
    48: ("audi-p13ea", "volkswagen-p13d0"),
    49: ("honda-p100a", "honda-p100b"),
    50: ("nissan-b2480", "nissan-p15a9"),
}


def normalize(text):
    return re.sub(r"\s+", " ", text).strip()


class Page(HTMLParser):
    """Extract only the semantic fields under test; never execute page code."""
    def __init__(self, html):
        super().__init__(convert_charrefs=True)
        self.stack = []
        self.text = {key: [] for key in ("title", "h1", "body", "scope", "review", "strip")}
        self.h1_count = self.body_count = self.review_count = 0
        self.canonical_count = self.description_count = 0
        self.description = self.canonical = self.article = self.source_review = None
        self.noindex = False
        self.evidence_links = []
        self.directory_links = []
        self.feed(html)
        self.close()

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        buckets = set(self.stack[-1][1]) if self.stack else set()
        if tag in ("title", "h1"):
            buckets.add(tag)
        if tag == "h1":
            self.h1_count += 1
        if "data-manuscript-body" in attrs:
            buckets.add("body")
            self.body_count += 1
        if "data-manuscript-scope" in attrs:
            buckets.add("scope")
        if "data-source-review-note" in attrs:
            buckets.add("review")
            self.review_count += 1
        if "reference-strip" in attrs.get("class", "").split():
            buckets.add("strip")
        if tag == "meta" and attrs.get("name", "").lower() == "description":
            self.description = attrs.get("content")
            self.description_count += 1
        if tag == "meta" and attrs.get("name", "").lower() == "robots":
            self.noindex = bool(re.search(r"\bnoindex\b", attrs.get("content", ""), re.I))
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonical = attrs.get("href")
            self.canonical_count += 1
        if "data-code-manuscript" in attrs:
            self.article = attrs["data-code-manuscript"]
            self.source_review = attrs.get("data-source-review")
        if tag == "a" and "href" in attrs:
            if "body" in buckets:
                self.evidence_links.append(attrs["href"])
            if "data-code-id" in attrs:
                self.directory_links.append((attrs["data-code-id"], attrs["href"]))
        for key in buckets:
            self.text[key].append(" ")
        if tag not in VOID:
            self.stack.append((tag, buckets))

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID:
            self.handle_endtag(tag)

    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, -1, -1):
            if self.stack[index][0] == tag:
                for key in self.stack[index][1]:
                    self.text[key].append(" ")
                del self.stack[index:]
                break

    def handle_data(self, data):
        if self.stack:
            for key in self.stack[-1][1]:
                self.text[key].append(data)

    def get(self, key):
        return normalize("".join(self.text[key]))


def read_metadata(file):
    match = re.match(r"^---\s*\n(.*?)\n---\s*\n", file.read_text(), re.S)
    if not match:
        raise ValueError(f"No JSON frontmatter: {file}")
    return json.loads(match[1])


def make_samples(repo):
    entries = {row["id"]: row for row in json.loads((repo / "src/data/dtc.json").read_text())}
    samples = []
    for number in range(41, 51):
        batch = f"batch-{number:02}"
        records = [read_metadata(file) for file in sorted((repo / "content/code-articles" / batch).glob("*.md")) if CODE_FILE.fullmatch(file.name)]
        if len(records) != 100:
            raise ValueError(f"{batch}: expected100 manuscripts, found{len(records)}")
        for index, state in enumerate(("checked", "needs-review")):
            pool = [row for row in records if row["sourceReview"] == state]
            if not pool:
                raise ValueError(f"{batch} has no {state} manuscript; update the explicit sample plan")
            preferred = PREFERRED.get(number, (None, None))[index]
            chosen = next((row for row in pool if row["entryId"] == preferred), None)
            if preferred and chosen is None:
                raise ValueError(f"Preferred {state} sample {preferred} no longer matches {batch}")
            chosen = chosen or pool[0]
            entry = entries[chosen["entryId"]]
            if entry["code"] != chosen["code"]:
                raise ValueError(f"Canonical identity mismatch: {chosen['entryId']}")
            samples.append({"batch": batch, "entryId": entry["id"], "code": entry["code"], "make": entry["makeId"], "sourceReview": state, "url": f"/codes/{entry['makeId']}/{entry['code'].lower()}/"})
    if len(samples) != 20 or len({row["entryId"] for row in samples}) != 20:
        raise ValueError("Expected20 distinct wave5 samples")
    required_makes = {"generic", "chevrolet", "ford", "honda", "volkswagen", "audi", "nissan"}
    if not required_makes <= {row["make"] for row in samples}:
        raise ValueError("Sample plan lost a required manufacturer namespace")
    return samples


def html_at(dist, route):
    return (dist / route.lstrip("/") / "index.html").read_text()


def xml_locs(text, expected_root):
    root = ET.fromstring(text)
    if root.tag.rsplit("}", 1)[-1] != expected_root:
        raise ValueError(f"Expected {expected_root} XML")
    return [node.text.strip() for node in root.iter() if node.tag.rsplit("}", 1)[-1] == "loc" and node.text]


def compare_article(sample, local_html, remote_html):
    expected, actual = Page(local_html), Page(remote_html)
    issues = []
    for field in ("description", "canonical", "article", "source_review"):
        if getattr(actual, field) != getattr(expected, field):
            issues.append(f"{field}_mismatch")
    for key in ("title", "h1", "body", "scope", "review"):
        if actual.get(key) != expected.get(key):
            issues.append(f"{key}_text_mismatch")
    if actual.canonical != CANONICAL_ORIGIN + sample["url"]:
        issues.append("canonical_not_release_route")
    if actual.article != sample["entryId"] or actual.source_review != sample["sourceReview"]:
        issues.append("article_identity_or_review_state")
    if actual.h1_count != 1 or actual.canonical_count != 1 or actual.description_count != 1:
        issues.append("heading_or_metadata_count")
    if actual.body_count != 1 or not actual.get("body") or not actual.get("scope"):
        issues.append("missing_or_duplicate_article_body_or_scope")
    if actual.evidence_links != expected.evidence_links:
        issues.append("evidence_links_mismatch")
    if actual.review_count != (1 if sample["sourceReview"] == "needs-review" else 0):
        issues.append("review_notice_count")
    if actual.noindex:
        issues.append("unexpected_noindex")
    return {**sample, "passed": not issues, "issues": issues, "bodyTextSha256": hashlib.sha256(actual.get("body").encode()).hexdigest()}


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("base_url", nargs="?", default=CANONICAL_ORIGIN)
    parser.add_argument("--repo", type=pathlib.Path, default=HERE.parent)
    parser.add_argument("--report", type=pathlib.Path, default=None)
    parser.add_argument("--plan", action="store_true", help="Check manuscript sample selection only; no build or network required")
    parser.add_argument("--local-only", action="store_true", help="Check the built release baseline without HTTP requests")
    parser.add_argument("--workers", type=int, default=6)
    parser.add_argument("--timeout", type=int, default=25)
    args = parser.parse_args()
    if args.report is None:
        name = "publication-release-5000-sample-plan.json" if args.plan else ("publication-release-5000-local-check.json" if args.local_only else "production-release-5000.json")
        args.report = HERE.parent / "reports" / name
    args.report.parent.mkdir(parents=True, exist_ok=True)
    base = args.base_url.rstrip("/")
    parsed = urllib.parse.urlparse(base)
    if parsed.scheme not in ("http", "https") or not parsed.netloc or parsed.path:
        parser.error("base_url must be an HTTP(S) origin with no path")
    repo, dist = args.repo.resolve(), args.repo.resolve() / "dist"
    samples = make_samples(repo)
    if args.plan:
        output = {"status": "sample-plan-ready", "mode": "no-network", "expectedRelease": EXPECTED_RELEASE, "expectedArticles": EXPECTED_COUNT, "samples": samples}
        args.report.write_text(json.dumps(output, indent=2) + "\n")
        print(json.dumps(output, indent=2), flush=True)
        return 0
    expected = json.loads((dist / "article-publication.json").read_text())
    if expected.get("release") != EXPECTED_RELEASE or expected.get("count") != EXPECTED_COUNT or len(expected.get("articles", [])) != EXPECTED_COUNT:
        raise ValueError("Build baseline is not the expected 5,000-article release; finish the forced build before verification")
    articles_by_id = {row["entryId"]: row for row in expected["articles"]}
    if len(articles_by_id) != EXPECTED_COUNT or len({row["url"] for row in expected["articles"]}) != EXPECTED_COUNT:
        raise ValueError("Duplicate identity or canonical route in the built release manifest")
    for sample in samples:
        if any(articles_by_id[sample["entryId"]][key] != sample[key] for key in ("code", "url", "sourceReview")):
            raise ValueError(f"Sample does not match built release: {sample['entryId']}")
    workers = max(1, min(args.workers, 6))
    report = {"checkedAt": datetime.datetime.now(datetime.timezone.utc).isoformat(), "baseURL": base, "expectedRelease": EXPECTED_RELEASE, "expectedArticles": EXPECTED_COUNT, "mode": "local-baseline-only" if args.local_only else "live-http", "sampleCount": len(samples), "sampleBatches": sorted({row["batch"] for row in samples}), "sampleMakes": sorted({row["make"] for row in samples}), "checks": [], "failures": [], "limitations": ["All5,000 manifest identities and sitemap inclusion are checked. Served article HTML is checked for the20 listed wave5 samples; this is not an all-page live crawl.", "The local forced build and full static audit establish the remaining built-body coverage separately.", "These checks do not establish mechanical accuracy, universal vehicle applicability, Google indexing, rankings or field performance."]}
    def progress(message):
        print(message, flush=True)
    def record(row):
        report["checks"].append(row)
        if not row.get("passed", False):
            report["failures"].append(row)
    def save():
        report["status"] = "passed" if not report["failures"] else "failed"
        args.report.write_text(json.dumps(report, indent=2) + "\n")
        progress(json.dumps({"status": report["status"], "mode": report["mode"], "release": EXPECTED_RELEASE, "checks": len(report["checks"]), "failures": report["failures"], "report": str(args.report)}, indent=2))
        return 0 if not report["failures"] else 1
    def fetch(route):
        if not route.startswith("/") or route.startswith("//"):
            raise ValueError(f"Not a same-site path: {route}")
        if args.local_only:
            return (dist / route.lstrip("/")).read_text() if not route.endswith("/") else html_at(dist, route)
        request = urllib.request.Request(base + route, headers={"User-Agent": "ErrHive-release-verification/2.0", "Accept": "text/html,application/json,application/xml"})
        with urllib.request.urlopen(request, timeout=args.timeout) as response:
            target = urllib.parse.urlparse(response.url)
            if response.status != 200 or target.path != route or target.netloc != parsed.netloc:
                raise ValueError(f"Unexpected HTTP response or redirect: {response.status} {response.url}")
            body = response.read(5 * 1024 * 1024 + 1)
            if len(body) > 5 * 1024 * 1024:
                raise ValueError(f"Response exceeds5MiB budget: {route}")
            return body.decode("utf-8")
    progress(f"Checking {base}: {EXPECTED_RELEASE};5,000 identities;20 article samples;workers={workers};timeout={args.timeout}s")
    try:
        remote = json.loads(fetch("/article-publication.json"))
        keys = ("entryId", "code", "url", "sourceReview")
        rows = lambda manifest: sorted(tuple(row[key] for key in keys) for row in manifest["articles"])
        passed = remote.get("release") == EXPECTED_RELEASE and remote.get("count") == EXPECTED_COUNT and remote.get("sourceReviewPending") == expected["sourceReviewPending"] and rows(remote) == rows(expected)
        record({"url": "/article-publication.json", "passed": passed, "release": remote.get("release"), "count": remote.get("count"), "sourceReviewPending": remote.get("sourceReviewPending"), "exactIdentityMatch": passed})
        progress(f"Manifest: {'PASS' if passed else 'FAIL'};release={remote.get('release')};count={remote.get('count')}")
    except Exception as error:
        record({"url": "/article-publication.json", "passed": False, "error": f"{type(error).__name__}: {error}"})
    if report["failures"]:
        progress("Stopping: expected release manifest was not served; no further live requests.")
        return save()
    try:
        sitemap_index = xml_locs(fetch("/sitemap.xml"), "sitemapindex")
        local_index = xml_locs((dist / "sitemap.xml").read_text(), "sitemapindex")
        if sitemap_index != local_index or len(set(sitemap_index)) != len(sitemap_index):
            raise ValueError("Sitemap shard inventory differs from the local release")
        sitemap_paths = []
        for location in sitemap_index:
            item = urllib.parse.urlparse(location)
            if f"{item.scheme}://{item.netloc}" != CANONICAL_ORIGIN or not re.fullmatch(r"/sitemaps/\d+\.xml", item.path) or item.query or item.fragment:
                raise ValueError(f"Unexpected sitemap location: {location}")
            sitemap_paths.append(item.path)
        locations = []
        with concurrent.futures.ThreadPoolExecutor(max_workers=min(workers, len(sitemap_paths))) as pool:
            for route, xml in zip(sitemap_paths, pool.map(fetch, sitemap_paths)):
                remote_locations = xml_locs(xml, "urlset")
                local_locations = xml_locs((dist / route.lstrip("/")).read_text(), "urlset")
                if remote_locations != local_locations:
                    raise ValueError(f"Sitemap shard differs from the local release: {route}")
                locations.extend(remote_locations)
                progress(f"Sitemap {route}: PASS;{len(remote_locations)} URLs")
        actual = set(locations)
        wanted = {CANONICAL_ORIGIN + row["url"] for row in expected["articles"]}
        missing = sorted(wanted - actual)
        passed = not missing and len(actual) == len(locations)
        record({"url": "/sitemap.xml", "passed": passed, "shards": len(sitemap_paths), "uniqueURLs": len(actual), "releaseArticleURLs": len(wanted), "includedReleaseArticles": len(wanted & actual), "missingArticleURLs": missing, "duplicateURLs": len(locations) - len(actual), "matchesBuiltSitemaps": True})
        progress(f"All5,000 article URLs in sitemaps: {'PASS' if passed else 'FAIL'}")
    except Exception as error:
        record({"url": "/sitemap.xml", "passed": False, "error": f"{type(error).__name__}: {error}"})
        progress(f"Sitemap: ERROR {error}")
    for route in ("/", "/articles/", "/articles/page/50/"):
        try:
            local, remote = Page(html_at(dist, route)), Page(fetch(route))
            issues = []
            if any(getattr(local, key) != getattr(remote, key) for key in ("description", "canonical")):
                issues.append("metadata_mismatch")
            if remote.h1_count != 1 or remote.get("h1") != local.get("h1") or remote.get("title") != local.get("title"):
                issues.append("heading_or_title_mismatch")
            if remote.noindex:
                issues.append("unexpected_noindex")
            if route == "/":
                if remote.get("strip") != local.get("strip") or "5,000" not in remote.get("strip"):
                    issues.append("homepage_article_count")
            elif remote.directory_links != local.directory_links or len(remote.directory_links) != 100:
                issues.append("directory_links")
            record({"url": route, "passed": not issues, "issues": issues})
            progress(f"Page {route}: {'PASS' if not issues else 'FAIL'}")
        except Exception as error:
            record({"url": route, "passed": False, "error": f"{type(error).__name__}: {error}"})
            progress(f"Page {route}: ERROR {error}")
    def check_sample(sample):
        start = time.monotonic()
        try:
            row = compare_article(sample, html_at(dist, sample["url"]), fetch(sample["url"]))
        except Exception as error:
            row = {**sample, "passed": False, "error": f"{type(error).__name__}: {error}"}
        row["elapsedSeconds"] = round(time.monotonic() - start, 2)
        return row
    with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as pool:
        for row in pool.map(check_sample, samples):
            record(row)
            progress(f"{row['batch']} {row['entryId']} {row['sourceReview']}: {'PASS' if row['passed'] else 'FAIL'}")
    return save()


if __name__ == "__main__":
    sys.exit(main())
