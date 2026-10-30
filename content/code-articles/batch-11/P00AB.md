---
{"entryId":"generic-p00ab","code":"P00AB","title":"P00AB: An intake-temperature plausibility fault can be biased or stuck","description":"P00AB compares the bank 2 inlet-temperature channel with cold-start references and also checks whether its value changes enough.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG07A Part 2, specific documented monitor only. Vehicle, engine and calibration applicability require confirmation; application-matrix filename join is unresolved.","sourceIds":["gm-2025-07a-2"],"sourcePages":[{"sourceId":"gm-2025-07a-2","pages":[877,878]}],"authoringBatch":"batch-11"}
---

# P00AB: An intake-temperature plausibility fault can be biased or stuck

P00AB is a performance assessment of the bank 2 intake-temperature sensor after the air filter. In the GM example it can arise through two different reasoning paths: disagreement with other temperatures at cold start, or insufficient change in its own reading.

## Two plausibility questions

The cold-start checks compare this channel with a mean calculated from stored values of other temperature sensors. Differences greater than 14.96°C are evaluated in either direction. A plausible-looking temperature can therefore still be suspect if the reference group supports a substantially different value.

The stuck check instead looks at the spread between maximum and minimum readings. Its threshold is calibration-dependent, shown as a 0.360–1.560°C range and linked to a lookup table. That is not a single universal variation requirement.

## Identify which evidence failed

For a cold-start discrepancy, retain the comparison temperatures and the fact that a cold start was recognized. For a stuck-value investigation, a time history is more informative than one reading. These are different diagnostic questions, even though they share P00AB.

The document internally calls this sensor 3 and requires ignition on plus the applicable inhibit conditions. It does not prove that a replacement sensor will solve the issue. Confirm the vehicle’s sensor naming and comparison strategy before judging a channel by ambient temperature alone or treating normal short-term stability as a fault.

## Source and applicability

This explanation covers the cited GM monitor, not every vehicle carrying this code. The application-matrix filename does not resolve cleanly to this file, so no model or engine fitment is assigned. [GM diagnostic table, PDF page 877](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=877); [GM diagnostic table, PDF page 878](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=878).
