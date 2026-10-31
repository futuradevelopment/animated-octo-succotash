---
{"entryId":"generic-p02aa","code":"P02AA","title":"P02AA: Ford cylinder 5 maximum fuel-trim correction","description":"P02AA marks cylinder 5's maximum fuel-trim limit in Ford's documented diesel balance-control monitor.","status":"draft","sourceReview":"checked","scope":"Ford 2015 model-year diesel OBD system operation summary, revision December 22, 2014; the cited monitor only, without blanket model or engine applicability.","sourceIds":["ford-diesel-2015"],"authoringBatch":"batch-32","sourcePages":[{"sourceId":"ford-diesel-2015","pages":[35]}]}
---

# P02AA: Ford cylinder 5 maximum fuel-trim correction

P02AA is the cylinder 5 fuel-trim maximum-limit entry in Ford's 2015 diesel summary. The source places it in fuel-balancing control, where correction is evaluated over a qualifying operating period. The maximum label identifies the adjustment boundary, not a maximum permitted fuel pressure or an electrical high-input fault.

## A completed learning state is required

FBC wheel learning must be complete, and the crankshaft-position input must be acceptable. Ford excludes regeneration and specifies operation between 500 and 3,000 rpm, with injection quantity between 3.5 and 90 mg per stroke. The typical test duration is 7.5 seconds.

These conditions matter when interpreting a repair check: the balancing monitor needs a valid opportunity to evaluate the cylinder. Simply seeing the engine run does not prove the same test has passed.

## What the limit does not isolate

P02AB describes the minimum boundary for cylinder 5 and should not be merged with this upper-bound result. Preserve the correction direction and operating data. The source does not convert its internal balance threshold into an injector flow specification or identify a single mechanical cause. Apply the correct engine's balance diagnostic procedure before selecting a replacement component.

## Source and applicability

Ford 2015 model-year diesel OBD system operation summary, revision December 22, 2014; the cited monitor only, without blanket model or engine applicability. Ford source, physical PDF page [35](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/DOBDSM1501.pdf#page=35). The documented monitor explains the fault decision; vehicle-specific service information is still needed for connector identification and a complete repair procedure.
