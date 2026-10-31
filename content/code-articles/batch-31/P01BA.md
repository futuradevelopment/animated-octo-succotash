---
{"entryId": "generic-p01ba", "code": "P01BA", "title": "P01BA: oil-temperature plausibility uses repeated cross-checks", "description": "Audi's CPNB P01BA monitor compares oil-temperature sensor 2 with other temperature information and records repeated detected discrepancies.", "status": "draft", "sourceReview": "checked", "scope": "Audi 2014 A6/S6 Quick Reference Specification Book, September 2013, Engine Code CPNB, DTC chart. Thresholds only describe this documented monitor; not universal across other makes or engines.", "sourceIds": ["audi-2014-a6-s6-reference-2013-09"], "authoringBatch": "batch-31", "sourcePages": [{"sourceId": "audi-2014-a6-s6-reference-2013-09", "pages": [340]}]}
---

# P01BA: oil-temperature plausibility uses repeated cross-checks

P01BA describes engine-oil temperature sensor B performance in the generic catalog. Audi's CPNB chart names oil-temperature sensor 2 and describes cross-checks involving coolant, intake air, fuel and ambient temperature information. Its listed discrepancy is greater than 30 kelvin, with at least six detected faults in the cross-check count.

## Plausibility is different from an open circuit

The evidence is a relationship between temperature readings, not a single published signal-voltage limit. As diagnostic interpretation, the oil sensor could appear electrically responsive while still disagreeing with the comparison information. Conversely, the comparison alone does not prove that the oil sensor, rather than another input, is the defective part.

The repeated-fault condition also matters. A momentary observation of two differing temperatures is not enough to reconstruct the entire documented evaluation. The source does not publish a complete enabling-condition sequence in this row.

## Keep differences separate from absolute temperature

A 30-kelvin difference is a difference between readings, not an instruction that engine oil must remain below 30°C. The chart gives no oil-change remedy or sensor replacement requirement. Use the CPNB repair procedure to establish which readings are credible and why the cross-check fails. The criteria are scoped to this Audi reference, not a universal oil-temperature diagnostic standard.

Source: [Audi 2014 A6/S6 Quick Reference Specification Book](https://static.nhtsa.gov/odi/tsbs/2013/MC-10243900-9999.pdf#page=340).
