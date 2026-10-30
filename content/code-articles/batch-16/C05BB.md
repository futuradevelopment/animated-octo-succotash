---
{"entryId": "generic-c05bb", "code": "C05BB", "title": "C05BB: Shared sensor supply 2 can fail low, high or erratically", "description": "C05BB monitors the second shared five-volt supply for pedal-travel and motor-position circuits in this brake controller.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 04B documented monitor only; module and calibration applicability must be matched to the vehicle.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [323]}], "authoringBatch": "batch-16"}
---

# C05BB: Shared sensor supply 2 can fail low, high or erratically

C05BB is a supply-performance fault in the documented brake controller. Supply 2 powers one pedal-travel sensor circuit and one motor-position sensor circuit. A common supply problem can therefore affect both kinds of feedback, even though the dictionary emphasizes the motor-position sensor.

## Sustained range and intermittent behaviour

The low branch requires supply feedback below 4.85 V for 100 milliseconds. The high branch uses feedback above 5.15 V for the same duration. Both associated sensor circuits must be enabled, and initialization, cranking, diagnostic-command and shutdown states are excluded.

An erratic branch accumulates evidence when the supply moves outside its accepted range and reduces that evidence more slowly when it returns. The source's erratic-condition formula contains an impossible paired comparison, and its prose and maturation column give different timing figures. Those conflicts are not silently turned into an exact test sequence.

## Follow the shared dependency

Preserve supply-2 status with both pedal and motor feedback faults. Replacing one sensor without investigating the shared supply can leave the central evidence unexplained. Conversely, this monitor does not prove whether a sensor load, circuit board or supply source caused the voltage problem.

Use the precise brake-system wiring and service routine for any electrical measurement. Do not feed an external five-volt supply into the circuit. Verification should address the actual range or intermittent branch under eligible operating conditions and complete the required braking checks. Erasing the code alone does not establish trustworthy pedal or motor-position information.

## Source and applicability

2025 GM 04B documented monitor only; module and calibration applicability must be matched to the vehicle. [GM PDF, page 323](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=323).
