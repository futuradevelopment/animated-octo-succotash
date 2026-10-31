---
{"entryId": "generic-p02fa", "code": "P02FA", "title": "P02FA: Learned endstop failure must be checked after learning completes", "description": "Understand the sequence behind Ford P02FA and why an incomplete learning event cannot verify the same fault.", "status": "draft", "sourceReview": "needs-review", "scope": "Ford 2023–2024 diesel OBD summary, August 25, 2023 revision; only the described monitor examples. Confirm the engine and calibration before applying values.", "sourceIds": ["ford-diesel-2023-2024"], "sourcePages": [{"sourceId": "ford-diesel-2023-2024", "pages": [101]}], "authoringBatch": "batch-19"}
---

# P02FA: Learned endstop failure must be checked after learning completes

P02FA concerns the minimum or maximum stop performance of the diesel intake-air position sensor. Ford’s monitor specifically evaluates throttle-valve offset learning, with the check occurring at completion of the learning process. This distinguishes it from a continuously evaluated running-position error.

## Completion is the diagnostic opportunity

The entry condition is that offset learning has finished, and failure registration is immediate at that point. A valve position captured before the routine completes cannot demonstrate whether the learned offset met the acceptance criteria.

The table gives different minimum-offset limits for its 6.7 L and 3.0 L examples. It does not label the units beside those values, so this article does not convert them into degrees, percentages or a universal mechanical travel specification. Engine and calibration identification remain necessary.

## Preserve learned values and routine status

Record whether learning was attempted, whether it completed and the resulting learned information available through the appropriate diagnostic system. A normal-looking valve position during later operation does not reconstruct the endstop-learning result.

The code does not by itself establish a defective position sensor or a physically damaged stop. The source also does not prescribe resetting adaptations, forcing the valve through its travel or replacing an actuator. Verification must use the vehicle-specific learning procedure and correctly defined units before judging an offset or selecting a repair.

## Source and applicability

Ford 2023–2024 diesel OBD summary, August 25, 2023 revision; only the described monitor examples. Confirm the engine and calibration before applying values. The monitor explanation does not identify a failed part or replace the applicable service procedure. [Ford PDF, page 101](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=101).
