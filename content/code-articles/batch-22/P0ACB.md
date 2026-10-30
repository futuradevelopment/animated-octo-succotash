---
{"entryId": "generic-p0acb", "code": "P0ACB", "title": "P0ACB: Battery input three is tested as an outlier among four temperatures", "description": "Understand the GM P0ACB three-reference comparison and the validity requirements behind it.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [236]}], "authoringBatch": "batch-22"}
---

# P0ACB: Battery input three is tested as an outlier among four temperatures

P0ACB monitors the rationality of battery temperature input three. The controller compares that input with one, two and four. The code concerns the relationship among valid measurements, rather than a direct high-temperature or low-temperature threshold.

## All reference differences must qualify

Each absolute difference must exceed 15°C in the documented failure condition. The AND relationship is important: one other sensor being far away is not enough. Input three must also be valid and its circuit-low and circuit-high diagnostics must not be active.

The controller evaluates 90 failing samples within 100 at 100ms intervals, in run mode with the low-voltage supply accepted. The code therefore reflects a persistent qualified pattern rather than one uncontextualized temperature peak.

## Preserve the outlier evidence

A synchronized four-channel record allows the technician to see whether input three separated from the group. A pack-average display can hide that pattern, and sequential readings during changing temperatures can distort it. Record sensor validity and controller identity with the values.

The source does not map input three to a physical pack position or prove which component caused the disagreement. That requires the correct battery service information and circuit tests. Trained high-voltage personnel must perform any pack access using the specified isolation and verification procedure; the correlation threshold is not a direct repair instruction.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 236](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=236).
