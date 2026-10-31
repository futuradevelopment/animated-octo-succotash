---
{"entryId": "generic-p0cae", "code": "P0CAE", "title": "P0CAE: Sensor N fails a relative battery-temperature check", "description": "GM's P0CAE monitor detects sensor N disagreeing with the average of other battery-temperature sensors.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [933]}], "authoringBatch": "batch-36"}
---

# P0CAE: Sensor N fails a relative battery-temperature check

P0CAE identifies hybrid/EV battery temperature sensor N range/performance. The 2018 GM implementation evaluates N relative to other battery-temperature inputs. It can identify an implausible measurement even when its voltage has not reached a circuit endpoint.

## What the performance result measures

An absolute difference above 25 °C between N and the comparison average meets the listed threshold. The controller needs 50 failures out of 67 samples at 25-millisecond intervals. GM lists the evaluation as Type B, two trips.

The comparison excludes the specified temperature circuit-low, circuit-high, erratic and battery-interface communication faults. Resolving those conditions may be necessary before the N performance result can be meaningfully rechecked. No fresh P0CAE during an inhibited period is not equivalent to a pass.

## The code leaves the direction unresolved

Retain N's temperature and the other inputs simultaneously. The absolute-difference test can fail when N is either warmer or colder; the code alone cannot choose. It also cannot establish which reading reflects actual temperature without the vehicle's diagnostic checks.

After repair, verify that the comparison is enabled and that the measurements are credible and consistent. The letter N supplies no universal physical location or connector identification. Use the correct vehicle information and qualified high-voltage service for pack access. This source is a monitor table, not a component replacement rule or a safe internal probing procedure.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 933](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=933).
