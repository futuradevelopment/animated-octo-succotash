---
{"entryId":"generic-p00ae","code":"P00AE","title":"P00AE: A temperature jump is judged against a filtered reference","description":"P00AE compares raw and filtered intake-temperature values; its intermittent label does not mean every brief change qualifies.","status":"draft","sourceReview":"needs-review","scope":"2025 GM 25OBDG07A Part 2, specific documented monitor only. Vehicle, engine and calibration applicability require confirmation; application-matrix filename join is unresolved.","sourceIds":["gm-2025-07a-2"],"sourcePages":[{"sourceId":"gm-2025-07a-2","pages":[875]}],"authoringBatch":"batch-11"}
---

# P00AE: A temperature jump is judged against a filtered reference

P00AE is the intermittent intake-temperature code for bank 2 sensor 1. The GM strategy shown here uses a gradient-related check: it compares the raw temperature value with a filtered version instead of simply searching for a value above or below a fixed temperature limit.

## A change must differ from the filtered signal

The stated absolute difference is greater than 10 kelvin, maintained for a 20-second interval. A temperature difference of 10 kelvin is also a 10°C difference; it does not mean the measured air must be colder than or hotter than 10°C.

This explains why a single rapid change is incomplete evidence. The controller is assessing disagreement between differently processed representations of the signal over time. Ignition-on operation and the referenced inhibit conditions also apply.

## Keep the channel ambiguity visible

The strategy identifies the sensor after the air filter on bank 2, but its measurement sentence calls the filtered reference “sensor 1.” Adjacent rows use a different internal channel numbering convention. The exact data-channel mapping therefore needs confirmation before comparing two scan PIDs as if they were this raw/filtered pair.

The source supports the comparison principle and its documented interval, not a conclusion that vibration or a loose connector is the established cause. Preserve the event history and use the matching service information to distinguish a real intermittent measurement from a processing or channel-identification problem.

## Source and applicability

This explanation covers the cited GM monitor, not every vehicle carrying this code. The application-matrix filename does not resolve cleanly to this file, so no model or engine fitment is assigned. [GM diagnostic table, PDF page 875](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=875).
