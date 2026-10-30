// Intentional noindex pages may fail only crawlability. A low overall SEO
// score never excuses unrelated failures such as missing descriptions or links.
export function evaluateSeoGate(lhr, { intentionalNoindex = false, target = 100 } = {}) {
  const category = lhr.categories?.seo;
  const scored = category?.auditRefs?.filter(ref => ref.weight > 0) || [];
  const failures = scored.filter(ref => {
    const audit = lhr.audits?.[ref.id];
    return !audit || (audit.score !== 1 && audit.scoreDisplayMode !== 'notApplicable');
  }).map(ref => ref.id);
  const crawlabilityOnly = lhr.audits?.['is-crawlable']?.score === 0 &&
    failures.length === 1 && failures[0] === 'is-crawlable';
  return {
    passed: Boolean(category && scored.length && (intentionalNoindex ? crawlabilityOnly : category.score * 100 >= target && failures.length === 0)),
    failures,
    intentionalNoindex,
  };
}

