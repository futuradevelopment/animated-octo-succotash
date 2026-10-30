---
{"entryId": "generic-p2ead", "code": "P2EAD", "title": "P2EAD: second reductant injector needs excessive delivery compensation", "description": "P2EAD detects an excessive filtered compensation factor for the second reductant metering unit.", "status": "draft", "sourceReview": "checked", "scope": "Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [891]}], "authoringBatch": "batch-09"}
---

# P2EAD: second reductant injector needs excessive delivery compensation

P2EAD is a performance diagnosis for the second DEF injector or metering unit. The cited strategy looks for hydraulic-system faults that reduce delivery. Its decision variable is an exponentially weighted moving average of the reductant delivery performance compensation factor for DEFMV2.

## Compensation is the evidence

The listed failure threshold is above 1.41. This is a dimensionless compensation-factor threshold, not 1.41 liters, pressure units or an injector electrical resistance. The controller is reporting that the correction has become large enough that the expected pressure-drop behavior no longer guarantees proper delivery performance.

The monitor requires closed-loop delivery-performance compensation for DEFMV2 to be active. It operates on a 100-millisecond function task. An injector command issued outside that closed-loop state does not necessarily exercise this diagnosis, and an instantaneous pressure observation is not equivalent to the filtered compensation history.

## Distinguish delivery from electrical continuity

A metering unit can have an intact electrical circuit while its delivered quantity remains inadequate. Conversely, P2EAD does not isolate the diminished delivery to the injector alone; the strategy explicitly refers to the hydraulic system. Review compensation trend and the pressure-response evidence used by the applicable system before selecting a component.

Verification should establish acceptable delivery compensation with the second metering unit's closed-loop monitor active. A cleared code or audible injector actuation does not demonstrate recovered metering performance. The table provides no universal pressure test, disassembly procedure or replacement instruction.

## Source and applicability

Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately. [GM monitor table, PDF page 891](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=891).
