---
{"entryId":"generic-p06df","code":"P06DF","title":"P06DF: Ford glow-plug module memory checksum fault","description":"P06DF identifies the glow-plug module's power-up memory-checksum failure in Ford's documented diesel system.","status":"draft","sourceReview":"checked","scope":"Ford 2015 model-year diesel OBD system operation summary, revision December 22, 2014; the cited monitor only, without blanket model or engine applicability.","sourceIds":["ford-diesel-2015"],"authoringBatch":"batch-32","sourcePages":[{"sourceId":"ford-diesel-2015","pages":[157,158]}]}
---

# P06DF: Ford glow-plug module memory checksum fault

P06DF is glow-plug module memory checksum error. Ford's 2015 diesel summary describes a failure when RAM checksums do not match the expected result. This concerns the module's internal memory integrity, not an individual glow plug's current draw.

## The check occurs at power-up

Ford lists P06DF as a power-up monitor, unlike most other operational checks in the same group that run continuously. The typical fault-registration time is about one second. This distinction matters when verifying a repair: an extended run without the relevant power-up check does not reproduce the same diagnostic opportunity.

The module also controls DEF heating and communicates diagnostic information over the diesel high-speed CAN network. Other module supply, driver and communication faults should be retained as separate evidence.

## A memory result is not a plug replacement instruction

Individual glow-plug open-load faults use cylinder-specific codes and current criteria. P06DF does not identify a failed cylinder heater or justify replacing a set of glow plugs. The correct module diagnostic procedure must determine the approved response to the checksum fault. Avoid improvised direct-power tests; the documented glow plugs are duty-cycle controlled and can overheat under constant battery voltage.

## Source and applicability

Ford 2015 model-year diesel OBD system operation summary, revision December 22, 2014; the cited monitor only, without blanket model or engine applicability. Ford source, physical PDF pages [157](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/DOBDSM1501.pdf#page=157), [158](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/DOBDSM1501.pdf#page=158). The documented monitor explains the fault decision; vehicle-specific service information is still needed for connector identification and a complete repair procedure.
