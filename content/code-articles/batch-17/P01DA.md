---
{"entryId": "generic-p01da", "code": "P01DA", "title": "P01DA: Check the signed learning result before diagnosing advanced cylinder 8 injection", "description": "Learn how GM P01DA uses small-injection pressure evidence and why its contradictory threshold direction limits a numerical diagnosis.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 04A documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file.", "sourceIds": ["gm-2025-04a"], "sourcePages": [{"sourceId": "gm-2025-04a", "pages": [853, 854]}], "authoringBatch": "batch-17"}
---

# P01DA: Check the signed learning result before diagnosing advanced cylinder 8 injection

P01DA identifies the advanced-direction injection performance assessment for cylinder 8. The GM narrative describes negative drift in injection quantity or timing during small-quantity learning. That description establishes the intended direction, but the accompanying numerical column needs clarification before use as a repair threshold.

## The result comes from controlled learning

The monitor deliberately requests a known small fuel quantity during eligible fuel cut and evaluates the rail-pressure response. Pressure-drop magnitude informs the duration correction, while the pressure falling edge establishes injection-start timing relative to crankshaft movement. This makes the state of the learning operation as important as the final correction value.

Several injections with different quantities build the estimate. The source also allows an interrupted operation to continue later, and lists two-trip reporting separately from the trial sequence. Erasing a code and observing ordinary running therefore does not demonstrate that this specific assessment has completed successfully.

## A source limit that affects interpretation

Although the strategy repeatedly describes negative drift, the threshold column prints positive greater-than values. It would be misleading to silently change them into negative limits or assume an undocumented absolute-value convention. Use the matching calibration documentation to resolve that issue.

Retain the failed correction channel, completed learning state and recorded operating conditions. The supported evidence distinguishes quantity correction from timing displacement; it does not by itself locate an injector hardware failure or justify disturbing high-pressure fuel connections.

## Source and applicability

2025 GM 04A documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file. [GM PDF, physical page 853](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04A.pdf#page=853); [GM PDF, physical page 854](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04A.pdf#page=854).
