---
{"entryId": "generic-p0b3d", "code": "P0B3D", "title": "P0B3D: The first battery block has a direct low-signal check", "description": "Read the GM P0B3D block-one voltage limit and distinguish it from the paired low-voltage checks used on later channels.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [222]}], "authoringBatch": "batch-22"}
---

# P0B3D: The first battery block has a direct low-signal check

P0B3D monitors the low end of block-one voltage sensing in this GM battery controller. The failure quantity is a block-one indication below 2V. The code concerns the sensing result and does not prove that the physical block has discharged to that value.

## This row checks block one directly

The source lists block one alone in the low-limit condition. Some subsequent channels in the same document use a pair of adjacent block readings, but that additional condition is not present here. Do not copy a neighboring channel's logic into P0B3D.

The controller must be in run mode, with its low-voltage supply in range and P0A1F inactive. Failure uses 15 qualifying samples out of 20 at 100ms intervals. A single low display value is not the whole sample decision.

## Keep circuit evidence separate from battery health

Capture block-one voltage, controller supply and any related P0B3C or pack-voltage faults. The rationality code compares measurements differently and cannot simply be substituted for this low-limit result.

The document supplies no physical block location, open-wire test or battery replacement verdict. Those require the correct sensor map and diagnostic procedure. A trained high-voltage technician must establish safe access using approved isolation and verification. Never treat a low scan reading as confirmation that the battery or its sensing conductors are de-energized.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 222](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=222).
