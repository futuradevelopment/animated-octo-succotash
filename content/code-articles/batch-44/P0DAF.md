---
{"entryId": "generic-p0daf", "code": "P0DAF", "title": "P0DAF: module-one cell voltage compared with the battery median", "description": "Mazda’s P0DAF:00 monitor compares a module-one cell with the median of all cell voltages and requires the difference to persist.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0DAF:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300201012100"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300201012100", "locator": "id300201012100; DTC P0DAF:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0DAF: module-one cell voltage compared with the battery median

The MX-30 Electric uses P0DAF:00 for a cell-voltage value error in high-voltage battery module No.1. Its generic cell-balancing circuit-A range/performance label should be read with Mazda’s actual comparison in view.

## The reference is a median, not a fixed cell limit

Detection occurs when the difference between any cell voltage in module one and the median of all cell voltages exceeds 0.35 V for 1.9 seconds. This is a relative measurement. It cannot be replaced with a check that one cell merely exceeds a fixed overcharge voltage.

The use of the median is also specific. Substituting the pack’s total voltage, an arithmetic average or a single neighboring cell would describe a different calculation from the factory monitor. Captured data must preserve enough cell information to understand the comparison.

## Duration and recurrence answer separate questions

The 1.9-second requirement belongs to detection. Mazda’s later confirmation reproduces the snapshot conditions for at least two seconds before checking whether the same pending BECM fault is present. Those are separate stages, not competing descriptions of one threshold.

If the fault recurs, the procedure checks CAN communication before reaching its high-voltage battery replacement action. The chart gives internal battery malfunction as the possible cause and no external wiring or connector test for this entry.

## Keep the repair decision appropriately scoped

P0DAF reports a persistent relative cell-voltage discrepancy in module one; it does not prove that the balancing switch itself failed. An internal switch-circuit code uses a different criterion. Qualified EV diagnosis must resolve the recurring evidence and any accompanying codes, while following the battery’s high-voltage service precautions rather than attempting manual cell adjustment.

## Source and applicability

[Mazda factory procedure, P0DAF](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300201012100.html). id300201012100; DTC P0DAF:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0DAF:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
