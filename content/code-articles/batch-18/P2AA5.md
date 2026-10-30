---
{"entryId":"generic-p2aa5","code":"P2AA5","title":"P2AA5: EGR bypass overtemperature refers to the motor-driver stage","description":"See why P2AA5’s H-bridge temperature evidence must be separated from coolant or exhaust temperature.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG04A documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-04a"],"sourcePages":[{"sourceId":"gm-2025-04a","pages":[1254]}],"authoringBatch":"batch-18"}
---

# P2AA5: EGR bypass overtemperature refers to the motor-driver stage

P2AA5 concerns excessive temperature reported by the H-bridge driving the EGR cooler-bypass motor. Although the component description discusses the bypass DC motor, the explicit measured criterion is driver temperature. A high exhaust or coolant reading is not a substitute for that electrical-driver evidence.

## Identify the temperature that crossed its limit

The documented threshold is above 170°C at the H-bridge driver. The fault information is supplied through the hardware interface, and its status must not be indeterminate. An unavailable or uncertain hardware status should therefore not be treated as a confirmed normal driver temperature.

The monitor is enabled after cranking, with powertrain-relay supply above 11 V and an active diagnostic system. Clear-code or end-of-trip processing can affect that eligibility. Those states belong in the interpretation of an absent or incomplete test result.

## Separate persistence from a replacement diagnosis

GM specifies 160 failed counts among 200 samples, with a 12.5 ms function task. The two-trip classification is separate from this sample-based temperature decision. A single displayed spike and a confirmed sequence provide different evidence.

Preserve the driver status, operating command and qualifying conditions. The source gives an example of internal actuator faults but does not establish a ranked cause or prove which component generated the heat. It also does not authorize bypassing protection or forcing the actuator to operate while overheated.

## Source and applicability

2025 GM 25OBDG04A documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG04A, PDF page 1254](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04A.pdf#page=1254).
