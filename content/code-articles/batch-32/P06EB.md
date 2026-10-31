---
{"entryId":"generic-p06eb","code":"P06EB","title":"P06EB: Ford downstream NOx sensor processor performance fault","description":"P06EB identifies internal performance checks in Ford's bank 1 sensor 2 NOx controller.","status":"draft","sourceReview":"checked","scope":"Ford 2015 model-year diesel OBD system operation summary, revision December 22, 2014; the cited monitor only, without blanket model or engine applicability.","sourceIds":["ford-diesel-2015"],"authoringBatch":"batch-32","sourcePages":[{"sourceId":"ford-diesel-2015","pages":[49]}]}
---

# P06EB: Ford downstream NOx sensor processor performance fault

P06EB is the bank 1 sensor 2 NOx processor-performance code in Ford's documented diesel system. Sensor 2 is described as a tailpipe sensor, typically downstream of the SCR and DPF. Its controller manages the sensing element and heater, so this code concerns the measurement system itself.

## Several internal checks share the code

Ford lists memory-integrity failures, internal signal-range faults and a comparison between NOx measurement ranges among the possible triggers. The typical malfunction duration is five seconds. The 50–100 ppm window applies to the range-rationality sequence; it should not be represented as a prerequisite for every memory or electrical failure under P06EB.

The downstream placement makes the sensor important to aftertreatment assessment, but a processor fault is not a direct test result for SCR catalyst efficiency.

## Keep sensor identity and fault type

P06EA is the sensor 1 counterpart, while P225B specifically identifies sensor 2 calibration-memory CRC failure. Preserve that distinction when reviewing a collection of exhaust codes. The summary cannot isolate the physical cause from the processor label alone. Use the correct sensor-controller service procedure and verify reliable measurement before drawing a conclusion about the catalyst's conversion performance.

## Source and applicability

Ford 2015 model-year diesel OBD system operation summary, revision December 22, 2014; the cited monitor only, without blanket model or engine applicability. Ford source, physical PDF page [49](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/DOBDSM1501.pdf#page=49). The documented monitor explains the fault decision; vehicle-specific service information is still needed for connector identification and a complete repair procedure.
