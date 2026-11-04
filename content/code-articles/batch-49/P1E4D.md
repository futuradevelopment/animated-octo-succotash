---
{"entryId": "honda-p1e4d", "code": "P1E4D", "title": "P1E4D: The brake actuator motor-angle signal is unreliable", "description": "Honda P1E4D-00 concerns motor-angle information in the electric servo brake actuator.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1e4d-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1e4d-factory", "pages": [1]}], "authoringBatch": "batch-49"}
---

# P1E4D: The brake actuator motor-angle signal is unreliable

## Position feedback has its own supply and signal paths

Honda P1E4D-00 concerns motor-angle information in the electric servo brake actuator. The factory source identifies possible opens in ESB SVCC or ESB SGND and opens or shorts to ground in ESB R2, S3 or S4. It also lists an internal Hall-sensor fault in the tandem motor cylinder and an internal brake-controller fault.

These details distinguish the code from a simple motor-power-circuit opening. The controller needs usable angle feedback as well as a functioning motor circuit. A power-feed check alone would not establish that the feedback supply, reference and signal paths are healthy.

## The monitor can run during startup and regular operation

The listed confirmation conditions use ON mode, several brake-pedal applications and a 12-volt supply between 9.5 and 16.7 V. The approximate duration is one second, and both initial and regular diagnosis are identified. The excerpt does not provide the expected angle waveform or a terminal test sequence.

Honda specifies red and amber brake warnings with a fail-safe response that suspends servo assistance and multiple cooperative brake functions. Preserve the suffix-bearing DTC and related records so a qualified technician can choose the proper Honda diagnostic branch.

Do not substitute a signal, bypass the Hall feedback or apply motor power directly to investigate angle reporting. Brake-actuator service requires the correct equipment, securing precautions and a formal verification that the supported braking functions have been restored.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P1E4D-00%204483.pdf), PDF pages 1. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
