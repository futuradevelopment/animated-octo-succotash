---
{"entryId": "generic-p22ad", "code": "P22AD", "title": "P22AD: Toyota separates positive-signal overvoltage from sensor correlation", "description": "Toyota’s P22AD mapping covers both excessive A1B+ voltage and an excessive difference between the downstream sensor signal terminals.", "status": "draft", "sourceReview": "checked", "scope": "Toyota A25A-FKS SFI procedure for 2021–2025 RAV4, production from August 2020; original Toyota content mirrored by Mitchell. Extended DTC suffixes and SAE mappings are explicit in the procedure.", "sourceIds": ["toyota-rm100000001qol3"], "sourceLocators": [{"sourceId": "toyota-rm100000001qol3", "locator": "DTC detection condition; SAE Code mapping; Monitor Description; Monitor Strategy; Typical Enabling Conditions; Typical Malfunction Thresholds; Confirmation Driving Pattern; Procedure"}], "authoringBatch": "batch-43"}
---

# P22AD: Toyota separates positive-signal overvoltage from sensor correlation

For the covered RAV4, P22AD can correspond to either P22AB12 or P22AB17. Toyota identifies the component as air-fuel ratio sensor 2, downstream of sensor 1. The two extended codes share the generic positive-current-control high label but do not use the same electrical comparison.

## Preserve the extended suffix

P22AB12 uses A1B+ voltage above 6.135 V for at least five seconds and is categorized as short to battery. P22AB17 instead uses a difference between A1B+ and A1B- greater than 1.72 V for at least five seconds. Both are two-trip faults.

The latter criterion can only be understood by retaining both signal values. It should not be reduced to the claim that A1B+ alone exceeded 1.72 V. Toyota’s enabling conditions also exclude competing open, range and negative-control faults as appropriate to each monitor.

## Use the factory branch to isolate the electrical path

The diagnostic sequence checks correct connector engagement before measuring the harness-side biases with the sensor disconnected. It evaluates the positive terminal, the negative terminal and the difference between them. Harness continuity and isolation checks follow an abnormal result; component replacement is conditional on those findings.

These are signal-circuit faults rather than direct measurements of exhaust richness. Freeze-frame information provides useful operating context, but mixture conclusions need separate evidence. Following repair, Toyota checks pending faults and the extended-code All Readiness result. A completed NORMAL judgment is materially different from an INCOMPLETE result after the memory has simply been cleared.

## Source and scope

[A25A-FKS (ENGINE CONTROL): SFI SYSTEM: P22AB11,P22AB12,P22AB13,P22AB16,P22AB17,P22B211,P22B212; A/F (O2) Sensor Positive Current Control Bank 1 Sensor 2 Circuit Short to Ground; 2021 - 2025 MY RAV4 [08/2020 -        ]](https://estimate.mymitchell.com/t3Portal/document/rm/RM3510U/xhtml/RM100000001QOL3.html). Locator: DTC detection condition; SAE Code mapping; Monitor Description; Monitor Strategy; Typical Enabling Conditions; Typical Malfunction Thresholds; Confirmation Driving Pattern; Procedure. Toyota A25A-FKS SFI procedure for 2021–2025 RAV4, production from August 2020; original Toyota content mirrored by Mitchell. Extended DTC suffixes and SAE mappings are explicit in the procedure.
