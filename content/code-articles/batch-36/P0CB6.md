---
{"entryId": "generic-p0cb6", "code": "P0CB6", "title": "P0CB6: Battery temperature sensor O produces erratic data", "description": "The GM P0CB6 monitor detects accumulated fluctuations at sensor O rather than comparing O with a fixed thermal limit.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [940]}], "authoringBatch": "batch-36"}
---

# P0CB6: Battery temperature sensor O produces erratic data

P0CB6 identifies intermittent/erratic battery temperature sensor O behavior. The documented 2018 GM test concentrates on how the signal changes within a short window. A single displayed temperature cannot fully represent that evidence.

## How repeated excursions are recognized

The controller integrates the absolute changes over ten samples. The listed threshold is above 10, with four failing evaluations among five at 100-millisecond intervals. Positive and negative excursions both contribute, so a stable average does not guarantee a passing result.

For this test, system voltage must be above 10.2 V and the prescribed battery-interface communication fault group must be inactive. GM specifies Type B, two-trip reporting. An intermittent connection is one source-supported possibility, not a diagnosis of a particular connector or sensor.

## Preserve the channel and its context

Record sensor O's trace, current versus historical fault status and communication conditions. Keep an intermittent pattern separate from a steady discrepancy or a circuit endpoint; those observations may lead to different checks in the service procedure.

The O designation must be mapped using the correct vehicle documentation before any physical work. Repair confirmation should establish stable credible input while the diagnostic is enabled, not just a plausible value after a reset. The monitoring table provides no instructions for direct testing inside a high-voltage battery. Qualified personnel must use the manufacturer's access, isolation and repair procedures.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 940](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=940).
