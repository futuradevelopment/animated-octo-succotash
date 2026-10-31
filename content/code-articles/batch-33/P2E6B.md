---
{"entryId": "generic-p2e6b", "code": "P2E6B", "title": "P2E6B: Bank-2 rich correction reaches its deactivation boundary", "description": "P2E6B is the bank-2 rich-side adaptation diagnostic during cylinder deactivation in GM's 2020 OBDG07 table.", "status": "draft", "sourceReview": "checked", "scope": "Document-scoped GM 2020 diagnostic monitor; exact vehicle, engine and calibration applicability not established.", "sourceIds": ["gm-2020-20obdg07-diagnostics"], "sourcePages": [{"sourceId": "gm-2020-20obdg07-diagnostics", "pages": [80]}], "authoringBatch": "batch-33"}
---

# P2E6B: Bank-2 rich correction reaches its deactivation boundary

P2E6B is the bank-2 rich-side adaptation diagnostic during cylinder deactivation in GM's 2020 OBDG07 table. The controller monitors a multiplicative long-term correction below 0.769989 in the source's ZAS operating state. A value below unity means this correction term is reducing fuel relative to its uncorrected reference.

## A sustained learned correction, not one transient
GM requires bank-2 adaptation to be active and stable, including at least ten seconds of stability. The row considers engine-speed/load similarity and the behavior of short-term and additive adaptation terms. A momentary downward correction during a command change is not equivalent to the qualified learned-term failure.

The factor must also be interpreted correctly. It is not a direct oxygen-sensor voltage, a measured air-fuel ratio or necessarily the same number shown in a scanner's combined fuel-trim percentage. Confirm the parameter definition before comparing displayed data with the source threshold.

## Compare bank and mode separately
Determine whether the bank-2 downward correction appears specifically during deactivation, also exists with all cylinders active, or accompanies a similar opposite-bank pattern. These comparisons help organize evidence but do not identify an injector, pressure-control or sensor failure on their own.

Verification should show that the relevant adaptation remains acceptable during an enabled deactivation evaluation after the cause is corrected. Resetting learned values without observing their subsequent behavior does not demonstrate that the original demand has gone away. The table gives a scoped GM monitor definition, not a universal repair procedure or a parts recommendation for every P2E6B application.

Source: GM diagnostic parameters, [physical PDF page 80](https://gsi.ext.gm.com/gmspo/mode6/pdf/2020/20OBDG07%20Diagnostics.pdf#page=80).
