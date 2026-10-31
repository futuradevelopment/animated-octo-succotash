---
{"entryId": "generic-p0aad", "code": "P0AAD", "title": "P0AAD: Battery inlet-air plausibility is a qualified cold-start comparison", "description": "Read the GM P0AAD inlet-air monitor with its eight-hour soak, outlet reference and startup prerequisites.", "status": "draft", "sourceReview": "needs-review", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [237, 238]}], "authoringBatch": "batch-22"}
---

# P0AAD: Battery inlet-air plausibility is a qualified cold-start comparison

P0AAD tests the plausibility of battery inlet-air temperature at startup. GM compares the inlet reading with outlet air, then checks whether outlet air agrees with the maximum battery-module temperature. The comparison is meaningful only in its documented cold-soak context.

## Establish a credible reference pair

The source requires more than eight hours of valid engine-off time. Failure uses an absolute inlet-to-outlet difference above 20°C while outlet-to-maximum-module difference is no more than 10°C. Outlet temperature must also meet the stated minimum, the module-temperature value must be valid and the startup delay must have elapsed.

The description mentions inlet air being higher than outlet air, but the mathematical criterion is an absolute difference. That direction mismatch is unresolved; this article does not narrow the printed test to one sign or claim a universal directional rule.

## Keep all startup values together

Preserve inlet temperature, outlet temperature, maximum module temperature and verified off-time from the same startup. Measurements after the fan or battery has warmed cannot simply replace those values. Related inlet and outlet circuit faults inhibit the comparison.

The source provides no sensor-location map or proof of a failed inlet sensor. The vehicle-specific battery-cooling procedure must establish those details. Any access near the high-voltage pack requires trained personnel and the appropriate isolation process, rather than a sensor replacement based only on this correlation code.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 237](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=237). [GM PDF, page 238](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=238).
