---
{"entryId": "generic-p0ac1", "code": "P0AC1", "title": "P0AC1: The battery-current circuit-low label corresponds to positive range limits here", "description": "Read the GM P0AC1 three-range current criterion and preserve the document’s discharge-current sign convention.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [234]}], "authoringBatch": "batch-22"}
---

# P0AC1: The battery-current circuit-low label corresponds to positive range limits here

P0AC1 is labeled battery-current sensor circuit low, but the GM table expresses its failure using positive current values. It explicitly defines battery discharge as positive. The electrical code label must therefore not be translated into “too little battery current.”

## Three sensing ranges qualify together

The failure combination requires high-range current above 200A, middle-range current above 52A and low-range current above 22A. The conditions are joined by AND. A high value in only one displayed range does not reproduce the complete documented criterion.

The controller must be in run mode, with suitable low-voltage supply and the listed supply/controller faults absent. Its decision uses 30 failing samples out of 40 at 100ms intervals.

## Keep the sign and range names

Save the three range values without discarding their signs or relabeling them as interchangeable measurements. A scan tool exposing only one combined current parameter may not show the individual inputs used by this diagnostic.

The table describes an out-of-range sensing condition; it does not prove a specific current sensor failed or establish a universal discharge-current limit for all hybrids. Diagnosis requires the matching battery-controller procedure. Physical work on the pack or high-current conductors must be handled by trained personnel using prescribed high-voltage isolation, rather than an improvised external-current test based on these calibration values.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 234](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=234).
