---
{"entryId":"generic-p0c2b","code":"P0C2B","title":"P0C2B: auxiliary transmission-pump feedback is a communication check here","description":"GM P0C2B monitors complete pump-controller fault-status messages, separately from the pump-speed performance diagnosis.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[164]}],"authoringBatch":"batch-27"}
---

# P0C2B: auxiliary transmission-pump feedback is a communication check here

P0C2B is the auxiliary transmission-fluid-pump feedback code in the cited GM hybrid table. The source defines this particular feedback problem as incomplete or missing fault-message communication between the transmission auxiliary oil-pump controller and the hybrid control processor.

## Distinguish communication from pump speed

A complete fault-status message is expected every 1.5 seconds. The monitor requires RunCrankActive for more than 0.2 seconds and lists a 9.75-second failure time. These conditions concern communication completeness, not a measured difference between commanded and actual pump speed.

The separate P2797 row on the same page evaluates pump-speed performance. Its RPM threshold and retry behavior must not be copied into a P0C2B diagnosis simply because both rows concern the same auxiliary pump.

## Verification has its own timing

The pass row requires complete communication with the same message interval and lists 1.75 seconds for recovery evaluation. A single received fragment or a briefly cleared code does not establish that the complete status exchange is consistently restored.

Preserve communication status and companion pump or controller faults so a technician can follow the correct vehicle-specific path. The source does not identify a failed pump motor, require replacing the pump assembly or publish a universal connector test. Physical diagnosis must follow the actual hybrid service precautions, and confirmation should demonstrate sustained complete message communication under the documented operating state.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 164](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=164).
