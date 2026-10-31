---
{"entryId":"generic-p23aa","code":"P23AA","title":"P23AA: How pressure pulsations expose a stuck turbo bypass valve","description":"P23AA uses airflow and pressure behavior during a commanded bypass event rather than a simple valve-position assumption.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG07A Part 2 documented monitor only; its application-matrix filename join is unresolved. No model, engine or universal calibration applicability is inferred.","sourceIds":["gm-2025-07a-2"],"sourcePages":[{"sourceId":"gm-2025-07a-2","pages":[857,858]}],"authoringBatch":"batch-15"}
---

# P23AA: How pressure pulsations expose a stuck turbo bypass valve

The cited P23AA strategy detects a turbo bypass valve that behaves as though it remains closed. GM counts pressure-related pulsations during a commanded bypass event. A pulse is defined through airflow-ratio movement across upper and lower thresholds, so ordinary noise is not automatically counted as a failure.

## Evidence needed for the monitor

The row lists more than ten counts over at least one second. It also describes a high-pass-filtered downstream-compressor pressure condition above 10 kPa for 0.1 second. The bypass must be commanded on, its output stage active, and airflow and intake-temperature information valid. Intake temperature must exceed approximately 15°C.

These requirements make a stationary actuator observation incomplete. The monitor is assessing the resulting airflow behavior during an eligible operating event, not merely the presence of an electrical command.

## Verification that addresses this code

Preserve the bypass command, pressure behavior and signal-validity states together. If the command never becomes active, the absence of P23AA on a short drive does not prove the valve passed this specific test. If the prerequisites are met and pulsation evidence persists, the next investigation concerns why the commanded bypass action is ineffective. The source does not isolate a mechanical valve defect from every possible control or measurement problem.

## Document scope and source

2025 GM 25OBDG07A Part 2 documented monitor only; its application-matrix filename join is unresolved. No model, engine or universal calibration applicability is inferred. These figures explain the cited controller logic, not a vehicle-specific repair instruction. Match the vehicle’s service information before applying them.

[GM physical PDF page 857](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=857), [GM physical PDF page 858](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=858).
