---
{"entryId": "generic-p20ba", "code": "P20BA", "title": "P20BA: When DEF tank heater power or calculated resistance misses its target", "description": "Learn the separate resistance and power checks behind P20BA and why heater eligibility changes the interpretation.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 25OBDG04B DEFC monitor calibration only; this document does not establish applicability to every model, engine or reductant system.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [194]}], "authoringBatch": "batch-14"}
---

# P20BA: When DEF tank heater power or calculated resistance misses its target

P20BA evaluates the first DEF tank heater's electrical performance in the documented GM system. The controller considers both calculated resistance and the difference between requested and measured heating power. This is broader than a simple broken-wire check.

## Two performance tests use different timing

Resistance is calculated from the difference between the high-side and low-side voltages divided by heater current. The listed acceptable window is bounded by 1.0 and 1.8 ohms, with an eight-second failure accumulation outside it. A separate power comparison allows a 45-watt difference in either direction and uses ten seconds of failure accumulation.

The direction matters: too much delivered power is included as well as too little. A diagnosis framed only as “the heater does not get hot” would overlook half of the electrical power comparison.

## A disabled heater is not a completed performance test

The monitor requires a positive PWM command. The table lists several temperature, heater, supply and communication faults that can force that command to zero. In that condition, absence of a new P20BA result does not demonstrate satisfactory heater resistance or power.

Useful verification compares command, current, voltage-derived resistance and actual versus requested power during an eligible heating period. These are controller-calibration figures, not an invitation to energize the heater directly. The source supports identifying which performance comparison failed, while the actual component or circuit cause still requires the vehicle's service procedure.

## Source and scope

2025 GM 25OBDG04B DEFC monitor calibration only; this document does not establish applicability to every model, engine or reductant system. These are documented monitor criteria, not a universal repair procedure. [GM PDF, physical page 194](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=194).
