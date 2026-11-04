---
{"entryId": "generic-p2bef", "code": "P2BEF", "title": "P2BEF: A rich correction appears specifically in bank-two direct-injection mode", "description": "Ford separates direct-injection fuel-control faults from common and port-injection corrections.", "status": "draft", "sourceReview": "needs-review", "scope": "2024–2025 MY V2 Ford OBD System Operation Summary for Gasoline Engines; July 16, 2024 revision, exact stated monitor/application only.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "authoringBatch": "batch-47", "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [99]}], "sourceLocators": [{"sourceId": "ford-gasoline-2024-2025-v2", "locator": "Complete code-specific monitor tables and surrounding explanatory sections on PDF pages 99"}]}
---

# P2BEF: A rich correction appears specifically in bank-two direct-injection mode

## The injection mode narrows the observation

Ford places P2BEF in the direct-injection portion of its fuel monitor and identifies a rich condition on bank 2. In the same table, common-mode mixture faults and port-fuel-injection faults use different code families. The important distinction is therefore not only bank number but which injection mode was being evaluated.

The monitor operates in closed-loop fuel control, with a two-second duration. Typical entry conditions include coolant temperature between 70°C and 110°C, engine load of at least 12%, fuel level of at least 10% and zero purge duty. These conditions define a qualified fuel-correction observation; they do not prove that an injector is leaking.

## Retain mode-specific fuel data

Save the active injection mode, bank-two fuel corrections and companion fuel-pressure or sensor faults. Comparing a direct-injection result with data captured later in port-injection operation can conceal the condition that caused this code. A technician should use the matching engine's diagnostic flow to evaluate the mixture inputs and delivery system.

The printed rich-fault trim inequalities in this overview lack an unambiguous sign convention. This article remains flagged for source review and does not silently rewrite them into a numerical rich threshold. The clearly labeled direct-injection scope and operating conditions are retained.

No fuel-system opening or parts replacement follows from this code alone. High-pressure fuel work requires the specified professional depressurization and service procedure; a mode-specific correction fault is evidence to investigate, not a component verdict.

## Source and scope

[Factory diagnostic source](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf) — PDF pages 99.

2024–2025 MY V2 Ford OBD System Operation Summary for Gasoline Engines; July 16, 2024 revision, exact stated monitor/application only.
