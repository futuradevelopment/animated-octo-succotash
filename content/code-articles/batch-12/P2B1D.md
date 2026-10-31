---
{"entryId": "generic-p2b1d", "code": "P2B1D", "title": "P2B1D: Cylinder-seven pulse learning differs from its injector circuit faults", "description": "Ford diesel P2B1D concerns calibration time offset, while cylinder-seven low and high circuit codes report separate electrical evidence.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2023–2024 diesel OBD summary, revised August 25, 2023; these are documented monitor examples, not confirmed fitment or universal thresholds for every vehicle carrying this generic code.", "sourceIds": ["ford-diesel-2023-2024"], "sourcePages": [{"sourceId": "ford-diesel-2023-2024", "pages": [21, 16]}], "authoringBatch": "batch-12"}
---

# P2B1D: Cylinder-seven pulse learning differs from its injector circuit faults

P2B1D selects cylinder seven in Ford’s injection-pulse offset learning monitor. It evaluates the energizing time observed during a **zero-fuel calibration injection**, rather than classifying an open or short circuit on the injector output.

## The measured difference is against a target

Ford’s limits are at least 156 microseconds shorter than target or at least 254 microseconds longer. The asymmetric values should be retained: neither a simple absolute pulse duration nor one symmetric tolerance reproduces this comparison.

Typical monitoring duration is 30 seconds while the base calibration function runs. The shared eligibility requirements include controlled fuel and coolant temperatures, adequate voltage, limited accelerator input, and requested/actual rail-pressure agreement within 50 bar.

## Why companion codes matter

Cylinder-seven electrical faults such as P0279 and P0280 belong to separate driver checks. If present, they supply different evidence that should remain visible in the diagnostic record. P2B1D itself does not prove an electrical short, and an electrical repair is not automatically proof that offset learning has subsequently completed inside its limits.

Several enabling conditions in Ford’s table are explicitly limited to 3.0L; do not apply those labels indiscriminately to another engine. The cylinder-specific code shares its learning test with the surrounding family, and the summary does not determine physical cylinder location or a replacement part. Verification requires the correct service information and an actual valid calibration opportunity.

## Source and applicability

This explanation follows Ford’s 2023–2024 diesel OBD summary. Match the vehicle’s engine and calibration before applying these monitor values; a generic code alone does not establish fitment. [Ford PDF, page 21](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=21) · [Ford PDF, page 16](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=16).
