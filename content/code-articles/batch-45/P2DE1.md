---
{"entryId": "generic-p2de1", "code": "P2DE1", "title": "P2DE1: Honda cold-start rich feedback differs from the catalog quantity label", "description": "Honda P2DE1 compares actual mixture with its cold-start command and requires definition review before general application.", "status": "draft", "sourceReview": "needs-review", "scope": "Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability.", "sourceIds": ["honda-insight-gen3-dtc-7537"], "sourceLocators": [{"sourceId": "honda-insight-gen3-dtc-7537", "locator": "PDF physical page 1–3; DTC Advanced Diagnostics: P2DE1; P2DE1 detection or complete troubleshooting branch"}], "authoringBatch": "batch-45", "sourcePages": [{"sourceId": "honda-insight-gen3-dtc-7537", "pages": [1, 2, 3]}]}
---

# P2DE1: Honda cold-start rich feedback differs from the catalog quantity label

## The source describes a rich feedback condition

Honda's P2DE1 advanced diagnostic page identifies **cold-start air/fuel-ratio control system rich**. The catalog instead labels the code as cold-start fuel-injection quantity C above expectation. This draft remains **needs-review** because those descriptions should not be silently treated as an established injector-flow measurement.

The Honda monitor compares actual mixture with the commanded value while quick warm-up operation is active. The air/fuel sensor must be active, the vehicle stopped, the accelerator released and the throttle closed. These are feedback conditions, rather than a test that merely checks which mixture the PCM requested.

## A warmed restart may not repeat the relevant event

The enabled coolant window in the source is −10°C to 80°C. Detection lasts at least seven seconds, and two-drive-cycle MIL logic applies. Honda's confirmation starts after coolant has fallen to 25°C or less, then observes the qualifying cold start.

The source supplies a numerical mixture ratio, but its parameter convention needs checking before that value is translated into a conventional air/fuel ratio. It also lists intake installation or restriction, airflow and temperature inputs, mixture faults and ignition faults among possible causes. These possibilities require further diagnosis; they do not authorize selecting an injector from the code label.

## Retain the unresolved scope

Preserve the original snapshot, cold-start temperatures and sensor status. The advanced page does not include a full repair-isolation tree, and individual extracts in this Insight collection do not print an exact model-year revision.

A qualified technician should verify the applicable Honda calibration and troubleshooting procedure. Publication additionally requires resolving the catalog-to-source definition difference. Nothing in this extract establishes a separate injector C that has been proven to overfuel.

## Sources and applicability

[DTC Advanced Diagnostics: P2DE1 (Honda manual extract 7537)](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P2DE1%207537.pdf#page=1). Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability. These are manufacturer procedures for that documented configuration, not universal repair instructions.
