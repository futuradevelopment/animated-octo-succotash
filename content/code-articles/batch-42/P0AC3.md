---
{"entryId": "generic-p0ac3", "code": "P0AC3", "title": "P0AC3: Ford's battery-current sensor reference becomes unstable", "description": "Ford's intermittent current-sensor code can be triggered by the sensor's reference voltage rather than a genuine change in battery current.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [154, 155]}], "authoringBatch": "batch-42"}
---

# P0AC3: Ford's battery-current sensor reference becomes unstable

P0AC3 is labeled an intermittent or erratic battery-current sensor circuit. Ford's documented criterion explains one important mechanism behind that label: the current sensor's reference voltage leaves its permitted range. The event need not represent a genuine burst of battery charging or discharge current.

## The reference is part of the measurement

Ford specifies reference voltage above 5.5 volts or below 4.5 volts for half a second as the malfunction condition. This distinguishes P0AC3 from the adjacent current-sensor low and high codes, whose examples use measured current limits. A technician should not substitute those current thresholds for this reference-voltage check.

The BECM uses battery current when managing the high-voltage battery and determining its ability to receive or supply power. Unstable measurement support can therefore undermine interpretation even when the current value displayed after the event looks plausible.

## Retain the surrounding electrical evidence

The source separately describes current-sensor correlation and power-up checks. Those monitors assess other relationships and operating states; their results can complement P0AC3 but do not change its particular reference-voltage trigger.

Useful fault records identify the reference condition, associated supply faults and when the event occurred. The summary does not provide accessible test points or conclude that the sensor alone is the failed part. It also does not authorize probing inside the high-voltage battery assembly.

Professional verification needs the applicable vehicle procedure and stable measurement support during the relevant operating conditions. A fault-memory clear, an apparently steady current display or a normal total pack voltage at one moment is insufficient to demonstrate that the intermittent reference-voltage excursion no longer occurs.

## Source and applicability

Ford Motor Company, [physical page 154](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=154); [physical page 155](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=155). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
