---
{"entryId":"generic-p2da6","code":"P2DA6","title":"P2DA6: F-150 Lightning coolant-heater diagnosis and the ECT2 test step","description":"Ford’s P2DA6 message requires a specific build date and pinpoint-test observation before treating the code as its software case.","status":"draft","sourceReview":"checked","scope":"Ford SSM 52211, January 2024: 2023 F-150 Lightning built on or after July 31, 2023; P2DA6 stored in SOBDMC.","sourceIds":["nhtsa-mc-10249430"],"sourcePages":[{"sourceId":"nhtsa-mc-10249430","pages":[1]}],"authoringBatch":"batch-30"}
---

# P2DA6: F-150 Lightning coolant-heater diagnosis and the ECT2 test step

P2DA6 on the F-150 Lightning is not sufficient, by itself, to establish a failed coolant heater. Ford SSM 52211 describes a possible SOBDMC software condition on 2023 vehicles built on or after July 31, 2023. Both the production boundary and the module storing the code are part of the bulletin’s scope.

## A temperature reading must come from the correct test context

Ford directs the technician to climate-control Pinpoint Test AK for P2DA6:00 in the electric dual-automatic-temperature-control procedure. At step AK4, an ECT2 data value above 70°C is the observation associated with the software case. That is not a general rule that any coolant temperature over 70°C proves a false code. The preceding test setup and the identified sensor parameter matter.

A different ECT2 result, a different build date or additional symptoms cannot simply be folded into this conclusion. Preserve the original code, reporting module, build information and any heating complaint so the workshop can follow the appropriate branch of the test.

## What the dated message establishes

The January 2024 notice said no additional service was required for its defined condition at that time and that engineering was developing a solution. It also stated that the described condition did not affect operation or durability. Those statements belong to the qualified case, not every coolant-heater warning.

The technician should check subsequent service information before deciding what software work is now applicable. The bulletin does not provide owner-level heater testing or authorize high-voltage access. Its useful contribution is a specific decision point that prevents premature heater replacement while preserving normal diagnosis for other results.

## Source and applicability

Ford SSM 52211, January 2024: 2023 F-150 Lightning built on or after July 31, 2023; P2DA6 stored in SOBDMC.

[SSM 52211 — NHTSA manufacturer communication 10249430](https://static.nhtsa.gov/odi/tsbs/2024/MC-10249430-0001.pdf#page=1), physical PDF page 1.
