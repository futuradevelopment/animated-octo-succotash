---
{"entryId": "generic-p06dd", "code": "P06DD", "title": "P06DD: two-stage oil-pump response remains in the high-pressure state", "description": "P06DD is a performance fault in the cited two-stage oil-pump strategy.", "status": "draft", "sourceReview": "checked", "scope": "Documented monitors in gm-2025-03a, model year 2025. These are module/calibration examples; vehicle, engine and transmission applicability must be confirmed independently.", "sourceIds": ["gm-2025-03a"], "sourcePages": [{"sourceId": "gm-2025-03a", "pages": [430]}], "authoringBatch": "batch-03"}
---

# P06DD: two-stage oil-pump response remains in the high-pressure state

P06DD is a performance fault in the cited two-stage oil-pump strategy. The documented implementation diagnoses a pump remaining in its high-pressure state when the control sequence should produce a change. This is more specific than assuming the generic stuck-off wording means low oil pressure.

## Pressure change and pressure level work together

The intrusive test cycles the control off for high pressure and on for low pressure. It compares filtered pressure at the beginning of a state change with the value 1.5 seconds later. Too little change alone is not the complete failure decision: measured pressure must also support the high-state classification.

The displayed decision requires more than twelve errors out of fifteen samples. Actual pressure-change and level thresholds are referenced to supporting tables, so no universal kPa limit is asserted here.

## Passing once does not end all monitoring

After the intrusive test passes, a passive test watches ordinary control transitions. An inadequate response can trigger the intrusive sequence again. A later recurrence therefore need not contradict an earlier successful test.

Prerequisites include the two-stage system being present, more than ten seconds of running, sufficient ambient pressure and valid related sensor information. The source also excludes an oil-aeration condition. Use the exact professional procedure to evaluate command, pressure response and prerequisites together. This article does not authorize forcing oil-pump modes or infer adequate lubrication from the code's high-state classification.

## Source and applicability

Documented monitors in gm-2025-03a, model year 2025. These are module/calibration examples; vehicle, engine and transmission applicability must be confirmed independently. [GM 2025-03a, page 430](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=430).
