---
{"entryId": "generic-p2bf8", "code": "P2BF8", "title": "P2BF8: An open-circuit report from exhaust valve B control", "description": "P2BF8 is a PWM control-circuit status fault, separate from the exhaust valve’s mechanical tracking behaviour.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [840, 841]}], "authoringBatch": "batch-16"}
---

# P2BF8: An open-circuit report from exhaust valve B control

P2BF8 concerns an open-circuit diagnostic report from exhaust valve B's PWM control circuit in the source. The monitor accepts the circuit diagnostic's open-status result. It does not infer the fault solely from an exhaust valve that failed to reach a commanded position.

## Electrical status and movement are different evidence

The row lists a four-second qualification and a two-trip response. Its conditions include battery availability, basic enabling criteria and an initialization-related state. The source also uses wording about the short-to-power diagnostic enable for this open-circuit entry, so that label should not be silently rewritten into an unqualified open-circuit test instruction.

A mechanical tracking error and an open circuit can produce related symptoms, but their monitor evidence differs. Retain the circuit status and commanded operation before concluding that the valve is physically stuck. The table provides neither a connector pin nor a resistance specification for proving an open path externally.

## An unresolved initialization detail

The source's initialization description says sufficient time has elapsed, while its printed comparison is less than five seconds. That inconsistency remains unresolved here. It is a reason to consult the applicable service procedure rather than reproduce the expression as a workshop timing rule.

Verification should establish that the electrical diagnostic has run and no longer reports an open circuit. Observing valve movement once does not necessarily test an intermittent electrical interruption. Testing around the exhaust system also requires the prescribed temperature and access precautions; this summary is not a disassembly or probing procedure.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 840](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=840). [GM PDF, page 841](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=841).
