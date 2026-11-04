---
{"entryId": "generic-p2de0", "code": "P2DE0", "title": "P2DE0: Honda cold-start mixture feedback needs catalog-definition review", "description": "Honda P2DE0 evaluates actual cold-start mixture, while the catalog describes fuel-injection quantity C below expectation.", "status": "draft", "sourceReview": "needs-review", "scope": "Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability.", "sourceIds": ["honda-insight-gen3-dtc-7538"], "sourceLocators": [{"sourceId": "honda-insight-gen3-dtc-7538", "locator": "PDF physical page 1–3; DTC Advanced Diagnostics: P2DE0; P2DE0 detection or complete troubleshooting branch"}], "authoringBatch": "batch-45", "sourcePages": [{"sourceId": "honda-insight-gen3-dtc-7538", "pages": [1, 2, 3]}]}
---

# P2DE0: Honda cold-start mixture feedback needs catalog-definition review

## Honda monitors mixture feedback during warm-up

This draft is marked **needs-review** because the catalog describes P2DE0 as cold-start fuel-injection quantity C below expectation. Honda's source instead calls it **cold-start air/fuel-ratio control system lean**. The extract does not identify a physical injector C or establish a measured fuel quantity for one injector.

Honda compares actual mixture with the command during quick warm-up operation. The enabled conditions include an active air/fuel sensor, a stopped vehicle, released accelerator and closed throttle. The sensor-active requirement distinguishes this actual-mixture monitor from the separate commanded-mixture faults.

## The operating window is specific

The advanced page lists coolant between −10°C and 80°C, detection lasting at least seven seconds and two-drive-cycle MIL logic. Its confirmation begins with coolant at 25°C or less before a qualifying cold start.

The page also gives a numerical actual-to-commanded mixture comparison. Its parameter convention must be verified before interpreting the ratio as a conventional physical air/fuel measurement; the lean label alone does not resolve that convention.

Possible causes span damaged or incorrectly installed intake ducting, air-cleaner or throttle restriction, temperature or airflow input faults, mixture problems and ignition faults. That range does not identify which component failed on a particular vehicle.

## What this extract cannot settle

The available document describes monitor logic and confirmation, not a complete component-isolation repair chart. Preserve sensor-active status, cold-start temperatures and the original snapshot. Before publication or diagnostic use, reconcile the catalog definition with current VIN-specific Honda information. The supported feedback-monitor explanation should not be rewritten as proof that an injector delivers too little fuel.

## Sources and applicability

[DTC Advanced Diagnostics: P2DE0 (Honda manual extract 7538)](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P2DE0%207538.pdf#page=1). Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability. These are manufacturer procedures for that documented configuration, not universal repair instructions.
