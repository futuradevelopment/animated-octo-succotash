---
{"entryId": "generic-p0aca", "code": "P0ACA", "title": "P0ACA: Honda high-voltage battery temperature sensor 3 circuit", "description": "Honda P0ACA follows the battery sensor 3 branch, including its specific range and low/high companion faults.", "status": "draft", "sourceReview": "checked", "scope": "Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability.", "sourceIds": ["honda-insight-gen3-dtc-5849", "honda-insight-gen3-dtc-5629"], "sourceLocators": [{"sourceId": "honda-insight-gen3-dtc-5849", "locator": "PDF physical page 1–4; DTC Troubleshooting: P0A9B (972), P0AC5 (973), P0ACA (974), P0AE8 (975), P0BC2 (976); P0ACA detection or complete troubleshooting branch"}, {"sourceId": "honda-insight-gen3-dtc-5629", "locator": "PDF physical page 1–2; DTC Advanced Diagnostics: P0ACA; P0ACA detection or complete troubleshooting branch"}], "authoringBatch": "batch-45", "sourcePages": [{"sourceId": "honda-insight-gen3-dtc-5849", "pages": [1, 2, 3, 4]}, {"sourceId": "honda-insight-gen3-dtc-5629", "pages": [1, 2]}]}
---

# P0ACA: Honda high-voltage battery temperature sensor 3 circuit

## Identify the third battery-temperature channel

Honda describes P0ACA as **HV battery temperature sensor 3 circuit** in this Insight collection. It is one of five temperature inputs monitored by the battery condition monitor module. The advanced page detects sensor-3 output at or above 4.83 V, or at or below 0.72 V, for at least three seconds under the stated enable conditions.

Those limits describe the electrical signal. They should not be translated into an unsupported battery temperature or assumed cell-deterioration diagnosis. The code uses two drive cycles, with a pending event first and a confirmed event, freeze data and warning indications if the condition returns in the next qualifying cycle.

## Follow the sensor-3 branch after verification

The shared factory troubleshooting flow reproduces the recorded conditions and notes that detection may take ten minutes or longer. A repeated P0ACA then directs attention to P0ACB, P0ACC and P0ACD, the more specific sensor-3 range/performance, low and high faults. If present, those codes receive their own diagnosis.

Only a repeated P0ACA without those companion faults takes this branch to a sensor-3 failure conclusion and battery-pack replacement. If verification produces no code, Honda treats the condition as intermittent and uses the saved snapshot to investigate further. The branch result is therefore more informative than the generic circuit label alone.

## Make the evidence reviewable

Keep the original sensor data and full fault set before clearing, and distinguish a pending event from a confirmed repeat. This procedure shares its structure with the other battery sensors but retains a specific code-to-sensor mapping. Confirm the individual extract's applicability to the vehicle and leave battery enclosure access and replacement to a trained hybrid technician.

## Sources and applicability

[DTC Troubleshooting: P0A9B (972), P0AC5 (973), P0ACA (974), P0AE8 (975), P0BC2 (976) (Honda manual extract 5849)](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Troubleshooting_%20P0A9B%20(972),%20P0AC5%20(973),%20P0ACA%20(974),%20P0AE8%20(975),%20P0BC2%20(976)%205849.pdf#page=1); [DTC Advanced Diagnostics: P0ACA (Honda manual extract 5629)](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P0ACA%205629.pdf#page=1). Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability. These are manufacturer procedures for that documented configuration, not universal repair instructions.
