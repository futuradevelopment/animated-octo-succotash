---
{"entryId": "generic-p0ae7", "code": "P0AE7", "title": "P0AE7: Precharge contactor driver reads high when off", "description": "GM's P0AE7 monitor evaluates precharge contactor control feedback during an off command and distinguishes it from precharge performance.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [781]}], "authoringBatch": "batch-36"}
---

# P0AE7: Precharge contactor driver reads high when off

P0AE7 identifies the precharge contactor A control circuit high. The 2018 GM HPC2/BSM monitor examines the high-side driver for a short-to-power condition with the precharge contactor command **off**.

## What the recorded voltage represents

The documented failure band is 5.27–19.7 V at the control circuit. It is not a high-voltage bus reading or a threshold for battery overcharge. The test requires low-voltage battery supply above 10.2 V and uses 40 failed samples in a 50-sample window, with 12.5 milliseconds between samples. GM lists Type B, two trips.

That off-state condition is the main diagnostic distinction. An energized driver may legitimately have a different voltage; interpreting the number without the command could send diagnosis in the wrong direction.

## Do not infer a complete precharge diagnosis

The monitor does not directly report contact welding or measure the precharge sequence's success. A technician needs the applicable control-circuit procedure, the requested state and the other sequence data to distinguish those issues. Save the original command and fault context before clearing it.

Confirmation after repair should include acceptable driver feedback with the command off and the required system checks for that vehicle. A warning that stays absent after one reset does not demonstrate either result. This article explains the electrical evidence only. It does not provide instructions to power the contactor externally, connect high-voltage conductors or bypass the precharge circuit.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 781](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=781).
