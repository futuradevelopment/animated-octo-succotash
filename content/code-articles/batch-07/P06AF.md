---
{"entryId":"generic-p06af","code":"P06AF","title":"P06AF: engine shutdown code can reflect controller pattern monitoring","description":"P06AF monitors expected processing-status patterns exchanged between the ECM and TCM in the documented GM system.","status":"draft","sourceReview":"checked","scope":"Documented 2025 GM diagnostic parameter monitor in 25OBDG04B.pdf; model, engine and calibration applicability require vehicle-specific confirmation.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[638,2045]}],"authoringBatch":"batch-07"}
---

# P06AF: engine shutdown code can reflect controller pattern monitoring

Although P06AF is titled “Torque Management System — Forced Engine Shutdown,” the GM tables reviewed here describe a controller-processing supervision check. They do not describe a direct torque measurement or identify a failed engine component.

## Which controller reported it matters

The ECM version monitors a pattern sent by the transmission control module over CAN. The TCM version describes the reciprocal check of information from the engine control module. A missing or incorrect expected pattern, or receipt of a malfunction pattern, can satisfy the diagnostic. This makes the reporting module part of the evidence, rather than an incidental detail on the scan report.

The table lists at least two received malfunction-pattern counts as one trigger. Other pattern monitoring is expressed through count and continuous-time criteria, including a 2,000-millisecond path and 25-millisecond processor updates. These should not be reduced to a single universal communication timeout.

## Interpreting and confirming the fault

Monitoring requires Run or Crank with at least 500 milliseconds of active time. Reporting is Type A, one trip. Preserve the originating module and accompanying controller or communication faults before drawing conclusions from the shutdown wording. A missing processing pattern and an explicitly reported malfunction pattern are different evidence paths, even though both may produce P06AF.

Verification needs the applicable controller check to execute after the enabling delay; simply observing that the engine restarts does not establish a pass. The source provides monitor criteria, not a complete shutdown diagnosis or a recommendation to replace either module. Its 2025 file scope does not establish applicability to every vehicle carrying the generic code.

Source: [GM monitor, PDF page 638](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=638); [GM monitor, PDF page 2045](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=2045).
