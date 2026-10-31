---
{"entryId":"generic-p0b6d","code":"P0B6D","title":"P0B6D: common sensing power can affect the circuit-K voltage pattern","description":"The GM P0B6D family includes a shared-power case using adjacent-cell differences, distinct from a simple individual sense-line result.","status":"draft","sourceReview":"needs-review","scope":"Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[635,636]}],"authoringBatch":"batch-25"}
---

# P0B6D: common sensing power can affect the circuit-K voltage pattern

P0B6D identifies battery voltage-sense circuit K in the cited GM open-sensing family. The shared table distinguishes a general sensing-line problem from a common-power-line problem, making the pattern of neighboring readings important.

## Different patterns use different comparisons

For the general sensing-line case, the table gives an adjacent-cell difference threshold above one volt. For its common-power-line case, it gives a smaller half-volt difference and describes affected adjacent cells without complete power-off.

Those are separate documented cases, not interchangeable universal cell-imbalance limits. The K code does not establish which case occurred or prove that a genuine battery cell is degraded. A technician needs the full data pattern and applicable diagnostic context.

## Shared loss of power is another documented possibility

The same strategy notes that an individual sensing-chip power-line loss can leave all affected values at zero. Keeping those readings together helps avoid interpreting each zero as an independent failed cell.

The positive-side busbar case lacks a complete comparison in the source, and no missing limit is invented here. Physical K-channel mapping also requires the vehicle's service information.

Preserve neighboring voltages, communication status and internal/balancing fault information. Qualified high-voltage diagnosis should demonstrate the actual measurement-path defect before a repair is chosen. Verification must include a valid completed monitor, rather than simply observing that one channel changed after reconnection.

## Application limits

Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.

## Source

[15OBDG01 Hybrid Diagnostics](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=635), physical PDF pages 635, 636.
