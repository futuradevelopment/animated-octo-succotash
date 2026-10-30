---
{"entryId":"generic-p07ba","code":"P07BA","title":"P07BA: Park-button switch B exceeds the high-signal boundary","description":"P07BA records a high Park-button switch B signal in the documented 25OBDG04B monitor.","status":"draft","sourceReview":"checked","scope":"Documented 2025 GM diagnostic parameter monitor in 25OBDG04B.pdf; model, engine and calibration applicability require vehicle-specific confirmation.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[650]}],"authoringBatch":"batch-07"}
---

# P07BA: Park-button switch B exceeds the high-signal boundary

P07BA is the high-circuit code for Park-button switch B in GM's 25OBDG04B table. The monitored quantity is the shifter's measured B-channel signal. It is not a measurement of parking-lock engagement force or transmission hydraulic pressure.

## Boundary and persistence

The published high threshold is 236.00 or greater, using an unspecified signal scale. The table requires 20 failures within 25 samples before qualification. It does not print a sampling interval on this page, so the counter alone cannot establish a precise number of milliseconds.

Type B reporting over two trips is listed separately from that sample counter. Those are different stages: samples describe the monitor's failure qualification, while trips describe the reported diagnostic class. Treating “two trips” as the time required for an electrical excursion would confuse them.

## Applying this monitor carefully

The calibration must enable the test. Compare the B-channel measurement with its recognized states and diagnostic status using the correct signal scaling. A Park request shown elsewhere in scan data does not independently prove that switch B remained within its permitted electrical range.

Confirmation requires an enabled B-channel check that no longer accumulates the qualifying high readings. The source does not identify the responsible component or provide a replacement procedure. This article covers the 25OBDG04B implementation. Its signal scaling, sample qualification and trip policy must be confirmed against the installed controller before the numerical threshold is applied to a vehicle.

Source: [GM monitor, PDF page 650](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=650).
