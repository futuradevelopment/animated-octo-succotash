---
{"entryId": "generic-c05ad", "code": "C05AD", "title": "C05AD: Actual rear brake pressure misses the blending target", "description": "The GM C05AD monitor compares actual rear pressure with the by-wire target and can detect either excessive or insufficient pressure.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 diagnostic monitor; document section stated in article; per-vehicle and calibration applicability must be verified.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [1659]}], "authoringBatch": "batch-36"}
---

# C05AD: Actual rear brake pressure misses the blending target

C05AD is brake blending system performance. In GM's 2018 BSC1 table, the monitor compares actual rear-axle hydraulic pressure with requested pressure in by-wire operation. It includes both an overbraking branch and an underbraking branch.

## The direction changes the diagnosis

The overbraking branch evaluates actual pressure above target using a calibrated threshold curve. The underbraking branch evaluates target minus actual pressure and considers both a curve and a percentage of target. The table does not supply one universal allowable pressure error for all operating points.

Both branches require a valid rear-pressure target, rear by-wire mode, no active ABS intervention, and completion of the relevant pressure-offset or valve-calibration condition. Their listed evaluation spans approximately 0.5–1.07 seconds, with Type A, one-trip reporting.

## Keep command and response together

A lone pressure reading cannot show whether the system produced too much or too little pressure. Preserve actual pressure, target, direction of error, operating mode and companion calibration or sensor faults. The code does not identify one failed valve or establish that a software update is the repair.

This is a safety-critical brake-control discrepancy requiring qualified diagnosis. Follow the application procedure for pressure validity, hydraulic behavior and repair verification. Do not reproduce braking events or hydraulic tests from these summary criteria. A cleared code alone does not demonstrate that target tracking is correct or that the vehicle is safe to drive.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 1659](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=1659).
