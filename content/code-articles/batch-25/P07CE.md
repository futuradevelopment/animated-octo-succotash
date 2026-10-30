---
{"entryId":"generic-p07ce","code":"P07CE","title":"P07CE: tour-mode request remains asserted too long","description":"GM documents P07CE in its MYB transmission section as a tour-mode switch state that stays true for the fault interval.","status":"draft","sourceReview":"checked","scope":"2015 GM 15OBDG06 TCM summary, MYB unique section. P07CE is mapped to the tour-mode input in this document; per-vehicle implementation remains unverified.","sourceIds":["gm-2015-15obdg06-transmission-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg06-transmission-diagnostics","pages":[97]}],"authoringBatch":"batch-25"}
---

# P07CE: tour-mode request remains asserted too long

P07CE is labeled transmission mode switch D in the cited GM MYB-specific table. The corresponding input is the tour-mode switch, and the monitor evaluates that state remaining true for a 600-second fault interval.

## A stored mode is not automatically a stuck switch

The result concerns the switch-state signal described in this calibration. It should not be inferred merely because a dashboard continues to display a selected driving mode. A persistent selected mode and a persistent switch request can be different pieces of information.

The summary does not supply the user-interface design or a connector-level interpretation of the signal. The exact vehicle procedure is needed to determine how that input should behave when the control is released.

## The observation is qualified by engine and supply state

GM requires an allowed ignition-voltage range and engine speed within limits for a specified preliminary period. Those conditions matter when attempting to reproduce a long-duration fault. A short ignition-on button test does not exercise the full documented interval.

The row is classified as a special result with no MIL illumination. An unlit check-engine lamp therefore does not demonstrate that the transmission mode-input diagnosis is absent.

Record the actual tour-switch input, duration and operating conditions rather than replacing a selector from the code title. The table establishes a sustained-input concern; it does not prove whether the physical switch, wiring or receiving logic caused that concern.

## Application limits

2015 GM 15OBDG06 TCM summary, MYB unique section. P07CE is mapped to the tour-mode input in this document; per-vehicle implementation remains unverified.

## Source

[15OBDG06 Transmission Diagnostics](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG06%20Transmission%20Diagnostics.pdf#page=97), physical PDF pages 97.
