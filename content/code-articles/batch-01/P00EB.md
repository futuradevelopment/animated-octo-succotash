---
{"entryId": "generic-p00eb", "code": "P00EB", "title": "P00EB: intake temperature 3 signal indicates an open path", "description": "P00EB is the intake-air temperature 3 circuit-high code in this GM ECM table.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 25OBDG03A.pdf, ECM manifold-temperature and humidity-equipped IAT3 resistance monitoring. Vehicle, engine and calibration applicability must be confirmed separately; the file-level model matrix is not per-code fitment evidence.", "sourceIds": ["gm-2025-03a"], "sourcePages": [{"sourceId": "gm-2025-03a", "pages": [123]}], "authoringBatch": "batch-01"}
---

# P00EB: intake temperature 3 signal indicates an open path

P00EB is the intake-air temperature 3 circuit-high code in this GM ECM table. It supervises the raw IAT3 resistance and detects an open-circuit condition above 153,665 Ω.

## The electrical reading implies a cold indication

The thermistor relationship described by the source is increasing resistance with decreasing temperature. Accordingly, “circuit high” does not mean high air temperature. The table associates the high-resistance threshold with approximately −60°C, while resistance remains the diagnostic quantity.

Monitoring uses 40 failures from 50 samples, with a sample every 100 milliseconds. It is classified Type B, two trips. This qualification distinguishes a persistent open-path observation from a transient noisy reading, which has its own intermittent diagnostic.

## What remains to be identified

The code points to open-circuit behavior, not the exact broken connection or failed part. Record the raw sensor input and whether the fault is present or historical, then follow the vehicle-specific circuit procedure. The table does not establish sensor location, connector terminals or a complete resistance/temperature chart.

A meaningful verification confirms both a credible IAT3 input and successful completion of this high-resistance check after correction. Agreement with other intake temperatures at one moment is useful context, but it does not alone cover the electrical sample window. Confirm that the vehicle uses the documented manifold-temperature/humidity strategy before applying its numerical criterion.

## Source and applicability

This explanation covers the documented 2025 GM monitor, not every vehicle using P00EB. Confirm the vehicle’s module and calibration before applying its limits. [GM diagnostic table, PDF page 123](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=123).
