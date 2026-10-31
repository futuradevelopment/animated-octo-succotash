---
{"entryId":"generic-p04ba","code":"P04BA","title":"P04BA: fuel-door position feedback is above the calibrated limit","description":"GM separates the P04BA high fuel-door position signal from the low P04B9 and invalid-range P04B8 branches.","status":"draft","sourceReview":"checked","scope":"Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[593]}],"authoringBatch":"batch-25"}
---

# P04BA: fuel-door position feedback is above the calibrated limit

P04BA is the high-circuit branch for fuel-fill door position feedback in the cited GM hybrid summary. The controller detects a reported position above the documented high threshold, and the strategy associates this branch with a short-to-battery condition.

## A high reading is not extra door travel

The percentage represents the monitored electrical position signal. It should not be read as a direct hinge-angle measurement. A door that appears normally open can still have an electrically invalid high signal, and a high displayed percentage does not prove that the mechanism moved farther than intended.

The neighboring P04B8 row covers an invalid intermediate band, while P04B9 covers the low branch. These distinctions are useful when documenting whether a fault stayed high, wandered into an invalid range or changed polarity.

## Use the correct feedback source

The document also monitors lock position and the open-request switch separately. A scan tool may present all of them together; identify the door-position channel associated with P04BA before applying any circuit conclusion.

GM's row requires six failed samples within an eight-sample window, with the diagnostic calibration enabled. A brief post-clear reading does not show whether that criterion was met or whether the monitor had time to evaluate.

The table gives no connector location or component-replacement decision. Preserve the high-signal evidence and use the matching vehicle service information to distinguish a supply short, connection issue or sensor-related failure.

## Application limits

Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.

## Source

[15OBDG01 Hybrid Diagnostics](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=593), physical PDF pages 593.
