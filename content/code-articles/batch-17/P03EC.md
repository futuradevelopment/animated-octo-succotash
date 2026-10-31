---
{"entryId": "generic-p03ec", "code": "P03EC", "title": "P03EC: Intake profile actuator C needs its own commanded continuity evidence", "description": "Understand the GM P03EC open-circuit test for intake profile actuator 3 and avoid treating a bank-wide camshaft symptom as its diagnosis.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 03B documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file.", "sourceIds": ["gm-2025-03b"], "sourcePages": [{"sourceId": "gm-2025-03b", "pages": [438]}], "authoringBatch": "batch-17"}
---

# P03EC: Intake profile actuator C needs its own commanded continuity evidence

P03EC selects the bank 1 intake profile-actuator C control circuit. GM's cited table calls this intake profile actuator 3. The code narrows the monitored electrical output; it does not assert that every profile actuator or the entire camshaft mechanism is defective.

## The connected path is judged while energized

The controller watches voltage feedback when this output is powered on. Feedback outside the expected range is classified using the published open-circuit specification: impedance above 200 kΩ between signal and controller ground. The source describes an internal driver assessment, not a universal harness test requiring that resistance to be measured directly.

The diagnostic needs system supply above 11 V, enabled monitoring and crank/run ignition. Four failures out of five samples mature the result, with one-trip reporting. A single inactive-state voltage reading is not equivalent to those repeated commanded observations.

## Preserve channel identity and request timing

A useful record establishes that the commanded output and measured feedback both belong to intake profile actuator 3. Evidence from another actuator on the bank cannot verify this channel simply because the same electrical strategy is used elsewhere.

Once an eligible on-state failure is confirmed, the remaining question is where the electrical path becomes invalid. This table does not isolate wiring, actuator load or controller output stage, and it contains no model-specific component location. Those distinctions require the matching service information before selecting a repair.

## Source and applicability

2025 GM 03B documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file. [GM PDF, physical page 438](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=438).
