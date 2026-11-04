---
{"entryId": "generic-p2cf8", "code": "P2CF8", "title": "P2CF8: GM monitors bypass-valve D driver current while energized", "description": "GM P2CF8 concerns the energized valve-D H-bridge current monitor, with a factory threshold expression that needs clarification.", "status": "draft", "sourceReview": "needs-review", "scope": "GM 2024 diagnostic parameter file 24OBDG03A Part 1, ECM summary section and cited monitor only; verify exact controller/calibration and vehicle application independently of the file-level matrix.", "sourceIds": ["gm-2024-03a-part1"], "sourcePages": [{"sourceId": "gm-2024-03a-part1", "pages": [893]}], "authoringBatch": "batch-41"}
---

# P2CF8: GM monitors bypass-valve D driver current while energized

P2CF8 is identified in GM's 24OBDG03A Part 1 as excessive motor current for engine coolant bypass valve D, or HEAT-BRV. The controller observes the load circuit while the H-bridge is energized. This distinguishes the monitor from a position-tracking test that asks whether the valve reached its target.

## Observe the operating conditions first

The row requires the diagnostic to be enabled, valid run/crank ignition conditions, an engine that is not cranking and an enabled engine diagnostic system. It also lists a condition that the driver overcurrent test has not failed during the current key cycle. The reported persistence requirement is four seconds within a five-second window.

Those details mean that an unpowered valve circuit or a cranking event does not reproduce the documented comparison. Current-related evidence and commanded-position evidence can describe different aspects of the same assembly; one should not be substituted for the other.

## A source limit remains unresolved

The factory threshold cell prints the bounded expression 8.1 A < X < 12.8 A, while the surrounding description calls the fault overcurrent outside a controller-specific acceptable range. The table does not explain whether that expression represents calibration variation or a literal fault window. This article retains a source-review flag rather than selecting a single universal current limit.

The supported interpretation is consequently limited to the energized driver-current strategy and its timing and enable conditions. Exact calibration information is needed before applying a numerical acceptance test. The source provides no connector-level repair instructions and classifies this entry as Type B, two trips; it does not establish that the motor or controller must be replaced.

## Source and applicability

[General Motors, 24OBDG03A Part 1, physical page 893](https://gsi.ext.gm.com/gmspo/mode6/pdf/2024/24OBDG03A%20Part%201.pdf#page=893). GM 2024 diagnostic parameter file 24OBDG03A Part 1, ECM summary section and cited monitor only; verify exact controller/calibration and vehicle application independently of the file-level matrix.
