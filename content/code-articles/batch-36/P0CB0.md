---
{"entryId": "generic-p0cb0", "code": "P0CB0", "title": "P0CB0: Sensor N circuit high may display extreme cold", "description": "GM's P0CB0 monitor assesses an NTC input whose high voltage converts to a temperature below the documented endpoint.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [935]}], "authoringBatch": "batch-36"}
---

# P0CB0: Sensor N circuit high may display extreme cold

P0CB0 identifies hybrid/EV battery temperature sensor N circuit high. In the 2018 GM monitor, an NTC thermistor and board pull-up resistor make a low temperature or an open circuit produce a high sensed voltage.

## The failure value is a cold conversion

The controller compares the converted temperature with a threshold below −69 °C. Eight failed samples out of ten are needed, at 100 milliseconds per sample. System voltage must be above 10.2 V, and the specified battery-interface communication faults must be absent. GM assigns Type B, two trips.

This explains why a scanner can show both a high-circuit description and an implausibly cold temperature. Neither the label nor the endpoint value alone establishes the actual pack temperature.

## What changes the next check

Record N's value with other temperature evidence and related circuit codes. An open sensing path is a source-supported possibility, but P0CB0 does not locate it or prove which component needs replacement. The actual vehicle procedure is needed to assess the sensing path and distinguish the possible causes.

Following repair, verify a credible N reading through a completed eligible circuit test. A temporary return to normal may not resolve an intermittent problem. Confirm the channel's physical mapping before inspection, and leave internal battery circuit work to qualified high-voltage service. No universal test pin or disassembly instruction is supplied here.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 935](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=935).
