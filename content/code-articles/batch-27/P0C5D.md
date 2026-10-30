---
{"entryId":"generic-p0c5d","code":"P0C5D","title":"P0C5D: motor A resolver circuit B high is an S24 reference-range fault","description":"GM P0C5D checks a high S24 reference-voltage report and must not be confused with motor B or position-learning status.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[292]}],"authoringBatch":"batch-27"}
---

# P0C5D: motor A resolver circuit B high is an S24 reference-range fault

P0C5D is the motor A position-sensor circuit B high diagnosis in the cited GM source. Its measured quantity is resolver S24 circuit reference voltage. The B in the circuit name identifies this sensing channel; it does not change the drive-motor identity to motor B.

## Apply the high branch's own filter

GM's threshold is S24 reference voltage above 3.0 V with the wakeup signal on. The filter requires twenty qualifying counts within thirty at a 10.4 ms rate and uses one-trip reporting.

The low counterpart P0C5C uses fifty qualifying counts among eighty. That difference means the two fault directions should not be treated as having identical maturation behavior. Retain the original direction, channel and operating state when comparing stored faults with later data.

## Separate reference voltage from learned angle

The source provides distinct circuit, signal-performance and not-learned resolver monitors. A high reference report does not itself prove that the rotor offset needs correction or that the resolver must be replaced.

The actual vehicle's circuit information is needed to identify S24 and determine a safe diagnostic method. The published voltage limit is not an instruction to inject voltage or probe an energized high-voltage assembly. A qualified hybrid technician must establish safe isolation for physical work and verify credible reference behavior under eligible operation after addressing the cause.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 292](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=292).
