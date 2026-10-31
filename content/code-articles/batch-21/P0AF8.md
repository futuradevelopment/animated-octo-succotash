---
{"entryId": "generic-p0af8", "code": "P0AF8", "title": "P0AF8: Battery and generator-controller voltage measurements disagree", "description": "P0AF8 compares hybrid battery voltage with the starter-generator controller output voltage in this GM system.", "status": "draft", "sourceReview": "checked", "scope": "2009 General Motors diagnostic parameter file 09OBDG08 Engine Diagnostics.pdf. Section-specific modules and calibrations; no per-code model or engine applicability established.", "sourceIds": ["gm-2009-08-engine"], "sourcePages": [{"sourceId": "gm-2009-08-engine", "pages": [119]}], "authoringBatch": "batch-21"}
---

# P0AF8: Battery and generator-controller voltage measurements disagree

P0AF8 is a voltage-correlation check in GM's BAS hybrid summary. It compares the energy-storage controller's battery voltage with the starter/generator controller's output-voltage information. The documented difference threshold is greater than five volts for four seconds.

## The connection state qualifies the comparison

The main relay must be closed, the supplied battery-voltage information must be valid and the listed pre-flux current condition must be met. Those prerequisites matter: two voltages taken while the system is intentionally disconnected do not necessarily reproduce this diagnostic test.

The source states that the comparison is intended to detect connection problems involving the phase-cable, fuse or relay path. It does not establish which element failed from P0AF8 alone. Measurement validity remains part of the interpretation.

## Correlation differs from low system voltage

The neighboring P0AFA monitor evaluates output below a fixed low-voltage limit. P0AF8 instead evaluates disagreement between two voltage views. Both measurements could be above a low-voltage threshold yet still fail their correlation.

Preserve both controller readings, connection state and companion faults. Use the exact hybrid diagnostic and isolation procedures through qualified service; do not bridge fuses or relays to test the theory. Verification should show credible agreement with the required connection state and completed monitoring. An erased code or a normal reading from only one controller cannot establish that the original voltage disagreement is resolved.

## Source and applicability

2009 General Motors diagnostic parameter file 09OBDG08 Engine Diagnostics.pdf. Section-specific modules and calibrations; no per-code model or engine applicability established. This explanation describes the documented monitor, not a universal repair procedure.

[GM diagnostic parameters, PDF page 119](https://gsi.ext.gm.com/gmspo/mode6/pdf/2009/09OBDG08%20Engine%20Diagnostics.pdf#page=119).
