#!/usr/bin/env python3
"""Bounded lexical screen of batches 31–40 against batches 01–40.

Run from any directory; Python standard library only. Existing manual review
records survive a rerun only when both normalized article hashes still match.
This is a candidate-index screen, not an exhaustive all-pairs comparison.
"""

import argparse
from collections import Counter, defaultdict
from datetime import datetime, timezone
import hashlib
import html
import json
from pathlib import Path
import re


SOURCE_HEADINGS = {
    "source", "sources", "source and applicability", "sources and applicability",
    "source and scope", "source and application limits", "document scope and source",
    "documentation and applicability", "documented application", "application limits",
    "application and limits", "source and limits", "references", "citations",
}


def normalize(raw):
    metadata = {}
    match = re.match(r"\A---\s*\n(.*?)\n---\s*\n", raw, re.S)
    if match:
        try:
            metadata = json.loads(match[1])
        except json.JSONDecodeError:
            pass
        raw = raw[match.end():]
    kept = []
    for line in raw.splitlines():
        heading = re.match(r"^\s{0,3}#{1,6}\s+(.+?)\s*#*\s*$", line)
        if heading:
            if heading[1].strip().lower() in SOURCE_HEADINGS:
                break
            continue
        if re.match(r"^\s*(?:sources?|references?|citations?|scope|applicability)\s*:", line, re.I):
            break
        if re.match(r"^\s*\[[^]]+\]:\s*https?://", line):
            continue
        # Directory navigation should not contribute repeated labels or URLs.
        line = re.sub(r"\[[^]]*\]\((?:https?://[^/)]+)?/codes/[^)]*\)", " ", line)
        line = re.sub(r"!?\[([^]]*)\]\([^)]*\)", r"\1", line)
        line = re.sub(r"https?://\S+", " ", line)
        kept.append(line)
    body = html.unescape("\n".join(kept))
    body = re.sub(r"\b[PBCU][0-3][0-9A-F]{3}(?:[-:][0-9A-F]{2})?\b", " dtccode ", body, flags=re.I)
    body = re.sub(r"\b\d+(?:[.,]\d+)*\b", " number ", body)
    words = re.findall(r"[a-z]+", body.lower())
    canonical = " ".join(words)
    return words, metadata, hashlib.sha256(canonical.encode()).hexdigest()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--repo", type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument("--output", default="reports/article-similarity-wave-04.json")
    parser.add_argument("--threshold", type=float, default=0.45)
    parser.add_argument("--max-document-frequency", type=int, default=40)
    parser.add_argument("--min-shared-candidate-shingles", type=int, default=10)
    parser.add_argument("--max-reported-pairs", type=int, default=100)
    args = parser.parse_args()
    repo = args.repo.resolve()
    output = repo / args.output
    previous = json.loads(output.read_text()) if output.exists() else {}
    rows, inverted = [], defaultdict(list)
    counts = Counter()
    snapshot = hashlib.sha256()
    for batch in range(1, 41):
        for path in sorted((repo / "content/code-articles" / f"batch-{batch:02d}").glob("*.md")):
            raw = path.read_text()
            words, metadata, digest = normalize(raw)
            grams = set(tuple(words[i:i + 5]) for i in range(len(words) - 4))
            rel = str(path.relative_to(repo))
            snapshot.update((rel + "\0" + hashlib.sha256(raw.encode()).hexdigest() + "\n").encode())
            i = len(rows)
            rows.append({"path": rel, "batch": batch, "wave4": batch >= 31,
                         "grams": grams, "words": len(words), "bodyHash": digest,
                         "sourceIds": metadata.get("sourceIds", [])})
            counts[f"batch-{batch:02d}"] += 1
            for gram in grams:
                inverted[gram].append(i)
    candidates = Counter()
    qualifying_shingles = 0
    for owners in inverted.values():
        if not 2 <= len(owners) <= args.max_document_frequency:
            continue
        wave = [i for i in owners if rows[i]["wave4"]]
        if not wave:
            continue
        qualifying_shingles += 1
        for a in wave:
            for b in owners:
                if b != a and (not rows[b]["wave4"] or a < b):
                    candidates[tuple(sorted((a, b)))] += 1
    scored = []
    # Also inspect five cross-wave and five cross-batch candidates with the most
    # qualifying shared shingles, even if none reach the main retrieval minimum.
    supplemental = set()
    for category in ("prior", "cross-batch"):
        eligible = [((a, b), n) for (a, b), n in candidates.items()
                    if (not rows[a]["wave4"] if category == "prior"
                        else rows[a]["wave4"] and rows[a]["batch"] != rows[b]["batch"])]
        eligible.sort(key=lambda item: (-item[1], item[0]))
        supplemental.update(pair for pair, _ in eligible[:5])
    for (a, b), count in candidates.items():
        if count < args.min_shared_candidate_shingles and (a, b) not in supplemental:
            continue
        x, y = rows[a], rows[b]
        common = x["grams"] & y["grams"]
        score = len(common) / len(x["grams"] | y["grams"])
        scored.append({"a": x["path"], "b": y["path"], "jaccard": round(score, 6),
                       "comparison": "wave4-internal" if x["wave4"] else "wave4-versus-prior3000",
                       "selection": "main-candidate-screen" if count >= args.min_shared_candidate_shingles else "bounded-cross-batch-spot-check",
                       "sharedFiveGrams": len(common), "candidateSharedLowFrequencyFiveGrams": count,
                       "uniqueFiveGrams": [len(x["grams"]), len(y["grams"])],
                       "normalizedWords": [x["words"], y["words"]],
                       "sharedSourceIds": sorted(set(x["sourceIds"]) & set(y["sourceIds"])),
                       "bodyHashes": [x["bodyHash"], y["bodyHash"]]})
    scored.sort(key=lambda x: (-x["jaccard"], x["a"], x["b"]))
    hits = [p for p in scored if p["jaccard"] >= args.threshold]
    exact_groups = defaultdict(list)
    for row in rows:
        exact_groups[row["bodyHash"]].append(row)
    exact = [{"bodyHash": digest, "paths": [r["path"] for r in group]}
             for digest, group in exact_groups.items()
             if len(group) > 1 and any(r["wave4"] for r in group)]
    current = {(p["a"], p["b"]): p for p in scored}
    reviews = [r for r in previous.get("manualReview", [])
               if (r.get("a"), r.get("b")) in current
               and current[(r["a"], r["b"])]["bodyHashes"] == r.get("bodyHashes")]
    wave_count = sum(n for b, n in counts.items() if int(b[-2:]) >= 31)
    review_keys = {(r["a"], r["b"]) for r in reviews}
    report = {
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "scope": "Batches 31–40 internally and against batches 01–30; excludes prior-versus-prior pairs.",
        "corpus": {"articles": len(rows), "priorArticles": len(rows) - wave_count,
                   "wave4Articles": wave_count, "expectedWave4Articles": 1000,
                   "completeWave4Count": wave_count == 1000 and all(counts[f"batch-{b:02d}"] == 100 for b in range(31, 41)),
                   "batchCounts": dict(sorted(counts.items())), "rawSnapshotSha256": snapshot.hexdigest()},
        "method": {"shingleWords": 5, "similarity": "set Jaccard: intersection / union of all normalized five-word shingles",
                   "reportThreshold": args.threshold, "candidateDocumentFrequencyRange": [2, args.max_document_frequency],
                   "minimumSharedCandidateShingles": args.min_shared_candidate_shingles,
                   "normalization": ["Remove frontmatter and all Markdown headings.",
                                     "Stop before named source/applicability footer headings or Source/Reference/Citation/Scope/Applicability footer lines.",
                                     "Remove code-directory links and URLs; retain other inline link labels.",
                                     "Replace DTC identifiers and numeric literals with shared placeholders; lowercase and retain alphabetic tokens."],
                   "footerHeadings": sorted(SOURCE_HEADINGS),
                   "candidateRetrieval": "Inverted index over shingles occurring in the configured document-frequency range. Count shared qualifying shingles only for pairs involving wave four; score candidates reaching the configured minimum (10 by default, less restrictive than the prior report's 25). No quadratic all-corpus pass.",
                   "exactDuplicateSupplement": "SHA-256 equality of normalized bodies, including groups excluded by frequent-shingle filtering.",
                   "crossBatchSupplement": "Also score the five prior-versus-wave-four and five different-wave-four-batch candidates with the most qualifying shared shingles. This bounded spot check can include pairs below the main candidate minimum.",
                   "reproduce": "python scripts/article-similarity-wave-04.py"},
        "statistics": {"uniqueFiveGrams": len(inverted), "qualifyingCandidateFiveGrams": qualifying_shingles,
                       "candidatePairsWithAnyLowFrequencyOverlap": len(candidates), "scoredPairs": len(scored),
                       "scoredPairsByComparison": dict(Counter(p["comparison"] for p in scored)),
                       "scoredPairsBySelection": dict(Counter(p["selection"] for p in scored)),
                       "thresholdPairs": len(hits), "thresholdPairsByComparison": dict(Counter(p["comparison"] for p in hits)),
                       "exactNormalizedDuplicateGroups": len(exact),
                       "minimumNormalizedWords": min((r["words"] for r in rows if r["wave4"]), default=0)},
        "similarPairs": hits[:args.max_reported_pairs], "similarPairsTruncated": len(hits) > args.max_reported_pairs,
        "highestScoringPairs": scored[:20],
        "highestWave4VersusPriorPairs": [p for p in scored if p["comparison"] == "wave4-versus-prior3000"][:5],
        "highestCrossBatchWave4Pairs": [p for p in scored if p["comparison"] == "wave4-internal" and p["a"].split("/")[2] != p["b"].split("/")[2]][:5],
        "exactNormalizedDuplicateGroups": exact[:20],
        "manualReview": reviews,
        "unreviewedThresholdPairCount": sum((p["a"], p["b"]) not in review_keys for p in hits),
        "limitations": ["This is a bounded lexical repetition screen, not an originality, plagiarism, source-accuracy, or factual-quality certification.",
                        "Candidate retrieval can miss pairs dominated by shingles appearing above the configured document-frequency ceiling or sharing fewer than the configured qualifying-shingle minimum.",
                        "Number and DTC normalization intentionally increases similarity among legitimate related factory procedures; scores require article-level review.",
                        "Paraphrased templates, semantic duplication, and copied source text not present in this corpus can evade lexical screening.",
                        "Footer removal uses an explicit heading list and footer-line patterns; inline applicability language remains when part of the main discussion.",
                        "The report is a point-in-time filesystem snapshot. A later manuscript change requires a rerun; stored reviews survive only identical normalized body hashes."]}
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(report, indent=2) + "\n")
    print(json.dumps({"wave4Articles": wave_count, "scoredPairs": len(scored), "thresholdPairs": len(hits),
                      "exactGroups": len(exact), "topPairs": [{k: p[k] for k in ("a", "b", "jaccard")} for p in scored[:12]]}, indent=2))


if __name__ == "__main__":
    main()
