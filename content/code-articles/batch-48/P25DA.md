---
{"entryId": "generic-p25da", "code": "P25DA", "title": "P25DA: Fuel-level sensor C is reported high or electrically open", "description": "The CREC strategy distinguishes a cluster-reported high/open fault from a missing network message.", "status": "draft", "sourceReview": "checked", "scope": "Audi Q7 2016-onward CREC Generic Scan Tool manual, edition 11.2016; only the cited engine-control calibration table and component procedure. Confirm the installed engine and control-module software.", "sourceIds": ["audi-crec-gst-2016"], "sourcePages": [{"sourceId": "audi-crec-gst-2016", "pages": [433]}], "authoringBatch": "batch-48"}
---

# P25DA: Fuel-level sensor C is reported high or electrically open

## The cluster is the source of the diagnostic report

Audi's P25DA entry concerns fuel-level sensor C, identified as sensor three in the CREC strategy. The engine controller recognizes an instrument-cluster report of a short-to-positive or open-circuit failure. The monitor observes that report for half a second and lists a two-driving-cycle lamp schedule.

This is not a lost-communication condition. A message can arrive successfully while reporting that the underlying sensor circuit is invalid. It is also not proof that the tank is full; the word “high” refers to the circuit classification rather than a confirmed physical fuel quantity.

## Diagnose the sensor path before condemning the reporter

The factory diagnostic column directs attention to the appropriate wiring diagram. It treats a cluster replacement as a later conditional step after the level sensor and circuitry have been evaluated. That distinction helps avoid replacing the module simply because it is named in the communication strategy.

Preserve the cluster's own fault details and verify the installed sensor layout. Do not substitute an assumed fuel-sender resistance specification from another tank arrangement or short a sender connection to make the gauge respond.

A technician should confirm that valid sensor information reaches the cluster and that the high/open report is no longer transmitted. Clearing the engine-controller code without addressing the reporting module's underlying sensor evidence may leave the original condition intact, even if the warning takes time to return.

## Source and applicability

[Audi Q7 CREC Generic Scan Tool, edition 11.2016](https://vwts.ru/diag/engine-crec-generic-scan-tool-eng.pdf). Physical PDF pages 433. Audi Q7 2016-onward CREC Generic Scan Tool manual, edition 11.2016; only the cited engine-control calibration table and component procedure. Confirm the installed engine and control-module software.
