---
{"entryId":"generic-p02ce","code":"P02CE","title":"P02CE: understanding cylinder 2 minimum SQP authority","description":"P02CE records a lower-bound learning problem for cylinder 2 in the documented SQP injector strategy.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[1141]}],"authoringBatch":"batch-06"}
---

# P02CE: understanding cylinder 2 minimum SQP authority

P02CE records a lower-bound learning problem for cylinder 2 in the documented SQP injector strategy. It is triggered by an energizing-time correction below a calibration-defined minimum, not by a low-voltage injector circuit reading.

## How the controller obtains the evidence

During diesel fuel cut-off, SQP commands a small injection and estimates the resulting quantity from rail-pressure drop. Whenever it enters a learned value in the map, it evaluates that value against the minimum correction limit. The threshold has microsecond units, so converting this fault into a fuel-pressure limit would misread the table.

The controller retains a Boolean saturation result across the defined rail-pressure levels. At least one failing entry is sufficient for the diagnosis, whereas the described reset of that condition requires all entries to pass.

## What changes the next check

First establish that cylinder-2 learning actually ran with SQP management and authority monitoring enabled. Second, distinguish a single affected pressure region from saturation across several stored regions. Those observations describe different patterns of evidence even though either can produce the code.

The source gives Type B, two-trip reporting, but no replacement rule or universal correction number. A service assessment must reconcile the learned value with the pressure-drop inputs and the vehicle's calibration. Opening a pressurized fuel system is not a diagnostic step supported by this summary table.

## Source and applicability

2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately. These tables describe detection logic, not a complete repair procedure or a component replacement verdict. [gm-2025-04b, PDF page 1141](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1141).
