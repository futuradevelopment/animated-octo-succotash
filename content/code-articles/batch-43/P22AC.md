---
{"entryId": "generic-p22ac", "code": "P22AC", "title": "P22AC: Toyota’s positive-current low code has two distinct sensor checks", "description": "RAV4 P22AC can represent a low A1B+ voltage or insufficient separation between the downstream air-fuel sensor’s two signal terminals.", "status": "draft", "sourceReview": "checked", "scope": "Toyota A25A-FKS SFI procedure for 2021–2025 RAV4, production from August 2020; original Toyota content mirrored by Mitchell. Extended DTC suffixes and SAE mappings are explicit in the procedure.", "sourceIds": ["toyota-rm100000001qol3"], "sourceLocators": [{"sourceId": "toyota-rm100000001qol3", "locator": "DTC detection condition; SAE Code mapping; Monitor Description; Monitor Strategy; Typical Enabling Conditions; Typical Malfunction Thresholds; Confirmation Driving Pattern; Procedure"}], "authoringBatch": "batch-43"}
---

# P22AC: Toyota’s positive-current low code has two distinct sensor checks

Toyota maps two extended faults to generic P22AC on the covered RAV4: P22AB11 and P22AB16. Both concern the downstream air-fuel ratio sensor, even though the generic description says O2 sensor. Keeping the extended suffix is useful because the two monitors evaluate different relationships.

## A low terminal and a low difference are not the same finding

P22AB11 is the positive-control short-to-ground category. It requires A1B+ voltage of 1.43 V or less for at least five seconds. P22AB16 instead evaluates correlation: with A1B- above 2.77 V, the separation between A1B+ and A1B- is 0.2 V or less for at least five seconds. Both use two-trip detection logic.

A single measurement of A1B+ cannot explain the second condition without the negative-terminal value. Conversely, the correlation threshold should not be substituted for the first monitor’s terminal-to-ground boundary.

## Follow the procedure’s electrical separation

Toyota checks related fuses and connector seating, then evaluates both harness-side signal voltages and their difference with the sensor disconnected. If those checks fail, the subsequent harness tests examine continuity and unwanted connections before the ECM branch. This sequence avoids treating every P22AC report as automatic evidence of a failed sensor.

Freeze-frame data preserves the conditions of the recorded event. Verification uses the appropriate extended DTC in All Readiness after the confirmation procedure. A generic scanner that displays only P22AC may conceal which of these two diagnostic branches was recorded; that missing detail should be recovered before interpreting the electrical evidence.

## Source and scope

[A25A-FKS (ENGINE CONTROL): SFI SYSTEM: P22AB11,P22AB12,P22AB13,P22AB16,P22AB17,P22B211,P22B212; A/F (O2) Sensor Positive Current Control Bank 1 Sensor 2 Circuit Short to Ground; 2021 - 2025 MY RAV4 [08/2020 -        ]](https://estimate.mymitchell.com/t3Portal/document/rm/RM3510U/xhtml/RM100000001QOL3.html). Locator: DTC detection condition; SAE Code mapping; Monitor Description; Monitor Strategy; Typical Enabling Conditions; Typical Malfunction Thresholds; Confirmation Driving Pattern; Procedure. Toyota A25A-FKS SFI procedure for 2021–2025 RAV4, production from August 2020; original Toyota content mirrored by Mitchell. Extended DTC suffixes and SAE mappings are explicit in the procedure.
