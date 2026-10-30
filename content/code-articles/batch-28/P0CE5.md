---
{"entryId":"generic-p0ce5","code":"P0CE5","title":"P0CE5: Coolant valve has not reached its commanded position","description":"GM P0CE5 concerns coolant-valve command tracking after the learning prerequisite, distinct from direct low/high feedback-circuit faults.","status":"draft","sourceReview":"needs-review","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[559]}],"authoringBatch":"batch-28"}
---

# P0CE5: Coolant valve has not reached its commanded position

P0CE5 is the battery coolant-valve position-performance diagnostic in this GM table. The controller checks whether the valve has reached the position it was commanded to reach. That is different evidence from a sensor signal lying outside an electrical voltage range.

## Separate tracking from learning and drift

The row requires the P1F56 learning procedure not to be running, or to have completed. Evaluation during an unfinished learning state should not be treated as equivalent to the stated tracking check. The adjacent unexpected-position-change monitor has its own condition involving movement after a stationary period; that is not interchangeable with failure to reach a command.

GM lists 1280 failures in 1600 samples at 6.25-millisecond intervals in states B/C. The threshold column also places a 22-second expression beside “has not reached” wording. Because that phrasing does not clearly establish a simple elapsed-time failure direction, this article does not turn it into a universal timeout instruction.

## Retain command and observed position

A workshop needs the commanded state, observed feedback, learning status and relevant circuit faults. P0CE5 alone does not establish whether the cause is mechanical movement, sensor reporting or control circuitry.

The source supplies no universal valve location or replacement requirement. Physical investigation of battery cooling equipment must follow the exact vehicle procedure, performed by appropriately qualified personnel. Verification should explain restored command tracking under valid conditions rather than only a cleared fault record.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 559](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=559).
