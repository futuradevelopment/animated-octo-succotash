---
{"entryId": "generic-p0bc9", "code": "P0BC9", "title": "P0BC9: Battery fan speed-feedback frequency is too low", "description": "GM's P0BC9 example evaluates fan feedback frequency after the fan has been enabled and given time to run.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [898]}], "authoringBatch": "batch-36"}
---

# P0BC9: Battery fan speed-feedback frequency is too low

P0BC9 identifies the hybrid/EV battery pack cooling fan 1 sense circuit low. In the 2018 GM table, “low” is specifically a feedback **frequency** below 8 Hz, not a universal low-voltage measurement at a connector.

## The fan must first be commanded into the test range

The monitor requires cooling-fan enable true, system voltage above 10.2 V and command duty between 11 and 89 percent. It also waits until the fan has been on for more than eight seconds. Sixteen failed samples out of 20, at 250 milliseconds each, meet the documented five-second evaluation. Reporting is Type B, two trips.

A stopped fan observed with no command does not reproduce those conditions. Likewise, an immediate reading at startup may precede the diagnostic's enable delay. Record the command and elapsed running time alongside feedback frequency.

## Low feedback does not isolate the failed part

This result establishes that the monitored signal was below range. It does not independently distinguish an actual speed problem from a defect in the feedback path. That separation requires the vehicle's fan and circuit diagnostic, including any other related codes.

After a correction, look for valid feedback during an eligible command long enough for the test to complete. A visual impression that the fan spins is incomplete evidence because the controller judges the reported frequency. Battery-cooling access and any work near high-voltage components must follow the manufacturer's service precautions; no probing or pack-opening instructions are supplied here.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 898](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=898).
