---
{"entryId":"generic-p06ea","code":"P06EA","title":"P06EA: Ford upstream NOx sensor processor performance fault","description":"Ford P06EA covers internal processor and sensing-circuit checks for bank 1 NOx sensor 1.","status":"draft","sourceReview":"checked","scope":"Ford 2015 model-year diesel OBD system operation summary, revision December 22, 2014; the cited monitor only, without blanket model or engine applicability.","sourceIds":["ford-diesel-2015"],"authoringBatch":"batch-32","sourcePages":[{"sourceId":"ford-diesel-2015","pages":[42]}]}
---

# P06EA: Ford upstream NOx sensor processor performance fault

P06EA is bank 1 sensor 1 NOx processor performance in Ford's 2015 diesel summary. Its scope is broader than a single memory failure. The source includes RAM and memory-integrity checks, internal sensing-circuit limits and consistency checks between NOx measurement ranges. A generic processor label therefore should not be read as proof of one specific failed chip.

## The controller is part of the measurement system

Ford describes a sensor connected to a NOx controller module that operates the sensing element and heater. The upstream sensor location varies with the vehicle's certification layout, so sensor 1 must be identified from the actual exhaust arrangement.

The malfunction duration is five seconds. One internal range-rationality check specifically requires NOx concentration between 50 and 100 ppm; that condition belongs to that check, not every possible P06EA trigger.

## Separate processor and calibration faults

P225A separately identifies calibration-memory CRC failure. P06EA encompasses additional internal performance conditions. Preserve both codes and other NOx-system faults before deciding what failed. The summary does not establish catalyst efficiency from a processor fault, and an SCR catalyst should not be condemned solely because this NOx measurement path is unreliable.

## Source and applicability

Ford 2015 model-year diesel OBD system operation summary, revision December 22, 2014; the cited monitor only, without blanket model or engine applicability. Ford source, physical PDF page [42](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/DOBDSM1501.pdf#page=42). The documented monitor explains the fault decision; vehicle-specific service information is still needed for connector identification and a complete repair procedure.
