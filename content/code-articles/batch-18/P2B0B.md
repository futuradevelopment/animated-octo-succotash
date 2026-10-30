---
{"entryId":"generic-p2b0b","code":"P2B0B","title":"P2B0B: Cylinder 4’s cold-start injection pulse lacks opening evidence","description":"Understand how P2B0B uses injector-coil feedback during catalyst warm-up rather than treating it as a conventional misfire code.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[867,1372]}],"authoringBatch":"batch-18"}
---

# P2B0B: Cylinder 4’s cold-start injection pulse lacks opening evidence

P2B0B concerns an expected cylinder 4 injection pulse during catalyst warm-up for which the controller does not obtain the expected injector-opening evidence. GM detects the armature or pintle movement indirectly through voltage-flux feedback from the injector coil. This is different from inferring combustion quality solely from crankshaft motion.

## A command is not proof that fuel was delivered

The monitor distinguishes a commanded pulse from the feedback associated with movement. The source describes both an absent opening magnitude and evaluation of a converted opening-magnitude metric against supporting calibration data. Sending a pulse command therefore does not demonstrate that the injector responded as expected.

The supporting threshold is indexed by measured fuel-rail pressure. That controller metric should not be turned into a universal connector-voltage test or transferred from a different calibration file without checking its definitions.

## Verify the warm-up opportunity

Small-pulse diagnostics, catalyst warm-up and voltage-feedback data readiness must be enabled. The table uses cylinder-event sampling and lists a 50–100 sample monitoring span. A normal result after warm-up has ended does not reproduce that cold-start diagnostic opportunity.

Useful evidence includes the affected cylinder, the warm-up state and whether the feedback data was ready for the commanded pulses. The monitor does not directly measure injected fuel mass or identify why movement evidence was missing. Fuel-system diagnosis requires the applicable service information and appropriate handling of the pressurized system.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 867](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=867). [25OBDG03B, PDF page 1372](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=1372).
