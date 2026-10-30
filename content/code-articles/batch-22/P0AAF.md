---
{"entryId": "generic-p0aaf", "code": "P0AAF", "title": "P0AAF: Very cold inlet-air data can be the battery sensor’s high-circuit fault", "description": "Read the GM P0AAF inlet-air limit and understand why it differs from the cold-soak plausibility monitor.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [237]}], "authoringBatch": "batch-22"}
---

# P0AAF: Very cold inlet-air data can be the battery sensor’s high-circuit fault

P0AAF is the battery inlet-air sensor's circuit-high fault in the cited GM controller. The documented temperature criterion is below −45°C. This is an extreme input-limit check, not the inlet-versus-outlet comparison used by P0AAD.

## Run-state monitoring differs from cold-soak evaluation

The source requires battery-controller run mode, suitable low-voltage supply and no P0A1F controller-performance fault. It uses 30 failing samples out of 40 at 100ms intervals. The row does not require the eight-hour off period specified for the separate plausibility test.

That distinction matters if the code appears during an active trip. A diagnostic explanation that says P0AAF can only be evaluated after an overnight soak would import conditions from the wrong monitor.

## Preserve the exact input

Save inlet-air temperature and its validity status, not merely ambient temperature or the battery's minimum module temperature. Those measurements may provide context, but the source does not establish that they share a sensor or conversion.

The code does not identify a specific open wire, connector or sensor replacement. The physical circuit and fault location must be established using the vehicle-specific battery service information. A qualified technician should follow the correct isolation and access procedure around high-voltage equipment. An extreme cold indication is a signal diagnosis and must not be treated as evidence that the battery assembly is safe to handle.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 237](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=237).
