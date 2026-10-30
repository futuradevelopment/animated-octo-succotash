---
{"entryId":"generic-p0bdd","code":"P0BDD","title":"P0BDD: sensor E low voltage produces a hot-looking calculated value","description":"GM P0BDD checks the low-voltage branch of inverter A temperature sensor 3 and must be separated from actual overheating.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[290]}],"authoringBatch":"batch-27"}
---

# P0BDD: sensor E low voltage produces a hot-looking calculated value

P0BDD refers to inverter A temperature sensor 3 circuit low in this GM source. Generic terminology calls the same cited channel inverter temperature sensor E. Low describes the electrical signal, while the associated calculated temperature is high.

## Interpret the signal direction correctly

GM links this branch to PIM Temp 2 above 125°C, near zero sensing volts. A hot-looking scan value with this circuit fault therefore needs measurement-integrity evaluation before it is treated as proven physical inverter temperature.

The wakeup signal must be on. The row lists 250 qualifying counts within 350 counts at a 10.4 ms rate and two-trip reporting. These are the calibration's detection conditions, not a procedure for deliberately heating the system.

## Choose the correct comparison

The document separately defines sensor plausibility and in-range overtemperature monitors. Preserve those related records along with the PIM Temp 2 value and other inverter temperatures. Their individual status helps distinguish a direct electrical-range problem from a credible thermal event.

The source does not identify a specific short, connector location or replacement component from P0BDD alone. A trained hybrid technician must use the applicable circuit information to establish the cause and confirm a plausible response. Do not infer that an internal controller state or a low signal voltage makes the inverter safe to touch; high-voltage isolation requires the actual service procedure.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 290](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=290).
