---
{"entryId": "generic-p0c9a", "code": "P0C9A", "title": "P0C9A: Sensor L circuit high can indicate an open sensing path", "description": "GM's P0C9A example turns high thermistor voltage into a very low calculated battery temperature.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [927]}], "authoringBatch": "batch-36"}
---

# P0C9A: Sensor L circuit high can indicate an open sensing path

P0C9A identifies hybrid/EV battery temperature sensor L circuit high. The 2018 GM table describes an NTC thermistor with a pull-up resistor on the sensing board. A low actual temperature or an open circuit produces high sensed voltage and therefore a cold converted value.

## The code's high/low wording needs context

The monitor fails below −69 °C calculated temperature for eight of ten samples, taken at 100-millisecond intervals. It requires system voltage above 10.2 V and excludes the listed battery-interface communication faults. GM lists Type B, two trips.

A “high” circuit code thus need not accompany a hot temperature display. This relation is useful when interpreting a scan tool that shows an extreme cold value while the generic description says high.

## Distinguish a mechanism from a proven defect

GM names an open circuit as a mechanism that can create this response. P0C9A does not identify the physical break, confirm the thermistor itself is defective or establish the actual battery temperature. Compare L's reading with other thermal evidence and follow the applicable circuit procedure.

After repair, confirm credible temperature data and a completed eligible diagnostic. A plausible momentary value is not enough if the original fault was intermittent. The source does not provide a universal location for L or direct test points. Internal pack work requires trained high-voltage personnel and vehicle-specific safety instructions.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 927](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=927).
