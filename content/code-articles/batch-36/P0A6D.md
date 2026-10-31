---
{"entryId": "generic-p0a6d", "code": "P0A6D", "title": "P0A6D: Drive motor B phase W current is insufficient near its peak", "description": "GM's P0A6D monitor checks motor B's W-phase current under a defined command and electrical phase window.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 diagnostic monitor; document section stated in article; per-vehicle and calibration applicability must be verified.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [1640]}], "authoringBatch": "batch-36"}
---

# P0A6D: Drive motor B phase W current is insufficient near its peak

P0A6D identifies drive motor B phase W current low. The 2018 GM MCP1B monitor looks for an open-circuit response by evaluating current close to the W phase's expected peak.

## What has to be true before the failure counts

The listed threshold is below 9 A for 0.4 seconds in a 0.6-second window. Run drive state, normal PWM, inverter voltage above 50 V and exclusion of active discharge are required. The controller also uses a ±30-degree phase-axis evaluation window and squared commanded current above 900 A². GM lists Type A, one-trip reporting.

These are specific active-drive conditions. An ordinary zero crossing or a parked inactive drive cannot be judged by the peak threshold alone. Preserve the command and inverter state with the current result.

## A low reading does not locate the electrical defect

Motor B and phase W identify the monitored path; they do not specify which connection, sensing component, power stage or winding caused the low response. The correct vehicle diagnostic must separate those possibilities. Do not infer that a complete drive unit necessarily requires replacement.

After a correction, verify the expected response during the prescribed eligible test and complete the required system checks. A code clear without that evaluation is incomplete. High-voltage motor circuits require trained service personnel and the manufacturer safety process; this table supplies no direct-probing or improvised energization procedure.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 1640](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=1640).
