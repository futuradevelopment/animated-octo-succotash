---
{"entryId": "generic-p0d4d", "code": "P0D4D", "title": "P0D4D: Charger output voltage disagrees with battery voltage", "description": "GM's P0D4D performance test compares the charger DC output-voltage signal with the battery's DC voltage signal.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG01 diagnostic monitor; document section stated in article; per-vehicle and calibration applicability must be verified.", "sourceIds": ["gm-2018-18obdg01-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg01-hybrid-diagnostics", "pages": [995]}], "authoringBatch": "batch-36"}
---

# P0D4D: Charger output voltage disagrees with battery voltage

P0D4D is a battery charger hybrid/EV battery output-voltage sensor range/performance code. In GM's 2018 HPC2/VICM table, it is a rationality test between two voltage reports: charger DC output and battery DC input.

## The comparison needs valid inputs

The monitor uses an absolute difference above 30 between the two voltage values. It requires at least 10.2 V system supply, charger enable true, charging-ready true and global diagnostic disable false. Charger output high/low range faults and battery-voltage sensor faults must not be active.

Sixty failing evaluations out of 80, sampled every 25 milliseconds, satisfy the listed two-second evaluation. GM assigns Type B, two trips.

## A discrepancy does not identify the incorrect sensor

Because the calculation is absolute, either voltage can be above the other. Preserve both readings at the same time and verify their status. A single plausible charger voltage does not establish agreement, and P0D4D alone cannot decide whether the charger output, battery reference or another condition caused the difference.

The enable requirements also mean an idle vehicle outside charging readiness is not an equivalent verification state. After the appropriate repair, confirm a valid comparison during the intended charging condition. Direct electrical measurements in the charging and traction-battery system require qualified high-voltage service; this table provides no connector test procedure or authority to replace the charger from the code alone.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 995](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG01%20Hybrid%20Diagnostics.pdf#page=995).
