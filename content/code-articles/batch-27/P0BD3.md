---
{"entryId":"generic-p0bd3","code":"P0BD3","title":"P0BD3: a low inverter-temperature signal can appear as extreme heat","description":"GM P0BD3 concerns inverter A temperature sensor 2 low voltage, represented by a high calculated temperature in the source.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[290]}],"authoringBatch":"batch-27"}
---

# P0BD3: a low inverter-temperature signal can appear as extreme heat

P0BD3 is the low-voltage circuit diagnosis for inverter A temperature sensor 2 in the GM table. Its generic label is inverter temperature sensor C circuit low. The word low refers to electrical signal voltage, not to a cold inverter.

## Understand the inverse temperature indication

GM associates the low-voltage condition with PIM Temp 1 above 125°C, near zero signal volts. This relationship explains why an implausibly hot scan value can require a sensing-circuit investigation rather than immediately proving a real thermal event.

The controller must be awake. The timing field specifies 250 qualifying counts within 350 counts, at a 10.4 ms rate, and lists two-trip reporting. Those are detection details for this calibration; they are not instructions to heat an inverter until a code appears.

## Separate electrical and thermal evidence

The same document has distinct in-range overtemperature monitors. A direct circuit-low fault should therefore be evaluated with the other sensor readings and related faults before a technician treats the displayed temperature as established physical heat.

The source does not identify a connector pin, resistance test or mandatory sensor replacement. Match PIM Temp 1 to the actual vehicle's service information and verify the measurement path using the prescribed procedure. Any physical work around the high-voltage inverter requires the correct isolation precautions. Clearing the fault without demonstrating a credible signal under eligible operation is not meaningful verification.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 290](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=290).
