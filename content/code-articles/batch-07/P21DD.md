---
{"entryId":"generic-p21dd","code":"P21DD","title":"P21DD: tank heater 1 draws too little current while commanded on","description":"P21DD detects reductant tank heater 1 current below 0.75 ampere during an active heating command.","status":"draft","sourceReview":"checked","scope":"Documented 2025 GM diagnostic parameter monitor in 25OBDG04B.pdf; model, engine and calibration applicability require vehicle-specific confirmation.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[203]}],"authoringBatch":"batch-07"}
---

# P21DD: tank heater 1 draws too little current while commanded on

P21DD is a low-current performance code for reductant heater 1, identified in the reviewed GM table as tank heater 1. Its key distinction is that current is judged while the heater's PWM command is greater than zero. An intentionally uncommanded heater is outside this test's stated condition.

## A low reading needs command context

The malfunction threshold is below 0.75 ampere. Qualification requires 40 samples at 0.1 second each, or four seconds. This is a sustained undercurrent judgment, not a direct open-circuit pinpointing test.

The source explains that faults in tank-temperature sensing, heater circuits, heater supply, communication and Run/Crank can set heater commands to zero. If one of those inhibits heating, observing no current cannot independently reproduce P21DD. The first question is whether the controller was actually requesting heater 1 operation.

## Confirmation and limitations

An active vehicle power mode is required, and specified controller-internal faults must be absent. Reporting is Type A over one trip, with recovery only in the next driving cycle.

Verification should pair the heater 1 current trace with its PWM command and confirm the eligible next-cycle diagnostic result. Heating by another tank element does not demonstrate that this channel draws adequate current. The code alone does not identify an open wire, a failed element or a controller defect, and the table gives no replacement instruction. Exact heater mapping, access and electrical testing must come from the applicable vehicle service procedure for this 2025 GM implementation.

Source: [GM monitor, PDF page 203](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=203).
