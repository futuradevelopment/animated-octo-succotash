---
{"entryId":"generic-p00ac","code":"P00AC","title":"P00AC: A below-range inlet-temperature value needs channel confirmation","description":"P00AC in this GM table evaluates the converted temperature after the bank 2 air filter, not a supplied pin-voltage test.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG07A Part 2, specific documented monitor only. Vehicle, engine and calibration applicability require confirmation; application-matrix filename join is unresolved.","sourceIds":["gm-2025-07a-2"],"sourcePages":[{"sourceId":"gm-2025-07a-2","pages":[875]}],"authoringBatch":"batch-11"}
---

# P00AC: A below-range inlet-temperature value needs channel confirmation

P00AC is the low-side intake-air temperature fault for bank 2 sensor 1 in the generic catalog. The cited GM implementation describes a physical-range check of the channel after the air filter, internally called sensor 3.

## What “low” means in this row

The measured quantity is temperature. The boundary is below −42.04°C for two seconds, with ignition on and the applicable inhibition conditions clear. The source does not give a terminal-voltage limit in this particular row.

That distinction matters because a scan description containing “circuit low” can tempt the reader to interpret every low fault as a specific voltage at a guessed connector. Here, the evidence provided is the controller’s converted-temperature range assessment.

## A useful next comparison

First establish that the scan parameter refers to the after-filter bank 2 channel described by the calibration. Preserve its value and operating conditions rather than substituting a manifold-temperature reading, which belongs to a different channel in the surrounding tables.

An extreme displayed temperature is evidence that the reported value crossed the monitor boundary. It is not, by itself, proof of actual intake-air temperature or a failed sensing element. The matching wiring and sensor procedure must distinguish a real measurement from an electrical or interpretation issue. Two-trip reporting also means one short period without recurrence cannot establish that all required monitor conditions have been satisfied.

## Source and applicability

This explanation covers the cited GM monitor, not every vehicle carrying this code. The application-matrix filename does not resolve cleanly to this file, so no model or engine fitment is assigned. [GM diagnostic table, PDF page 875](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=875).
