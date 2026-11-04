---
{"entryId": "honda-p1e2b", "code": "P1E2B", "title": "P1E2B: Two brake-pressure channels disagree rather than simply read high or low", "description": "Honda P1E2B-00 concerns incorrect correlation between the PU and PUR brake-fluid-pressure channels.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1e2b-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1e2b-factory", "pages": [1]}], "authoringBatch": "batch-49"}
---

# P1E2B: Two brake-pressure channels disagree rather than simply read high or low

## The code identifies a relationship between pressure signals

Honda P1E2B-00 concerns incorrect correlation between the PU and PUR brake-fluid-pressure channels. This is different from a DTC naming an individual channel's high or low circuit voltage. The controller is questioning the relationship between two reported quantities, not supplying a diagnosis of a fluid leak or a particular mechanical brake defect.

The cited procedure verifies the fault after an HDS clear, a power cycle and several pedal applications. It does not publish the permitted pressure difference, sensor-voltage ratio or internal comparison algorithm. A technician should therefore use the current Honda specification rather than invent a correlation limit from the code title.

## Connection checks precede the controller decision

When P1E2B-00 returns, the factory branch calls for loose-terminal and poor-connection checks at the electric-servo-brake controller's 22-pin connector and review of authorized service information. Its controller/pedal-feel-simulator replacement instruction follows those checks, rather than replacing them.

If the code does not repeat, Honda treats the event as intermittent and points to the original freeze or snapshot conditions. Preserve those records before clearing so the relationship can be assessed under the circumstances that produced the fault.

This is a safety-related brake-control diagnosis. Have qualified personnel apply the exact procedure and verify proper operation afterward. Do not equalize, bridge or substitute the two sensor signals to suppress a correlation code; doing so would remove the independent information the comparison depends on.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Troubleshooting_%20P1E2B-00%204622.pdf), PDF pages 1. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
