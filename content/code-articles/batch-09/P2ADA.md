---
{"entryId": "generic-p2ada", "code": "P2ADA", "title": "P2ADA: cold-soak comparison of reductant tank temperatures", "description": "P2ADA detects an excessive disagreement between two reductant temperature measurements after a qualified soak.", "status": "draft", "sourceReview": "checked", "scope": "Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [207]}], "authoringBatch": "batch-09"}
---

# P2ADA: cold-soak comparison of reductant tank temperatures

The documented P2ADA monitor compares the reductant UTLC temperature measurement with the reductant tank temperature sensor. It runs after a sufficiently long engine stop, when the temperatures are expected to have stabilized. It is a coherence check, not simply an electrical signal crossing a low or high limit.

## Why startup history matters

A difference greater than 21°C in either direction is the listed failure criterion. The table's startup reference can become usable after engine-off time exceeds eight hours and at least four contributing reference sensors are valid. It also requires sensor A above −29°C and excludes circuit faults in either tank temperature channel, SENT communication faults and specified controller faults.

These conditions change interpretation. Two readings that differ while the tank is being heated are not automatically equivalent to a failed stabilized-temperature check. Equally, a nominally long park does not guarantee that the reference is valid if the contributing sensors are unavailable.

## Decide which measurement deserves investigation

Preserve both temperatures and the cold-soak/reference status from the event. The code identifies disagreement but does not establish which of the two channels is wrong. Comparing each against the documented startup reference is more informative than assuming sensor B caused the problem because it appears in the code title.

The table includes several startup timing qualifications and states that recovery occurs at the next driving cycle. Verification should therefore use the applicable qualified startup procedure, not expect a warm engine restart to reproduce or clear this specific comparison. The exact model and controller procedure remain necessary before component decisions.

## Source and applicability

Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately. [GM monitor table, PDF page 207](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=207).
