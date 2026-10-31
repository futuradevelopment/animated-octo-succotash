---
{"entryId": "generic-p0a9c", "code": "P0A9C", "title": "P0A9C: Battery sensor one is compared with all three other temperature inputs", "description": "Read the GM P0A9C temperature-rationality monitor and distinguish a lone outlier from a general battery heating event.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [235]}], "authoringBatch": "batch-22"}
---

# P0A9C: Battery sensor one is compared with all three other temperature inputs

P0A9C is the battery controller's temperature-sensor-one rationality monitor. Rather than judging an absolute hot or cold limit, the controller compares input one with each of the other three temperature inputs. A sensor can be electrically in range and still fail that relationship.

## All three differences matter

The documented failure requires sensor one's difference from input two, input three and input four each to exceed 15°C. The conditions are joined together, so one large pairwise difference alone is not the complete criterion.

Input one must be valid, and its circuit-low and circuit-high faults must be absent. The battery controller must be in run mode with the low-voltage supply in range. The decision uses 90 failing samples within 100 at 100ms intervals.

## Preserve the four-channel pattern

Capture all four temperatures at the same time, with validity and companion-code status. If only input one is saved, the evidence needed to show that it was the outlier is missing. Comparing screenshots from different operating moments can also create a misleading apparent difference.

The source does not establish which physical sensor position corresponds to input one, nor prove that the sensor itself needs replacement. That mapping and the circuit tests require the correct battery service information. High-voltage pack access should be performed only by trained personnel following the applicable isolation procedure.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 235](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=235).
