---
{"entryId": "generic-p01bc", "code": "P01BC", "title": "P01BC: sensor B oil-temperature resistance is electrically high", "description": "Understand P01BC: sensor b oil-temperature resistance is electrically high, with documented GM monitor criteria and diagnostic limits.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 04B diagnostic parameter document; the cited module and monitor only. Per-code vehicle, engine and calibration applicability is not established.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [475]}], "authoringBatch": "batch-05"}
---

# P01BC: sensor B oil-temperature resistance is electrically high

P01BC is a high-range electrical result for engine-oil-temperature sensor B. The cited GM criterion is circuit resistance above 450,000 Ω. It concerns the integrity of that input, not proof that engine oil is physically too hot.

## Time and coolant temperature enable the check

The source requires an enabled diagnostic plus engine runtime above twenty seconds or coolant temperature at least −20°C. It uses four failures out of five samples at one-second intervals and Type B, two-trip reporting.

The runtime/coolant alternative is useful when evaluating a cold-start complaint: a reading collected before eligibility is established does not prove that the monitor has run. Keep those conditions with the sensor-B electrical record.

## Keep A and B distinct

A second oil-temperature channel, if fitted as this architecture expects, does not automatically provide the same measured temperature or a substitute circuit specification. Confirm the actual sensor-B mapping before interpreting a comparison or assigning a component location. The source makes no such location claim.

Verification requires sensor B to remain in its valid electrical range during a completed enabled evaluation. A normal A-channel reading or a cleared history is not sufficient. Use the appropriate circuit procedure to establish whether the high-resistance result comes from the sensor or its electrical path; the DTC alone does not name a failed replacement part.

## Source and applicability

[GM 04B, PDF page 475](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=475). This explanation covers the documented 2025 monitor. Confirm the vehicle's module, engine and calibration before applying these criteria; the document's vehicle list does not establish this code's applicability to every listed model.
