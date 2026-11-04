---
{"entryId": "generic-p0bff", "code": "P0BFF", "title": "P0BFF: Audi’s drive-motor current entry uses a voltage-model difference", "description": "Audi’s Q5 hybrid P0BFF row compares calculated drive-motor voltage with model voltage, leaving a naming issue that needs review.", "status": "draft", "sourceReview": "needs-review", "scope": "2014 Audi Q5/SQ5 reference book, CHJA hybrid chapter, September 2013; named module-specific criteria, not universal high-voltage repair specifications.", "sourceIds": ["audi-q5-2014-qrsb"], "sourcePages": [{"sourceId": "audi-q5-2014-qrsb", "pages": [262]}], "authoringBatch": "batch-43"}
---

# P0BFF: Audi’s drive-motor current entry uses a voltage-model difference

The Audi CHJA hybrid table names P0BFF “drive motor A current,” yet its listed criterion is a calculated drive-motor voltage minus a drive-motor model voltage exceeding 100 V. The difference between the current-related title and the voltage-based criterion is retained here as an unresolved source-detail issue.

## What the documented comparison actually says

The row describes a comparison between two voltage quantities. It does not specify a current above 100 amperes, and it does not state that the battery voltage itself exceeds 100 V. Either interpretation would change the monitored quantity and produce an unsupported diagnosis.

The order of subtraction is also material. The source gives calculated voltage minus model voltage; it does not explicitly identify an absolute difference. The available summary therefore cannot be expanded into a rule that either quantity may exceed the other by the same amount.

## A model discrepancy is not a component verdict

This entry belongs to electrical drive control module J841 in the Q5 hybrid chapter. The table provides no formula for the two voltage estimates, no persistence time, and no explanation of how their disagreement establishes the current-related DTC. A technician needs the complete matching diagnostic information before assigning a sensor, inverter or motor as the cause.

Verification must address the appropriate model-comparison evidence and any related faults through the manufacturer’s high-voltage service process. Direct probing of the traction system or replacing a current sensor solely from the title would bypass the uncertainty. The supported finding is the documented disagreement; the missing connection between that test and the current label remains flagged for review.

## Source and scope

[2014 Audi Q5/SQ5 Quick Reference Specification Book, September 2013, physical PDF 262](https://static.nhtsa.gov/odi/tsbs/2013/MC-10073843-2280.pdf#page=262). 2014 Audi Q5/SQ5 reference book, CHJA hybrid chapter, September 2013; named module-specific criteria, not universal high-voltage repair specifications.
