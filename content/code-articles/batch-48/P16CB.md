---
{"entryId": "volkswagen-p16cb", "code": "P16CB", "title": "P16CB: The heater-support pump loses its battery-supply indication", "description": "The V488 supply entry uses a sixty-second driver-feedback check.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen Golf 7/Golf Wagon 2014-onward CRUA/DEJA Generic Scan Tool manual, edition 08.2018; only the cited engine-control diagnostic table and component procedure, not universal model fitment.", "sourceIds": ["vw-crua-deja-golf7-gst-2018"], "sourcePages": [{"sourceId": "vw-crua-deja-golf7-gst-2018", "pages": [111, 409, 410]}], "authoringBatch": "batch-48"}
---

# P16CB: The heater-support pump loses its battery-supply indication

## A missing supply report is narrower than a battery diagnosis

For the CRUA/DEJA application, P16CB describes missing battery-signal feedback from heater-support pump V488. The table bases detection on the output driver's diagnostic signal, with a sixty-second observation period and a two-driving-cycle lamp schedule.

It does not publish a low-battery voltage threshold or identify the battery as the failed part. The intended question is whether the pump's local supply and reported state agree with the controller's expectations. A vehicle can start normally while a separate pump circuit still needs diagnosis.

## Trace the local circuit described by the manual

The V488 checking sequence first looks for battery voltage at the pump connection, then evaluates its path back to the engine controller. Its inspection branches include wiring and connector faults before a component decision. That sequence helps avoid replacing a pump solely because a shortened scan description contains the words “supply voltage.”

Retain companion short, open, low-speed or thermal pump codes so the technician can interpret the whole event. Identify V488 using the correct engine diagram; another coolant pump's connector is not an equivalent measurement point.

Because the monitor observes the missing signal for sixty seconds, a quick restart with no immediate warning offers limited confirmation. The repaired system should complete the relevant operating check with stable supply feedback and no return of the original condition. Do not bridge terminals to force an apparent supply signal.

## Source and applicability

[Volkswagen Golf 7/Golf Wagon CRUA/DEJA Generic Scan Tool, edition 08.2018](https://vwts.ru/diag/engine-crua-deja-golf-7-diagnostic-eng.pdf). Physical PDF pages 111, 409, 410. Volkswagen Golf 7/Golf Wagon 2014-onward CRUA/DEJA Generic Scan Tool manual, edition 08.2018; only the cited engine-control diagnostic table and component procedure, not universal model fitment.
