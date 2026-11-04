---
{"entryId": "generic-p24ce", "code": "P24CE", "title": "P24CE: Audi’s reductant-cap switch high fault begins above 1.2 V", "description": "The CNRB reference labels P24CE a tank-cap switch short to battery voltage with signal voltage above 1.2 V.", "status": "draft", "sourceReview": "checked", "scope": "2014 Audi Q7 Quick Reference Specification Book, CNRB 3.0L TDI DTC chapter, September 2013. Reducing-agent tank-cap switch monitoring; the source does not provide a complete cap-switch test procedure.", "sourceIds": ["audi-q7-2014-qrsb"], "sourcePages": [{"sourceId": "audi-q7-2014-qrsb", "pages": [172]}], "authoringBatch": "batch-43"}
---

# P24CE: Audi’s reductant-cap switch high fault begins above 1.2 V

Audi’s CNRB diesel reference assigns P24CE to the reducing-agent tank-cap switch circuit’s high electrical category. It describes a short to battery voltage and gives a signal boundary above 1.2 V. The threshold is not the nominal vehicle battery voltage; it is the signal criterion printed for this monitor.

## Avoid inferring a physical cap state

The DTC summary does not provide the normal switch values for an installed or removed cap. A high circuit-fault description therefore does not independently show that the cap is loose, missing or incorrectly tightened. Those mechanical conclusions need appropriate evidence.

P24CD, the related short-to-ground category, uses a boundary below 0.65 V. The two values distinguish electrical fault classifications but do not constitute a full specification of normal switch operation. In particular, the chart gives no timing or measurement-terminal information for applying them as an external test.

## Diagnose the stated circuit before choosing a repair

The separate P24CC functional check is based on dosed reducing-agent mass plus an offset. It should not be merged with P24CE’s voltage event or used to infer an unreported refill history.

A technician should identify the actual CNRB cap-switch path and follow its service procedure to isolate the high-signal condition. No tank-assembly replacement instruction appears in this row. Verification must show appropriate electrical behavior of the identified circuit; topping up fluid or temporarily clearing the warning does not explain the recorded high input.

## Source and scope

[2014 Audi Q7 Quick Reference Specification Book, September 2013, physical PDF 172](https://static.nhtsa.gov/odi/tsbs/2013/MC-10073844-2280.pdf#page=172). 2014 Audi Q7 Quick Reference Specification Book, CNRB 3.0L TDI DTC chapter, September 2013. Reducing-agent tank-cap switch monitoring; the source does not provide a complete cap-switch test procedure.
