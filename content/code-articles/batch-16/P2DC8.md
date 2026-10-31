---
{"entryId": "generic-p2dc8", "code": "P2DC8", "title": "P2DC8: Low excitation-current report with an incomplete published limit", "description": "P2DC8 concerns starter/generator excitation current, while the primary summary omits the numerical low-current criterion.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [554]}], "authoringBatch": "batch-16"}
---

# P2DC8: Low excitation-current report with an incomplete published limit

P2DC8 is the low excitation-current diagnosis in the cited alternator-control section. Excitation current relates to the generator's field control; it is not interchangeable with the current delivered to every vehicle load or with battery terminal voltage alone.

## Do not invent the missing threshold

The primary page names alternator excitation current as the failure quantity but leaves the numerical criterion blank. It also lists battery-voltage conditions, engine-running state and the LIN generator voltage setpoint without completing their limits. Visual inspection confirms that these are omissions in the rendered table, not merely lost text during extraction.

What is stated is ignition on, a 1,000-event qualification and a two-trip response. These details do not justify converting the code into a fixed ampere threshold or a prescribed number of seconds at idle. The exact application diagnostic is required for that specification.

## Evidence that still helps

Preserve the excitation-related status, generator voltage request and operating state where the scan tool exposes them. A low-current fault must be interpreted against the control request and enabled operating conditions. A currently normal battery voltage does not reconstruct the monitor's earlier field-current judgement.

Use the appropriate service information to determine whether the fault was genuinely low field current, invalid feedback or an affected prerequisite. This summary does not select a failed battery, regulator or alternator. Confirmation requires completion of the correctly specified diagnostic; clearing the code or replacing a charging component by association does not establish the cause.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 554](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=554).
