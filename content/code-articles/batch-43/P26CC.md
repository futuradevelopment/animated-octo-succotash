---
{"entryId": "generic-p26cc", "code": "P26CC", "title": "P26CC: Toyota’s coolant-pump low fault concerns a missing commanded duty signal", "description": "RAV4 P26CC maps to P26CA14 and checks for a low control-terminal level with no signal while pump operation is commanded.", "status": "draft", "sourceReview": "checked", "scope": "Toyota A25A-FKS SFI procedure for 2021–2025 RAV4, production from August 2020; original Toyota content mirrored by Mitchell. Extended DTC suffixes and SAE mappings are explicit in the procedure.", "sourceIds": ["toyota-rm100000001qol8"], "sourceLocators": [{"sourceId": "toyota-rm100000001qol8", "locator": "DTC detection condition; SAE Code mapping; Monitor Description; Monitor Strategy; Typical Enabling Conditions; Typical Malfunction Thresholds; Confirmation Driving Pattern; Procedure"}], "authoringBatch": "batch-43"}
---

# P26CC: Toyota’s coolant-pump low fault concerns a missing commanded duty signal

For the covered RAV4, Toyota maps P26CC to P26CA14, described as engine coolant-pump circuit short to ground or open. The ECM is sending an operation duty command, WPO, but monitors an actual duty signal at or below the malfunction level. The low code therefore does not by itself mean low coolant flow.

## The operating command is part of the criterion

Toyota lists two simultaneous malfunction conditions: a low output-terminal voltage level and no output signal. The three-second monitor is enabled with an output duty cycle between 30 and 85 percent, ignition on, the starter off and adequate supply voltage. A low reading when no pump command is expected does not reproduce that complete condition.

The data list separates target pump speed, actual pump speed and coolant temperature. Keeping those quantities distinct helps a technician avoid treating a speed-response observation as the same evidence as a missing electrical duty signal.

## Follow the low-circuit diagnostic path

The procedure calls for inspection of related fuses, then a guided evaluation of the ECM’s switching behavior. If the response is abnormal, the harness is checked for continuity and unwanted grounding before the final component decision. Pump replacement is conditional on the prescribed results.

These are application-specific professional tests, including a running-engine active test, rather than instructions to connect a meter arbitrarily to a pump. Repair verification uses the source’s confirmation pattern, pending-DTC check and All Readiness for P26CA14. An INCOMPLETE judgment remains unfinished even if a recently cleared fault has not immediately returned.

## Source and scope

[A25A-FKS (ENGINE CONTROL): SFI SYSTEM: P26CA14; Engine Coolant Pump Circuit Short to Ground or Open; 2021 - 2025 MY RAV4 [08/2020 -        ]](https://estimate.mymitchell.com/t3Portal/document/rm/RM3510U/xhtml/RM100000001QOL8.html). Locator: DTC detection condition; SAE Code mapping; Monitor Description; Monitor Strategy; Typical Enabling Conditions; Typical Malfunction Thresholds; Confirmation Driving Pattern; Procedure. Toyota A25A-FKS SFI procedure for 2021–2025 RAV4, production from August 2020; original Toyota content mirrored by Mitchell. Extended DTC suffixes and SAE mappings are explicit in the procedure.
