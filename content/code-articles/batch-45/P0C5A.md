---
{"entryId": "generic-p0c5a", "code": "P0C5A", "title": "P0C5A: Toyota motor resolver B circuit open", "description": "P0C5A identifies the MG2 cosine resolver channel in Toyota P0C5A13, with connector and resolver checks before an inverter decision.", "status": "draft", "sourceReview": "checked", "scope": "2023–2026 Toyota Corolla HV repair manual, lithium-ion battery with PA10, production from September 2022; verify the exact vehicle specification and detailed Toyota code.", "sourceIds": ["toyota-corolla-pa10-rm1000000026pxl"], "sourceLocators": [{"sourceId": "toyota-corolla-pa10-rm1000000026pxl", "locator": "RM1000000026PXL; explicit SAE mapping for P0C5A, DTC detection conditions, monitor strategy and diagnostic procedure"}], "authoringBatch": "batch-45"}
---

# P0C5A: Toyota motor resolver B circuit open

## Which position signal is missing

Toyota's Corolla HV table maps SAE P0C5A to P0C5A13, an **open in the motor resolver cosine-phase circuit**. This is circuit B of the MG2 position-sensing system. The letter identifies a resolver signal channel; it does not change the affected machine into drive motor B or the rear motor.

The resolver supplies rotor-position information used by the motor generator control ECU. Toyota lists the hybrid transaxle assembly, inverter with converter assembly, and the intervening wiring or connectors as possible fault areas. An open indication alone cannot distinguish those locations or prove that the complete transaxle is defective.

## The factory checks preserve that distinction

This variant uses one-trip detection and commands both the MIL and master warning. The monitor operates continuously, but its detailed threshold and duration are not published. The related intermittent variant, P0C5A1F, maps to P0C5E and has different qualifying conditions; it should not be substituted for P0C5A13.

Toyota first directs attention to listed isolation, controller and reference-power faults if present. Its own procedure then checks the inverter connector. An insecure connector is secured, while damaged terminals, contamination or poor contact lead to harness/connector repair. If that connection is sound, the technician follows the separate motor-resolver circuit inspection. Only a normal resolver-circuit result leads onward to inverter replacement.

## Verifying a restored signal

The specified confirmation sequence exercises the system through several operating states and checks Motor Generator All Readiness. A completed NORMAL judgment is the meaningful endpoint. Toyota also notes that a resolver problem may affect smooth driving and that diagnostic vibration can influence fault detection. Preserve the scan context and leave powered testing, controlled vehicle movement and high-voltage access to a qualified hybrid repair facility.

## Sources and applicability

[Toyota repair procedure RM1000000026PXL](https://estimate.mymitchell.com/t3Portal/document/rm/RM3560U/xhtml/RM1000000026PXL.html?linkId=d3713e8073&hashId=RM1000000026PXL#RM1000000026PXL). 2023–2026 Toyota Corolla HV repair manual, lithium-ion battery with PA10, production from September 2022; verify the exact vehicle specification and detailed Toyota code. These are manufacturer procedures for that documented configuration, not universal repair instructions.
