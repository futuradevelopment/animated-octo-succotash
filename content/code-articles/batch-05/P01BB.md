---
{"entryId": "generic-p01bb", "code": "P01BB", "title": "P01BB: oil-temperature sensor B falls below its resistance limit", "description": "Understand P01BB: oil-temperature sensor b falls below its resistance limit, with documented GM monitor criteria and diagnostic limits.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 04B diagnostic parameter document; the cited module and monitor only. Per-code vehicle, engine and calibration applicability is not established.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [474]}], "authoringBatch": "batch-05"}
---

# P01BB: oil-temperature sensor B falls below its resistance limit

P01BB identifies the low electrical-range monitor for engine-oil-temperature sensor B. The GM row uses a resistance below 25 Ω and describes short-to-ground detection in its controller-specific driver strategy. Sensor B must be identified from the actual vehicle's architecture; the letter alone does not establish a component location.

## A channel-specific electrical result

The criterion resembles the sensor-A monitor, but it belongs to a separately named input. A valid sensor-A reading therefore cannot prove sensor B passed. Preserve which channel's raw electrical status failed rather than merging both into a general “oil temperature” complaint.

The diagnostic must be enabled. Its decision requires four failing samples within five, sampled every second, with Type B, two-trip reporting. The monitor does not establish an oil-pressure, oil-level or lubrication-quality fault.

## What verification should demonstrate

Check that the sensor-B input remains electrically valid through an enabled evaluation and that the failure does not merely disappear between samples. If both temperature channels show related faults, a shared dependency may deserve investigation, but the table does not establish that they share a connector or supply.

Use the vehicle-specific circuit diagram and safe isolation procedure before measuring resistance or selecting a part. The 25-Ω internal criterion is not a universal sensor specification and cannot justify replacement without confirming the correct circuit and its conditions.

## Source and applicability

[GM 04B, PDF page 474](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=474). This explanation covers the documented 2025 monitor. Confirm the vehicle's module, engine and calibration before applying these criteria; the document's vehicle list does not establish this code's applicability to every listed model.
