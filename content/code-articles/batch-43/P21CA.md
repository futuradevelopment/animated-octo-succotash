---
{"entryId": "generic-p21ca", "code": "P21CA", "title": "P21CA: Audi’s reductant-controller supply remains low after relay closure", "description": "Audi’s CPNA table gives P21CA a below-1 V supply condition lasting at least 300 milliseconds with the main relay closed.", "status": "draft", "sourceReview": "checked", "scope": "2013 Audi A8/A8L/S8, CPNA 3.0L TDI reference chapter; source-specific voltage and duration criterion.", "sourceIds": ["audi-a8-2013-qrsb"], "sourcePages": [{"sourceId": "audi-a8-2013-qrsb", "pages": [362]}], "authoringBatch": "batch-43"}
---

# P21CA: Audi’s reductant-controller supply remains low after relay closure

For P21CA, Audi’s CPNA diesel reference lists supply voltage below 1 V while the main relay is closed, for at least 300 milliseconds. This combines a circuit state, a voltage boundary and a duration. Omitting any of those details changes the interpretation of the monitor.

## A low voltage must be evaluated at the specified time

Voltage below one volt while a circuit is intentionally switched off does not reproduce the stated condition. The source expects the main relay to be closed. Likewise, the row’s timing requirement should not be replaced by a single instantaneous reading without establishing how the applicable procedure evaluates it.

The adjacent P21C9 entry concerns voltage already present before relay activation. Comparing the two helps a technician retain the command-and-response sequence: one row examines an unexpectedly early supply, while P21CA examines a supply that remains low in the commanded-on state.

## Do not jump from supply failure to a dosing component

The code identifies the reductant control-module supply circuit. It does not, by itself, identify a failed injector, pump, heater or complete tank assembly. The reference provides no connector-level fault isolation or component replacement decision; those details belong to the matching power-distribution and repair information.

A useful investigation records the exact controller, the relay state and the available supply evidence, together with related faults. Verification must show that the commanded supply behaves correctly under the prescribed conditions. Clearing the DTC or seeing reductant dosing on another occasion is not sufficient to demonstrate that the low-supply event has been corrected.

## Source and scope

[2013 Audi A8/A8L/S8 Quick Reference Specification Book, March 2013, physical PDF 362](https://static.nhtsa.gov/odi/tsbs/2013/MC-10123813-9999.pdf#page=362). 2013 Audi A8/A8L/S8, CPNA 3.0L TDI reference chapter; source-specific voltage and duration criterion.
