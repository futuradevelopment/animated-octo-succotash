---
{"entryId":"generic-p26fa","code":"P26FA","title":"P26FA: Coolant pump C exceeds an absolute speed limit","description":"Understand how P26FA checks reported pump speed and why the overspeed label does not independently establish air in the circuit.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG04A documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-04a"],"sourcePages":[{"sourceId":"gm-2025-04a","pages":[660]}],"authoringBatch":"batch-18"}
---

# P26FA: Coolant pump C exceeds an absolute speed limit

P26FA is an out-of-range high check for the low-temperature coolant-loop pump in the documented GM calibration. Unlike a command-versus-feedback tracking monitor, this row uses the pump’s actual reported speed against an absolute ceiling. The distinction matters when the pump command also changes.

## A reported speed at the ceiling

The failure threshold is at least 4,500 rpm. Four failing observations out of five samples are required, with one second per sample. A brief display excursion is therefore different from the sustained sample pattern recognized by the controller.

Pump hardware must be configured as present, the diagnostic and pump enabled, and cranking absent. The row also specifies supply eligibility and exclusions for certain low-circuit or response faults. These qualifications prevent interpreting every missing or abnormal speed value as a completed overspeed test.

## Establish what the feedback actually represents

Record the reported speed, pump enable state and relevant electrical faults together. If the speed signal is unreliable or the diagnostic is disabled, an apparent numerical value cannot be accepted as a verified mechanical pump speed. The code identifies what the controller classified, not an independently measured impeller speed.

The generic description includes possible air in the system, but this particular table does not test for trapped air directly. It provides no universal bleeding instruction or pump replacement decision. Those conclusions require the matching coolant-circuit procedure and additional evidence.

## Source and applicability

2025 GM 25OBDG04A documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG04A, PDF page 660](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04A.pdf#page=660).
