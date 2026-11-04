---
{"entryId": "generic-p26cb", "code": "P26CB", "title": "P26CB: Ford detects a coolant pump that cannot establish normal rotation", "description": "Ford's electric coolant-pump monitor combines excessive current and low speed over repeated restart events.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [106, 108]}], "authoringBatch": "batch-42"}
---

# P26CB: Ford detects a coolant pump that cannot establish normal rotation

P26CB is more specific than a general report of high engine temperature. Ford's hybrid-system example uses evidence from the electric coolant pump itself to recognize a performance or stuck-off condition. The pump controller evaluates its rotation and current, then reports the result to the PCM over LIN.

## Repeated restart evidence changes the interpretation

Ford's stated malfunction condition combines excessive pump current with insufficient rotational speed over four restart events. The operation table lists a five-second monitoring duration and requires a working LIN communication path. A single low-speed observation without the associated current and restart information does not reproduce that defined failure pattern.

The combination is useful because speed alone can fall for different reasons. In this monitor, the paired current evidence supports a pump that is struggling to establish operation. The summary does not provide a universal numerical current limit or authorize a direct power-feed test.

## Separate a stalled pump from a dry-running pump

Ford assigns a different condition, P26CE, to excessive speed with low current, described in the context of a dry-running pump. P26CB's high-current, low-speed behavior is therefore not interchangeable with the neighboring overspeed observation. The appropriate service procedure must still establish the physical cause; the monitor is not a blanket instruction to replace the assembly.

Diagnostic records should preserve communication faults, pump feedback and whether the failure repeats under the manufacturer's permitted checks. An absent code while LIN is faulty may reflect an unavailable monitor. Likewise, acceptable coolant temperature during a brief observation does not prove the pump has passed the repeated-start performance test or will supply the required flow under other conditions.

## Source and applicability

Ford Motor Company, [physical page 106](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=106); [physical page 108](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=108). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
