---
{"entryId": "generic-p2ab4", "code": "P2AB4", "title": "P2AB4: Bank-two runner diagnosis needs a verified component mapping", "description": "The CREC P2AB4 row shares a valve reference with bank one despite naming actuator two.", "status": "draft", "sourceReview": "needs-review", "scope": "Audi Q7 2016-onward CREC Generic Scan Tool manual, edition 11.2016; only the cited engine-control calibration table and component procedure. Confirm the installed engine and control-module software.", "sourceIds": ["audi-crec-gst-2016"], "sourcePages": [{"sourceId": "audi-crec-gst-2016", "pages": [813]}], "authoringBatch": "batch-48"}
---

# P2AB4: Bank-two runner diagnosis needs a verified component mapping

## The monitored event is clearly defined

Audi's CREC P2AB4 row describes the bank-two runner actuator as stuck open during cold-start operation. The flap is commanded off, yet feedback remains above 1.76 volts for at least four seconds. The separate monitor entry is 0.2 seconds, with catalyst heating active after more than three seconds of engine running.

The operating qualification permits idle or part load. It does not establish that a warm steady-state test reproduces the fault. Command, signal duration and catalyst-heating state all matter when interpreting the record.

## The component reference requires care

Although the strategy names actuator two and bank two, the diagnostic column points to N316, the same valve reference shown for the bank-one entry. This article retains a source-review flag for that component mapping. It does not invent a second valve number or assume that the shared reference proves an identical physical circuit.

A technician should verify the actual runner arrangement and current wiring information before testing or replacing anything. Preserve related position and control faults so a mechanical-sounding title does not prematurely exclude electrical or feedback evidence.

Repair confirmation should show the correct bank-two feedback matching the requested state during the eligible cold-start event. Clearing memory or observing normal warm operation is insufficient, and manually forcing a runner mechanism is not a substitute for resolving its proper component identity.

## Source and applicability

[Audi Q7 CREC Generic Scan Tool, edition 11.2016](https://vwts.ru/diag/engine-crec-generic-scan-tool-eng.pdf). Physical PDF pages 813. Audi Q7 2016-onward CREC Generic Scan Tool manual, edition 11.2016; only the cited engine-control calibration table and component procedure. Confirm the installed engine and control-module software.
