---
{"entryId": "ford-b10af", "code": "B10AF", "title": "B10AF: the relay-coil circuit behind a silent automatic-climate blower", "description": "Ford B10AF concerns the blower relay control circuit on the dual automatic temperature control system.", "status": "draft", "sourceReview": "needs-review", "scope": "Ford 2011 Fusion FWD 2.5L workshop manual, Pinpoint Test S: The Blower Motor is Inoperative - DATC; limited to the module and equipment configuration described.", "sourceIds": ["ford-2011-fusion-7eedb4b153be5b"], "sourceLocators": [{"sourceId": "ford-2011-fusion-7eedb4b153be5b", "locator": "Pinpoint Test S: The Blower Motor is Inoperative - DATC; Normal Operation and complete pinpoint diagnostic sequence"}], "authoringBatch": "batch-46"}
---

# B10AF: the relay-coil circuit behind a silent automatic-climate blower

B10AF directs attention to the blower relay coil control on the dual automatic temperature control system. The HVAC module grounds that coil to activate the relay. The relay then supplies the blower speed controller, which operates the motor through a separate electrical path.

## Two suffixes, different evidence

Ford describes :12 as excessive voltage on the relay-coil ground circuit, indicating a short to voltage. Suffix :14 means the monitored voltage is absent, consistent with an open or a direct ground short. Neither description alone establishes that the blower motor has failed.

For the :14 branch, the relay component test precedes checks of coil supply and control-wire continuity. The published supply check expects more than 10 volts; the isolated control-wire check expects less than 5 ohms.

## Separate the relay from the controller

A blower that remains silent can also have a controller supply, controller ground or motor-path problem. Ford provides separate branches for those conditions and for the pulse-width-modulated speed command. B10B9 belongs to that speed-command circuit and should not be conflated with B10AF.

The source's normal-operation description and later power-feed test name different relay supply circuits. That discrepancy needs wiring-diagram confirmation and remains flagged here. Module and controller connectors are inspected before replacement decisions. After repair, verify blower operation across requested speeds and repeat the HVAC self-test using the correct automatic-climate procedure.

## Source and applicability

[Ford workshop procedure](https://charm.li/Ford/2011/Fusion%20FWD%20L4-2.5L/Repair%20and%20Diagnosis/Heating%20and%20Air%20Conditioning/Testing%20and%20Inspection/Pinpoint%20Tests/Pinpoint%20Test%20S%3A%20The%20Blower%20Motor%20is%20Inoperative%20-%20DATC/). Ford 2011 Fusion FWD 2.5L workshop manual, Pinpoint Test S: The Blower Motor is Inoperative - DATC; limited to the module and equipment configuration described.
