---
{"entryId":"generic-p0add","code":"P0ADD","title":"P0ADD: negative-contactor control feedback fails its state comparison","description":"GM P0ADD checks the negative-contactor driver using command-dependent feedback, while contactor position remains a separate question.","status":"draft","sourceReview":"checked","scope":"Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[554]}],"authoringBatch":"batch-25"}
---

# P0ADD: negative-contactor control feedback fails its state comparison

P0ADD identifies the negative battery-contactor control-circuit monitor in the cited GM hybrid table. The controller detects disagreement between its driver command and the actual electrical response of the control circuit.

## Preserve which contactor reported the fault

The positive contactor has a separate result, P0AD9. Although the source describes similar control-side tests, P0ADD points to the negative-contactor channel. That distinction is necessary when the applicable service procedure identifies the relevant wiring and driver.

The row examines voltage behavior with the driver off and current feedback during an on-state open-load check. A command without the corresponding feedback is incomplete evidence. The table also expressly says this diagnostic cannot detect a short to ground, so a passing result has a defined limit.

## Electrical state does not prove isolation

The control-circuit monitor does not independently verify the position of the high-voltage contacts or absence of hazardous voltage. The vehicle's contactor-state and high-voltage isolation procedures remain separate requirements for physical work.

GM qualifies the check with sufficient 12-volt supply and a repeated-failure window. Unlike the positive-channel row on the same page, this row lists a two-trip classification. Keep that difference in mind when comparing stored histories.

A repair record should identify the negative channel, commanded state, feedback and supply condition. It should not jump from the code to a complete battery replacement without the actual circuit diagnosis.

## Application limits

Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.

## Source

[15OBDG01 Hybrid Diagnostics](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=554), physical PDF pages 554.
