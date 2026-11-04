---
{"entryId": "generic-p2ab3", "code": "P2AB3", "title": "P2AB3: Bank-one runner feedback disagrees during catalyst heating", "description": "The CREC cold-start monitor checks a commanded-off flap with a sustained high feedback signal.", "status": "draft", "sourceReview": "checked", "scope": "Audi Q7 2016-onward CREC Generic Scan Tool manual, edition 11.2016; only the cited engine-control calibration table and component procedure. Confirm the installed engine and control-module software.", "sourceIds": ["audi-crec-gst-2016"], "sourcePages": [{"sourceId": "audi-crec-gst-2016", "pages": [813]}], "authoringBatch": "batch-48"}
---

# P2AB3: Bank-one runner feedback disagrees during catalyst heating

## The cold-start operating event is essential

Audi's CREC P2AB3 entry describes the bank-one intake-manifold runner control as stuck open during cold-start monitoring. The actuator is commanded off, while the signal remains above 1.76 volts for at least four seconds. The table lists a separate 0.2-second monitoring period.

Eligibility requires more than three seconds after engine start, active catalyst heating, and either idle or part-load operation. These conditions distinguish the fault from a general runner-position check at arbitrary engine temperature or load. The four-second signal qualification and 0.2-second monitor entry should not be merged into a single invented delay.

## Compare the requested state with the correct feedback

The source directs diagnosis to runner-control valve N316. A technician should identify the installed bank-one mechanism and its control and feedback paths using the appropriate factory information. The word “stuck” does not by itself distinguish a mechanical restriction from a control or sensing problem.

Preserve related runner, supply and position-signal codes before resetting anything. Do not force the linkage or apply external power to reproduce the fault without the correct service procedure.

After the cause is addressed, verification should exercise the relevant catalyst-heating event and show feedback consistent with the commanded state. A warm engine that runs without a warning may never have entered this cold-start monitor, so that observation alone cannot establish a successful repair.

## Source and applicability

[Audi Q7 CREC Generic Scan Tool, edition 11.2016](https://vwts.ru/diag/engine-crec-generic-scan-tool-eng.pdf). Physical PDF pages 813. Audi Q7 2016-onward CREC Generic Scan Tool manual, edition 11.2016; only the cited engine-control calibration table and component procedure. Confirm the installed engine and control-module software.
