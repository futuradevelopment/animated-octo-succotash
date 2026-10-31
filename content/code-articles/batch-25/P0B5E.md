---
{"entryId":"generic-p0b5e","code":"P0B5E","title":"P0B5E: sense-H readings need the controller test state recorded","description":"The cited GM P0B5E monitor shares open-line logic that is qualified by communication and protection-test conditions.","status":"draft","sourceReview":"needs-review","scope":"Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[635,636]}],"authoringBatch":"batch-25"}
---

# P0B5E: sense-H readings need the controller test state recorded

P0B5E is the battery voltage-sense circuit H code in the cited GM BECM summary. The monitor family evaluates open sensing from patterns in cell and busbar-related readings, rather than declaring that a particular physical cell has failed.

## A protection self-test changes the diagnostic context

The continuation of the shared table requires a separate second-protection self-test not to be running. That restriction is important during workshop procedures: a result observed while another internal test is active is not necessarily comparable with the normal open-sensing evaluation.

Communication enable, absence of specified communication faults, and valid supporting module status also qualify the monitor. Retain those states with the H-channel reading when interpreting a failure or a non-returning code.

## Compare the pattern before selecting parts

The general sensing-line case compares adjacent voltages. Other cases describe shared-power and busbar effects, including multiple affected readings. A technician should therefore examine the surrounding data instead of treating the H label as a replacement-part designation.

The source's positive-side busbar expression is incomplete. This article does not invent the missing condition, and the summary does not map H to a connector or universally numbered cell.

Use qualified high-voltage service procedures to establish whether the fault lies in measurement wiring, sensing electronics or another documented path. Verification requires a valid monitor result in the appropriate controller state, not just a successful clearing operation.

## Application limits

Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.

## Source

[15OBDG01 Hybrid Diagnostics](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=635), physical PDF pages 635, 636.
