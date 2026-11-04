---
{"entryId": "generic-p22ab", "code": "P22AB", "title": "P22AB: Toyota detects excessive impedance in the downstream air-fuel sensor circuit", "description": "Toyota maps P22AB13 to P22AB and checks sensor-2 impedance after its heater has been operating for at least 100 seconds.", "status": "draft", "sourceReview": "checked", "scope": "Toyota A25A-FKS SFI procedure for 2021–2025 RAV4, production from August 2020; original Toyota content mirrored by Mitchell. Extended DTC suffixes and SAE mappings are explicit in the procedure.", "sourceIds": ["toyota-rm100000001qol3"], "sourceLocators": [{"sourceId": "toyota-rm100000001qol3", "locator": "DTC detection condition; SAE Code mapping; Monitor Description; Monitor Strategy; Typical Enabling Conditions; Typical Malfunction Thresholds; Confirmation Driving Pattern; Procedure"}], "authoringBatch": "batch-43"}
---

# P22AB: Toyota detects excessive impedance in the downstream air-fuel sensor circuit

On the covered RAV4, generic P22AB corresponds to Toyota’s extended P22AB13. Although the DTC family mentions an O2 sensor, Toyota identifies this component as the downstream air-fuel ratio sensor, sensor 2. It defines sensor 2 as the sensor farther from the engine.

## The open-circuit judgment depends on a heated sensor

The published criterion is impedance above 510 ohms after at least 100 seconds of heater operation. The monitor requires battery voltage of at least 10.5 V and excludes relevant heater, signal-range and correlation faults. A cold sensor or a competing electrical fault can therefore prevent the intended judgment; an incomplete monitor is not proof that the circuit passed.

This is an impedance assessment performed by the controller, not a disconnected winding-resistance specification. Toyota distinguishes it from the positive- and negative-control voltage faults represented by P22AC, P22AD, P22B3 and P22B4.

## Circuit evidence comes before a component decision

The procedure first ensures the connector is properly seated and checks the disconnected harness-side signal voltages. It then separates sensor, harness and ECM branches according to those results. The two signal terminals have different expected biases, and their difference is evaluated as well; testing only one terminal would omit part of the prescribed evidence.

After repair, Toyota calls for pending-code review and an All Readiness judgment for P22AB13. Its confirmation sequence includes at least five minutes of engine operation. A NORMAL result means the diagnostic judgment completed successfully; INCOMPLETE requires attention to the enabling conditions rather than being treated as a successful repair.

## Source and scope

[A25A-FKS (ENGINE CONTROL): SFI SYSTEM: P22AB11,P22AB12,P22AB13,P22AB16,P22AB17,P22B211,P22B212; A/F (O2) Sensor Positive Current Control Bank 1 Sensor 2 Circuit Short to Ground; 2021 - 2025 MY RAV4 [08/2020 -        ]](https://estimate.mymitchell.com/t3Portal/document/rm/RM3510U/xhtml/RM100000001QOL3.html). Locator: DTC detection condition; SAE Code mapping; Monitor Description; Monitor Strategy; Typical Enabling Conditions; Typical Malfunction Thresholds; Confirmation Driving Pattern; Procedure. Toyota A25A-FKS SFI procedure for 2021–2025 RAV4, production from August 2020; original Toyota content mirrored by Mitchell. Extended DTC suffixes and SAE mappings are explicit in the procedure.
