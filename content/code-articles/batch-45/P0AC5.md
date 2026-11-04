---
{"entryId": "generic-p0ac5", "code": "P0AC5", "title": "P0AC5: Honda high-voltage battery temperature sensor 2 circuit", "description": "P0AC5 selects Honda battery temperature sensor 2 and its P0AC6/P0AC7/P0AC8 companion-code checks.", "status": "draft", "sourceReview": "checked", "scope": "Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability.", "sourceIds": ["honda-insight-gen3-dtc-5849", "honda-insight-gen3-dtc-5625"], "sourceLocators": [{"sourceId": "honda-insight-gen3-dtc-5849", "locator": "PDF physical page 1–4; DTC Troubleshooting: P0A9B (972), P0AC5 (973), P0ACA (974), P0AE8 (975), P0BC2 (976); P0AC5 detection or complete troubleshooting branch"}, {"sourceId": "honda-insight-gen3-dtc-5625", "locator": "PDF physical page 1–2; DTC Advanced Diagnostics: P0AC5; P0AC5 detection or complete troubleshooting branch"}], "authoringBatch": "batch-45", "sourcePages": [{"sourceId": "honda-insight-gen3-dtc-5849", "pages": [1, 2, 3, 4]}, {"sourceId": "honda-insight-gen3-dtc-5625", "pages": [1, 2]}]}
---

# P0AC5: Honda high-voltage battery temperature sensor 2 circuit

## Circuit B corresponds to Honda sensor 2

In the cited Honda Insight documents, P0AC5 identifies **high-voltage battery temperature sensor 2**. The battery condition monitor module continuously evaluates this input along with four other temperature sensors. Its source-specific threshold is 4.83 V or above, or 0.72 V or below, maintained for at least three seconds.

A signal beyond that range can indicate a temperature-reporting fault without proving actual battery overheating. The monitor uses two-drive-cycle logic. A first event is pending; a repeat in the next qualifying cycle can produce a confirmed code, freeze data and the MIL and POWER SYSTEM indications.

## Sensor 2 has its own follow-up branch

Honda first calls for verification using the recorded freeze-data conditions, noting that the fault may need ten minutes or more to detect. When P0AC5 repeats, the procedure checks P0AC6, P0AC7 and P0AC8. Those are sensor 2's more specific range/performance, low and high diagnoses, and they are handled through their respective charts.

If none of those companion faults is present with the repeated P0AC5, Honda's stated branch identifies sensor 2 as faulty and directs battery-pack replacement. A non-repeat result instead follows the intermittent-fault route. This sequence should remain visible in the repair explanation rather than compressing the code into an immediate pack recommendation.

## What the scan record should retain

Record the sensor number, pending or confirmed status and original snapshot before clearing. Sensor 1 or sensor 3 charts cannot substitute for sensor 2 merely because the voltage limits are shared. The individual PDFs lack an exact model-year edition, so verify applicability within the third-generation Insight collection. Physical battery diagnosis and replacement require professional high-voltage precautions.

## Sources and applicability

[DTC Troubleshooting: P0A9B (972), P0AC5 (973), P0ACA (974), P0AE8 (975), P0BC2 (976) (Honda manual extract 5849)](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Troubleshooting_%20P0A9B%20(972),%20P0AC5%20(973),%20P0ACA%20(974),%20P0AE8%20(975),%20P0BC2%20(976)%205849.pdf#page=1); [DTC Advanced Diagnostics: P0AC5 (Honda manual extract 5625)](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P0AC5%205625.pdf#page=1). Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability. These are manufacturer procedures for that documented configuration, not universal repair instructions.
