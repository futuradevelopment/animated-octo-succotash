---
{"entryId":"generic-p0b8b","code":"P0B8B","title":"P0B8B: Sense Q requires context from the measuring electronics","description":"P0B8B is an open-sense-line finding for channel Q in the cited GM monitor, with communication and internal-module exclusions.","status":"draft","sourceReview":"needs-review","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[635,636]}],"authoringBatch":"batch-28"}
---

# P0B8B: Sense Q requires context from the measuring electronics

A P0B8B record points to the Q voltage-sensing channel in GM's shared open-line monitor. Its useful context includes the surrounding cell signals and the state of the electronics that acquire them. Treating a zero value as a direct measurement of an empty cell can miss a loss of measuring power.

## Separate the documented patterns

GM describes a general sensing-line comparison between adjacent voltages, with a difference above one volt. Another branch concerns a common power connection and uses a smaller, half-volt difference. The same table notes that an unpowered slave ASIC can leave all of its affected cell readings at zero. A cluster of zero reports therefore deserves a different interpretation from one isolated disagreement.

These are historical controller rules. They do not establish the physical location of channel Q or a resistance specification for its wiring.

## Check eligibility before judging recovery

The diagnostic requires the appropriate enabled operating and communication states. Listed sensing-module communication failures, balancing faults and internal-performance faults inhibit evaluation; the secondary-protection self-test must not be running. Record those conditions alongside the voltage pattern.

The comparison window is 600 milliseconds at a 200-millisecond evaluation frequency, rather than a single instantaneous sample. Battery access belongs to trained high-voltage personnel using the applicable procedure. The original busbar subcase is incompletely specified, so its missing comparison is not reconstructed here.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 635](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=635) · [GM source, physical page 636](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=636).
