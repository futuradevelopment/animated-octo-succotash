---
{"entryId": "generic-p05cd", "code": "P05CD", "title": "P05CD: Bank-2 intake cam timing fails the cold-start comparison", "description": "P05CD evaluates bank-2 intake camshaft timing during the cold-start operating mode described in GM's 2015 OBDG06 table.", "status": "draft", "sourceReview": "checked", "scope": "Document-scoped GM 2015 diagnostic monitor; exact vehicle, engine and calibration applicability not established.", "sourceIds": ["gm-2015-15obdg06-engine-diagnostics"], "sourcePages": [{"sourceId": "gm-2015-15obdg06-engine-diagnostics", "pages": [262]}], "authoringBatch": "batch-33"}
---

# P05CD: Bank-2 intake cam timing fails the cold-start comparison

P05CD evaluates bank-2 intake camshaft timing during the cold-start operating mode described in GM's 2015 OBDG06 table. The controller compares desired cam position with measured position after variable valve timing is activated. It is a position-tracking test, rather than a direct electrical continuity check of the actuator circuit.

## An error needs a qualified operating window
The documented error is the absolute difference between desired and actual position, with a boundary above four degrees. Forty failures within 100 samples establish the result; sampling occurs every 100 milliseconds. The engine must be running, voltage must exceed 11 volts, power takeoff must be inactive and the cold-start mode must be active.

The row also constrains desired and measured cam position and requires a sufficiently stable command. Relevant bank-2 intake actuator circuit faults inhibit the test. These conditions explain why an isolated timing difference during an arbitrary command change is not the complete monitor decision.

## Separate tracking from command movement
Preserve desired position, actual position and cold-start state together. Determine whether actual timing fails to follow a stable request, or whether the apparent error occurs while the controller is deliberately changing its target. Also distinguish this performance result from an actuator electrical fault that would prevent the comparison from running.

Verification should demonstrate appropriate tracking during an enabled cold-start evaluation after the actual cause is addressed. The source does not identify a solenoid, phaser or mechanical timing component as failed. These are document-scoped GM thresholds, not universal limits for every vehicle carrying the generic code.

Source: GM diagnostic parameters, [physical PDF page 262](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG06%20Engine%20Diagnostics.pdf#page=262).
