---
{"entryId":"generic-p0bfb","code":"P0BFB","title":"P0BFB: motor B phase W low is a disabled-output sensing check","description":"GM P0BFB detects a low phase W current-sensor report under specified wakeup and PWM conditions.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[297]}],"authoringBatch":"batch-27"}
---

# P0BFB: motor B phase W low is a disabled-output sensing check

P0BFB is the low-range diagnosis for motor B phase W current sensing in the cited GM document. The code concerns the controller's sensor report, not a conclusive measurement of physical motor current under ordinary driving conditions.

## Interpret the range threshold in its context

The reported phase W output must be below −700 A. The source requires the wakeup signal on and PWMOutputEnable FALSE. That disabled-output state distinguishes this check from protection monitors evaluating excessive current during inverter operation.

Ten qualifying counts among fifteen at a 2.08 ms rate are specified. The two-trip reporting classification should be kept separate from this sample filter. Save the operating state and original code status along with the signal value when the event is investigated.

## Do not overlook inhibited offset testing

The phase W offset monitor is unavailable while P0BFB or P0BFC is active. A missing range/performance code does not, by itself, establish that the channel's offset is normal.

The source does not identify a failed connector, require a particular part or give a safe current-injection method. Exact vehicle circuit information is needed to distinguish inaccurate sensing from other conditions. A qualified hybrid technician must establish high-voltage isolation independently; PWM disable is not sufficient evidence for safe access. Confirm credible readings and eligible monitor operation after repair rather than relying only on cleared memory.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 297](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=297).
