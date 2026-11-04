---
{"entryId": "volkswagen-p13cf", "code": "P13CF", "title": "P13CF: An extremely low cylinder-one pressure signal", "description": "The Volkswagen monitor treats a pressure-sensor signal below 0.13 volts as a cylinder-one circuit fault.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen Golf 7/Golf Wagon 2014-onward CRUA/DEJA Generic Scan Tool manual, edition 08.2018; only the cited engine-control diagnostic table and component procedure, not universal model fitment.", "sourceIds": ["vw-crua-deja-golf7-gst-2018"], "sourcePages": [{"sourceId": "vw-crua-deja-golf7-gst-2018", "pages": [105, 361, 362]}], "authoringBatch": "batch-48"}
---

# P13CF: An extremely low cylinder-one pressure signal

## Understand the low value in its electrical context

Volkswagen's P13CF entry concerns the pressure sensor incorporated into cylinder-one glow plug QX1. With the engine running, the fault criterion is a signal below 0.13 volts over forty revolutions. The strategy labels the condition as a short to ground and schedules the malfunction lamp after two driving cycles.

This very low signal is an electrical observation. It is not a direct statement that cylinder compression is 0.13 of any pressure unit, and it does not establish a mechanical failure in cylinder one. The pressure-sensing function must be distinguished from the glow plug's heating role.

## Check the reference and return paths coherently

The factory QX1 procedure establishes the approximately five-volt supply and examines the harness connections to the engine controller. That gives a technician a way to evaluate the signal within its circuit rather than replacing the assembly solely because a scan tool displays “short to ground.”

Preserve companion pressure-sensor faults and note whether they affect only this cylinder or several sensors. Shared symptoms can be useful diagnostic context, although this code by itself does not identify a shared supply failure. Use the vehicle-specific wiring diagram to locate the correct terminals and test with the circuit in the required safe state.

After repair, the relevant check is whether the cylinder-one signal remains credible while the running monitor completes. Clearing memory with the engine stopped cannot demonstrate that the forty-revolution condition will stay absent.

## Source and applicability

[Volkswagen Golf 7/Golf Wagon CRUA/DEJA Generic Scan Tool, edition 08.2018](https://vwts.ru/diag/engine-crua-deja-golf-7-diagnostic-eng.pdf). Physical PDF pages 105, 361, 362. Volkswagen Golf 7/Golf Wagon 2014-onward CRUA/DEJA Generic Scan Tool manual, edition 08.2018; only the cited engine-control diagnostic table and component procedure, not universal model fitment.
