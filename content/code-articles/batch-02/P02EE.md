---
{"entryId":"generic-p02ee","code":"P02EE","title":"P02EE: Cylinder 1 injector opening and closing inferred from voltage feedback","description":"P02EE explained through the documented GM monitor: cylinder 1 injector opening and closing inferred from voltage feedback. Diagnostic distinctions, verification and applicability limits.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG03A ECM monitor at the cited physical PDF pages only. Vehicle, engine and calibration applicability is not established by the file-level application matrix.","sourceIds":["gm-2025-03a"],"sourcePages":[{"sourceId":"gm-2025-03a","pages":[235,236]}],"authoringBatch":"batch-02"}
---

# P02EE: Cylinder 1 injector opening and closing inferred from voltage feedback

P02EE tests the rationality of cylinder 1 injector voltage feedback in this GM strategy. The controller samples that feedback through an analog-to-digital converter and derives information about injector opening magnitude and closing time. It is more specific than a simple open-circuit check.

## Why pulse width is a prerequisite

The monitor evaluates an injection pulse long enough for the pintle to reach full travel and for coil behavior to stabilize. A short pulse that never meets this prerequisite is not an equivalent test condition. The exact minimum pulse width is held in supporting calibration tables.

Failure paths include inability to detect opening, an opening magnitude outside its allowed range, inability to detect closing time, or closing time outside its limits. A detectable event can therefore still be implausible; merely finding a waveform feature does not establish a pass.

## Interpret feedback without overclaiming flow

Record pulse width, feedback-data validity and whichever opening/closing result is available. The table requires general small-pulse diagnostic enablement and valid voltage-feedback data. Its sampling is by cylinder event, with a 50-to-100-sample description and Type B reporting.

This evidence does not independently measure injected fuel quantity. Use the applicable injector diagnostic procedure and calibration to distinguish feedback acquisition from actuator response. Verification needs eligible injection events and a completed rationality test, not just electrical continuity or an apparently normal idle.

## Source and applicability

This explanation is limited to the 2025 GM 25OBDG03A monitor on [page 235](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=235), [page 236](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=236). Its thresholds are calibration examples, not universal specifications. Confirm the vehicle, engine and controller procedure before applying them.
