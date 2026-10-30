---
{"entryId":"generic-p0bf3","code":"P0BF3","title":"P0BF3: motor B phase U low is an electrical-range check","description":"GM P0BF3 checks a low phase U sensor report with PWM disabled, and can prevent the offset monitor from running.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[296]}],"authoringBatch":"batch-27"}
---

# P0BF3: motor B phase U low is an electrical-range check

GM assigns P0BF3 to the low-range branch of motor B phase U current sensing. A generic reader's circuit-low wording does not disclose the operating-state prerequisite, which is essential to interpreting this sensor report.

## Use the disabled-PWM context

The source looks for phase U sensor output below −700 A. The wakeup signal must be on and PWMOutputEnable must be FALSE. This is a reported electrical-range condition with output disabled, not a direct statement that the motor was carrying that current while driving.

The monitor uses ten qualifying counts in a fifteen-count window at a 2.08 ms rate. The table lists two-trip reporting separately. A later live-data number without the original controller state does not reconstruct the complete event.

## Consider the effect on performance testing

P0BF2, the phase U offset monitor, is inhibited while P0BF3 or P0BF4 is active. Consequently, the absence of a performance fault cannot be used to dismiss an existing low-range fault.

The document provides no universal pinout, sensor resistance or required replacement part. A qualified hybrid technician must use vehicle-specific circuit information to establish measurement integrity and verify an eligible recovery. The current threshold must not be recreated physically, and PWM disable alone is not safe electrical isolation for work around the high-voltage inverter.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 296](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=296).
