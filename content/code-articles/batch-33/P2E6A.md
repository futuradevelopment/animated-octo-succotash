---
{"entryId": "generic-p2e6a", "code": "P2E6A", "title": "P2E6A: Bank-2 lean correction exceeds the deactivation threshold", "description": "P2E6A monitors bank-2 fuel adaptation during cylinder deactivation in GM's 2020 OBDG07 document.", "status": "draft", "sourceReview": "checked", "scope": "Document-scoped GM 2020 diagnostic monitor; exact vehicle, engine and calibration applicability not established.", "sourceIds": ["gm-2020-20obdg07-diagnostics"], "sourcePages": [{"sourceId": "gm-2020-20obdg07-diagnostics", "pages": [75]}], "authoringBatch": "batch-33"}
---

# P2E6A: Bank-2 lean correction exceeds the deactivation threshold

P2E6A monitors bank-2 fuel adaptation during cylinder deactivation in GM's 2020 OBDG07 document. The failure quantity is the multiplicative long-term fuel-trim term in the deactivation operating state. GM sets the upper boundary above 1.230011, approximately a 1.23 factor.

## Bank identity and adaptation type both matter
The row explicitly uses bank 2's term and bank 2's adaptation readiness. A bank-1 value or a general short-term-trim display is not a substitute. The code indicates sustained upward correction demand in the specified mode, rather than naming a failed sensor or a particular source of unwanted air.

The monitor requires active adaptation and stable conditions. Its bank-2 checks include a ten-second stability period, engine-speed and load comparisons, and relationships involving the additive and short-term terms. An observation made while the engine changes operating modes does not reproduce that settled comparison.

## Build a matched comparison
Preserve bank 2's adaptation with the cylinder-deactivation status. Compare the same term during full-cylinder operation and examine the opposite bank under comparable load, rather than contrasting unrelated snapshots. This can distinguish a deactivation-specific pattern from a bank-wide mixture concern without prematurely selecting a cause.

Verification should demonstrate acceptable correction during a completed enabled test after the actual problem is addressed. A temporarily reset adaptation value or a normal reading outside deactivation does not prove repair. The stated factor belongs to this GM monitor and should not be interpreted as a universal percentage display or threshold for every engine carrying the generic code.

Source: GM diagnostic parameters, [physical PDF page 75](https://gsi.ext.gm.com/gmspo/mode6/pdf/2020/20OBDG07%20Diagnostics.pdf#page=75).
