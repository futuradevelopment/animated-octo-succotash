---
{"entryId": "generic-p20ce", "code": "P20CE", "title": "P20CE: A high exhaust injector circuit can be reported through on-state overcurrent", "description": "Learn the two overcurrent paths described for GM P20CE and why their driver evidence is separate from fuel-pressure or flow diagnosis.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 04A documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file.", "sourceIds": ["gm-2025-04a"], "sourcePages": [{"sourceId": "gm-2025-04a", "pages": [1130]}], "authoringBatch": "batch-17"}
---

# P20CE: A high exhaust injector circuit can be reported through on-state overcurrent

P20CE identifies a high control-circuit condition for exhaust aftertreatment fuel injector A. In the documented GM implementation, the hardware interface classifies a connection toward power using current through the output while it is on. The code does not mean that exhaust fuel pressure has simply become too high.

## Two current behaviors can support the same status

The row describes a lower overcurrent band with a duration qualification and a higher current band as another failure path. The published bands are 8–11 A and 16–22 A. They characterize internal hardware detection, not a safe manual current-injection procedure or a universal injector operating specification.

The controller requires diagnostic calibration enablement, powertrain-relay voltage in range and a diagnostic system that is not disabled. The command-interface result must also be determinate. A disabled or uncertain hardware status is not interchangeable with a confirmed power-short finding.

## Preserve on-state electrical evidence

The summary confirms seventeen failures within twenty-three samples at a 100-millisecond rate, with two-trip reporting. Retain output command, current-related status and supply at the event rather than substituting a later fuel-flow observation.

The very short hardware timing notation is not used here to construct an external test. The monitor cannot identify whether the abnormal current path lies in the connected circuit or the driver, and it does not authorize replacing the aftertreatment injector without the matching circuit-isolation procedure.

## Source and applicability

2025 GM 04A documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file. [GM PDF, physical page 1130](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04A.pdf#page=1130).
