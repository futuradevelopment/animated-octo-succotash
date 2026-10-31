---
{"entryId": "generic-p0ab4", "code": "P0AB4", "title": "P0AB4: The battery outlet sensor has an absolute cold-limit check", "description": "Understand the GM P0AB4 outlet-air circuit-high monitor and its distinction from fan-on temperature rationality.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [238]}], "authoringBatch": "batch-22"}
---

# P0AB4: The battery outlet sensor has an absolute cold-limit check

P0AB4 identifies the high-circuit end of the battery outlet-air temperature input. The GM calibration rejects an outlet indication below −45°C. The word “high” refers to the electrical fault classification and should not be described as hot outlet air.

## Fan-on comparison is a different monitor

The circuit-high row requires battery-controller run mode, a suitable low-voltage supply and no P0A1F controller-performance fault. It counts 30 failing samples within 40 at 100ms intervals. It does not add the fan-on prerequisite used by P0AB2's outlet-versus-module rationality check.

This distinction makes the event context useful: an implausibly cold signal can be evaluated without proving that the cooling airflow established a particular thermal relationship.

## Save the named sensor value

Record the outlet-air input and validity directly. Inlet-air temperature, ambient temperature and the lowest module temperature are separate measurements and cannot be substituted for it. Companion inlet or outlet codes may help the correct service procedure determine whether the issue is isolated or shared.

The source does not prove a disconnected sensor or identify a failed component. It contains no connector pinout or safe resistance-test method. A qualified battery technician should use the applicable circuit information and prescribed high-voltage isolation before physical access. A cold scan value is not a statement about the safety or energy state of the pack.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 238](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=238).
