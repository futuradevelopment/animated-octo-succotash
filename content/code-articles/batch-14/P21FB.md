---
{"entryId": "generic-p21fb", "code": "P21FB", "title": "P21FB: A rich idle correction on bank 2’s port-fuel-injection path", "description": "Learn why P21FB depends on additive PFI adaptation and cannot be verified in an arbitrary injection mode.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [218, 219]}], "authoringBatch": "batch-14"}
---

# P21FB: A rich idle correction on bank 2’s port-fuel-injection path

P21FB is listed as fuel-control system B too rich at idle on bank 2. The cited GM implementation diagnoses the minimum additive correction on the port-injection fuel path. It is an adaptation result with fuel-mode prerequisites, not a direct test of an injector's sealing or spray.

## The minimum correction needs a stable learning sequence

The failure boundary is below −5.484 on the source's additive scale. The row requires the additive integrator to become stable after the PFI multiplicative integrator has stabilized. This sequence matters because a changing or freshly reset correction is not the same as the qualified learned value.

The continuation requires pure port injection for more than two seconds and lists thermal and operating readiness conditions, including a coolant threshold of 70.5 °C and an injection-count requirement. These are selected conditions from a longer eligibility description, not a complete drive cycle.

## Avoid assigning a cause from the correction alone

The value is not identified as a standard scanner percentage. Confirm the parameter's scale and fuel path before comparing it with displayed trims. Operation on another injection path cannot by itself establish that the PFI adaptation passed.

A useful record contains bank 2's additive value, both adaptation stability states and actual fueling mode. The source does not isolate a leaking injector, pressure fault or sensing error. Verification should allow the relevant adaptation and diagnostic to complete under applicable conditions, rather than treating a reset correction as proof that the rich condition has disappeared.

## Source and scope

2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join. These are documented monitor criteria, not a universal repair procedure. [GM PDF, physical page 218](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=218) · [GM PDF, physical page 219](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=219).
