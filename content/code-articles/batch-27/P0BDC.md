---
{"entryId":"generic-p0bdc","code":"P0BDC","title":"P0BDC: sensor E performance is an inverter A cold-soak comparison","description":"GM P0BDC evaluates inverter A temperature sensor 3 against the inverter average after a long shutdown.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[290]}],"authoringBatch":"batch-27"}
---

# P0BDC: sensor E performance is an inverter A cold-soak comparison

P0BDC is the in-range rationality monitor for inverter A temperature sensor 3. The generic description calls this sensor E range/performance; the GM table identifies its signal as PIM Temp 2. Neither label alone provides a physical mounting location.

## Compare temperatures under the intended condition

The monitor looks for an absolute difference greater than 15°C between PIM Temp 2 and the inverter-temperature average. Ignition must have been off for at least 360 minutes. The motor temperature and inverter average must also meet the source's minimum range conditions.

That cold-soak context is essential. Different sensors can experience different heating during operation, so this published test must not be turned into a universal rule for agreement at every operating point. Preserve the shutdown duration and the temperature group when reviewing the fault.

## Direct circuit faults take precedence

The source inhibits the rationality comparison while listed inverter or motor temperature out-of-range faults are active. It also specifies a startup delay and repeated-count filtering. A missing performance result while a circuit fault is active does not establish that sensor E is accurate.

The documented result is a plausibility disagreement, not a mandatory sensor or inverter replacement. The exact vehicle procedure must establish the correct signal mapping and physical diagnosis. Work around the high-voltage inverter requires qualified personnel; the temperature difference is not a safe-access or probing instruction.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 290](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=290).
