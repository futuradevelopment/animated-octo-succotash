---
{"entryId": "generic-p0acd", "code": "P0ACD", "title": "P0ACD: An absolute cold limit defines battery sensor-three circuit high", "description": "Understand the GM P0ACD input-three monitor and why channel identity matters more than a generic battery-temperature display.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [236]}], "authoringBatch": "batch-22"}
---

# P0ACD: An absolute cold limit defines battery sensor-three circuit high

P0ACD is the circuit-high code for battery temperature input three in the cited GM controller. The documented limit is an indicated temperature below −45°C. The code does not state that the battery is physically cold or that its third physical module has failed.

## Identify the measurement the controller rejected

The monitor operates in battery-controller run mode with an accepted low-voltage supply and no P0A1F controller-performance fault. It requires 30 failing samples out of 40 at 100ms intervals. There is no additional peer-temperature comparison in this particular row.

That differs from P0ACB, which compares valid input three against the other three sensors. A circuit-high result should retain its own signal-limit meaning rather than being described as a generic sensor disagreement.

## Preserve the original channel label

Capture input three, validity status and related temperature records before clearing the code. The controller's input number does not by itself locate a sensor inside the pack, and a minimum-temperature display can hide that numbering.

The source contains no connector pinout or test proving whether the sensor, wiring or controller input is responsible. The applicable service information must supply those distinctions. Any pack access requires a trained high-voltage technician and the prescribed isolation and verification process. A low scan value must never be used as a substitute for confirming the pack's safe electrical state.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 236](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=236).
