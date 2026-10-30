---
{"entryId": "generic-p21fa", "code": "P21FA", "title": "P21FA: Bank 2’s lean idle adaptation on the port-injection fuel path", "description": "Understand P21FA’s additive PFI correction and why fuel mode is essential to the documented diagnosis.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [214, 215]}], "authoringBatch": "batch-14"}
---

# P21FA: Bank 2’s lean idle adaptation on the port-injection fuel path

P21FA is the generic fuel-control system B too lean at idle code for bank 2. The GM monitor describes the maximum additive adaptation fault on the port-fuel-injection path. That fuel-path qualification is important when an engine can operate in more than one injection mode.

## The learned correction has its own scale and prerequisites

The listed upper boundary is 5.8125 in the source's additive-correction scale. It is not labeled as a conventional short-term-trim percentage, so it should not be compared numerically with an unidentified scanner trim display.

The additive integrator's stable state must follow the multiplicative PFI integrator's stable state. The continuation also requires pure port injection to have been active for more than two seconds and qualified upstream lambda control. These conditions prevent a different fueling mode from being treated as an equivalent retest.

## What to record before assigning a cause

The basic readiness list includes coolant temperature, injection count and exclusions for wide-open throttle or catalyst-heating demands. A cold start or transition between fuel paths may therefore not provide the same adaptation evidence.

Preserve bank 2's PFI additive value, its stability status and actual injection mode. The monitor reports excessive correction on that path; it does not prove that a port injector, pressure supply or air-measurement component is defective. The correct vehicle procedure is needed to isolate the cause. A cleared adaptation value is not evidence of repair until the relevant path learns and passes again.

## Source and scope

2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join. These are documented monitor criteria, not a universal repair procedure. [GM PDF, physical page 214](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=214) · [GM PDF, physical page 215](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=215).
