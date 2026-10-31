---
{"entryId": "generic-p04dd", "code": "P04DD", "title": "P04DD: cold-start EGR insufficient flow uses an operating-point-dependent limit", "description": "Audi's CPNB P04DD criterion depends on engine speed, injection quantity and target air mass, so the table does not provide one universal EGR-flow threshold.", "status": "draft", "sourceReview": "checked", "scope": "Audi 2014 A6/S6 Quick Reference Specification Book, September 2013, Engine Code CPNB, DTC chart. Thresholds only describe this documented monitor; not universal across other makes or engines.", "sourceIds": ["audi-2014-a6-s6-reference-2013-09"], "authoringBatch": "batch-31", "sourcePages": [{"sourceId": "audi-2014-a6-s6-reference-2013-09", "pages": [354]}]}
---

# P04DD: cold-start EGR insufficient flow uses an operating-point-dependent limit

P04DD identifies insufficient EGR flow during cold start. Audi's CPNB diagnostic chart evaluates control deviation against a function of engine speed, injection quantity and target air-mass flow. The book deliberately expresses that boundary as a function rather than one fixed numeric value.

## The operating point changes the comparison

A deviation observed at one engine speed or fueling condition cannot be assumed to have the same significance at another. That is the practical diagnostic implication of the variables named in the source. A useful fault record preserves the cold-start conditions instead of relying only on a warmed-up idle observation.

The row also describes a control comparison, not a direct statement that an EGR valve is stuck closed. The monitor can identify an unsatisfactory result without selecting the physical repair.

## Do not invent the missing calibration

The quick-reference table does not publish the function, a universal flow value or a complete isolation sequence. Those details must come from the applicable CPNB service information. This article therefore does not calculate a made-up pass/fail limit or prescribe EGR replacement. It explains why target flow, engine speed and injection quantity matter when interpreting this specific Audi cold-start monitor, with no automatic applicability to other diesel engines.

Source: [Audi 2014 A6/S6 Quick Reference Specification Book](https://static.nhtsa.gov/odi/tsbs/2013/MC-10243900-9999.pdf#page=354).
