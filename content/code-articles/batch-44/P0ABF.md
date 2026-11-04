---
{"entryId": "generic-p0abf", "code": "P0ABF", "title": "P0ABF: a battery-current signal that fails to respond during precharge", "description": "GM’s P0ABF monitor checks battery-current response during precharge and after contactor closure, with a source wording conflict left explicit.", "status": "draft", "sourceReview": "needs-review", "scope": "2019 GM 19OBDG01 hybrid diagnostic summary, Hybrid Powertrain Control Processor 2. Vehicle and calibration applicability must be verified separately; stage-one pass wording is inconsistent.", "sourceIds": ["gm-2019-19obdg01-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2019-19obdg01-hybrid-diagnostics", "pages": [787, 788, 789]}], "authoringBatch": "batch-44"}
---

# P0ABF: a battery-current signal that fails to respond during precharge

GM’s 2019 19OBDG01 hybrid summary uses P0ABF to check whether the primary battery-current sensor is stuck within its normal range. A plausible steady reading can therefore be the problem: the controller expects current to change as the high-voltage bus is energized.

## The starting reading is a reference

Before precharge, the controller records a baseline that should represent zero current. Later readings are compared with that reference. This helps distinguish a sensor that never responds from a battery that simply happens to have low current at one instant.

The check also needs a meaningful charging event. GM’s table requires more than 40 V between battery voltage and bus voltage for the listed precharge condition. A bus already close to battery voltage may draw too little charging current to provide a useful sensor test. System voltage above 10.20 V is another documented prerequisite.

## A second observation follows contactor closure

The narrative describes checking current shortly after the main contactor closes, when loads such as the propulsion inverter and auxiliary power module should consume energy. Insufficient response across the relevant observations supports a stuck-signal diagnosis; it does not identify a safe point for external high-voltage probing.

There is an unresolved wording conflict in the source: its stage-one explanation describes a reading below the threshold as a pass, then assigns an at-or-below reading to the next stage. The article therefore does not turn that sentence into a pass/fail instruction. A technician should use current vehicle-specific service information to resolve the branch.

## What a useful verification establishes

Professional diagnosis should retain precharge status, the current baseline and subsequent readings together. A normal-looking current value after restarting cannot demonstrate that the sensor responded during the qualifying transition. This historical monitor summary establishes the detection concept, not universal vehicle fitment or a replacement procedure.

## Source and applicability

[General Motors, 19OBDG01 Hybrid Diagnostics, physical pages 787–789](https://gsi.ext.gm.com/gmspo/mode6/pdf/2019/19OBDG01%20Hybrid%20Diagnostics.pdf#page=787). Hybrid Powertrain Control Processor 2; verify the applicable vehicle and calibration. The stage-one wording discrepancy remains flagged for review.
