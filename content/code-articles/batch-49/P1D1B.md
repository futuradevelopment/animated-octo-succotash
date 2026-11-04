---
{"entryId": "honda-p1d1b", "code": "P1D1B", "title": "P1D1B: The V2S sensor output stays above its electrical ceiling", "description": "Honda P1D1B monitors the V2S voltage-sensor signal used in controlling traction-motor and generator output.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1d1b-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1d1b-factory", "pages": [1]}], "authoringBatch": "batch-49"}
---

# P1D1B: The V2S sensor output stays above its electrical ceiling

## Separate the sensor output from the traction voltage

Honda P1D1B monitors the V2S voltage-sensor signal used in controlling traction-motor and generator output. The source specifies a sensor output above 4.88 V for at least 500 milliseconds as the malfunction threshold. This is a signal-circuit limit in the cited calibration, not a statement that the high-voltage traction circuit itself operates at 4.88 V.

The monitor runs continuously when the listed 12-volt supply requirement of at least 8 V is met. Its short persistence period means an electrical excursion can matter even when a later scan displays a value within range. Retaining the original event data is more informative than relying only on the current dashboard state.

## The code does not identify an external test point

The factory cause list names internal PCU failure. No connector terminal, independent voltage reference or separate sensor-replacement procedure is provided in this excerpt. A technician must use the exact Honda service information before deciding how to verify the reported signal.

This is a one-drive-cycle MIL fault, and the monitor table also identifies the power-system indicator. Pending, confirmed and freeze-data records are stored in the motor control module. Save them before clearing, and assess related voltage-sensor or internal-supply records together.

Any work requiring PCU access must follow the applicable high-voltage isolation and verification procedure. A low-voltage sensor threshold is not permission to probe an assumed signal wire in an energized power-electronics assembly.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P1D1B%205548.pdf), PDF pages 1. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
