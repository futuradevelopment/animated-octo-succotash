---
{"entryId":"generic-p0bd8","code":"P0BD8","title":"P0BD8: inverter B sensor 2 low voltage is reported as extreme temperature","description":"GM P0BD8 identifies the low-voltage branch of inverter B sensor 2, rather than a direct proof of actual overheating.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[302]}],"authoringBatch":"batch-27"}
---

# P0BD8: inverter B sensor 2 low voltage is reported as extreme temperature

P0BD8 is the inverter B temperature sensor 2 circuit-low monitor in this GM source. The generic D-channel description refers to electrical voltage. The table associates the fault with PIM Temp 1 reporting above 125°C while the sensing voltage is near zero.

## Distinguish the signal from physical heat

An extreme calculated temperature with a circuit-low code should prompt evaluation of measurement integrity. It does not, by itself, establish that the inverter physically reached that temperature. The document separately defines in-range thermal monitors, which answer a different diagnostic question.

The low-range monitor runs with the controller wakeup signal on. Its filter uses 250 qualifying counts within 350 counts at a 10.4 ms rate, with two-trip reporting. These conditions should be understood before comparing a stored event with a later cold-start display.

## Establish the appropriate diagnostic path

Preserve PIM Temp 1, the other inverter temperature readings and any related circuit or performance faults. The source identifies the monitored input but does not provide a universal pinout, resistance value or mandatory component replacement.

A qualified hybrid technician must use the exact vehicle procedure to determine whether the low signal reflects a sensing-path problem and to verify a credible response after repair. Do not perform high-voltage probing based on the near-zero-volt description; the inverter's surrounding power circuits require the prescribed isolation and access precautions.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 302](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=302).
