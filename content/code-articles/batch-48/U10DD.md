---
{"entryId": "volkswagen-u10dd", "code": "U10DD", "title": "U10DD: The hybrid clutch controller stops supplying expected messages", "description": "Volkswagen distinguishes missing clutch-control communication from a received but implausible value.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen Touareg Hybrid 2012-onward CGFA Generic Scan Tool manual, edition 08.10.2016; only the cited hybrid/engine-control diagnostic table. This is not general Volkswagen or hybrid applicability.", "sourceIds": ["vw-cgfa-touareg-hybrid-gst-2016"], "sourcePages": [{"sourceId": "vw-cgfa-touareg-hybrid-gst-2016", "pages": [457]}], "authoringBatch": "batch-48"}
---

# U10DD: The hybrid clutch controller stops supplying expected messages

## The monitor detects an absent participant or message

The Touareg Hybrid CGFA U10DD entry concerns lost communication with the clutch-control unit. Its strategy lists a missing received message or an actuator CAN failure. The check becomes eligible more than 500 milliseconds after ignition-on and observes the condition for half a second.

This is a communication result, not a direct measurement of clutch wear or slip. The table does not supply a component-replacement decision, a universal terminal-resistance value or a pin assignment. It refers the technician to the appropriate repair manual.

## Retain the originating system's context

Preserve the complete hybrid and network fault record before clearing memory. A clutch-control unit can be missing from the expected exchange for reasons that require power, wiring, module-state and communication evidence. The code alone cannot distinguish those causes or establish that the controller hardware is defective.

A qualified hybrid technician should identify the installed unit and network segment using the correct factory information. Do not bypass the clutch controller, force the hybrid drive into operation or improvise tests around high-voltage components to see whether communication returns.

Verification should demonstrate stable receipt of the expected clutch-control information after the relevant startup qualification. A diagnostic tool connecting to the engine controller does not prove that this separate participant is communicating. Clearing U10DD without restoring the underlying exchange can leave the original hybrid-system condition unresolved.

## Source and applicability

[Volkswagen Touareg Hybrid CGFA Generic Scan Tool, edition 08.10.2016](https://vwts.ru/diag/engine-cgfa-09g-touareg-diagnostic-eng.pdf). Physical PDF pages 457. Volkswagen Touareg Hybrid 2012-onward CGFA Generic Scan Tool manual, edition 08.10.2016; only the cited hybrid/engine-control diagnostic table. This is not general Volkswagen or hybrid applicability.
