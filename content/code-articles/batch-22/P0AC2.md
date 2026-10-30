---
{"entryId": "generic-p0ac2", "code": "P0AC2", "title": "P0AC2: Negative current-range limits identify the opposing battery-sensor extreme", "description": "Understand the GM P0AC2 circuit-high monitor and its charging-current sign convention.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [234]}], "authoringBatch": "batch-22"}
---

# P0AC2: Negative current-range limits identify the opposing battery-sensor extreme

P0AC2 is the high-circuit current-sensor code in this GM battery controller. The source defines charging current as negative and expresses the failure through negative limits in three sensing ranges. “High” in the code name is consequently not a statement that the signed current value is positive.

## Preserve the conjunction of three inputs

The table requires high-range current below −200A, middle-range current below −52A and low-range current below −22A. All three conditions must qualify together. Taking absolute values would erase the directional distinction from P0AC1's positive-discharge criteria.

The monitor runs with the battery controller in run mode, an accepted low-voltage supply and the specified supply/controller faults absent. Failure uses 30 qualifying samples within 40 at 100ms intervals.

## Distinguish sensing limits from charging diagnosis

Record the signed values from each available range, controller identity and companion current-rationality status. A single combined current display may not reveal all three underlying inputs. The code alone does not establish a charging-control defect or justify changing a charging component.

The document supplies no current-clamp placement, conductor access or sensor replacement procedure. The actual battery and controller service information must determine the safe diagnostic path. High-voltage pack work requires qualified personnel and verified isolation; do not force charging current to reproduce a monitor threshold or infer electrical safety from the displayed current alone.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 234](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=234).
