---
{"entryId": "generic-p20bd", "code": "P20BD", "title": "P20BD: Why an open DEF line-heater circuit is distinct from a tank-heater fault", "description": "Interpret P20BD with the correct heater identity and the controller’s off-state circuit test.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 25OBDG04B DEFC monitor calibration only; this document does not establish applicability to every model, engine or reductant system.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [195]}], "authoringBatch": "batch-14"}
---

# P20BD: Why an open DEF line-heater circuit is distinct from a tank-heater fault

The GM calibration discussed here assigns P20BD to reductant heater 2, which is the line heater. This identity is useful because another heater may still be associated with the tank; a generic description such as “DEF heater fault” is not specific enough to select the affected circuit.

## Open-circuit evidence is collected in two stages

The controller can detect an abnormal condition while the line heater is energized, but it switches the heater off to identify the failure mode. In the off state it evaluates a combination of high-side and low-side ADC observations that indicates an open control path.

The test covers either side of the controlled circuit. It does not determine from the code alone whether the interruption is in the heating element, its connections or another part of the path. The row specifies ten samples on a 0.2-second basis and recovery in the next driving cycle.

## What to retain from the fault event

Record the line-heater command and diagnostic status rather than substituting tank-heater data. A functioning tank-heating function cannot establish continuity of the separately identified line-heater path. Likewise, a missing command after detection may be a deliberate diagnostic shutdown.

The monitor is an electrical open-circuit classification, not a direct assessment of frozen fluid or heating effectiveness. The applicable vehicle circuit procedure is needed to locate the interruption. The source does not provide component locations, connector pins or a justified instruction to replace the whole reductant tank.

## Source and scope

2025 GM 25OBDG04B DEFC monitor calibration only; this document does not establish applicability to every model, engine or reductant system. These are documented monitor criteria, not a universal repair procedure. [GM PDF, physical page 195](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=195).
