---
{"entryId": "generic-p0a1c", "code": "P0A1C", "title": "P0A1C: A motor-B controller fault has a mislabeled source heading", "description": "Read the supported GM P0A1C internal-controller criteria while retaining the document’s motor-A versus motor-B naming conflict.", "status": "draft", "sourceReview": "needs-review", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [300]}], "authoringBatch": "batch-22"}
---

# P0A1C: A motor-B controller fault has a mislabeled source heading

The generic P0A1C definition concerns motor B control-module performance. In this GM PDF the row appears inside the MCP B controller-fault section, but its component cell says motor A. That naming conflict is retained here rather than silently presenting the row as a verified hardware-location map.

## What the row does establish

The listed criteria concern internal processor status, stack-address overrun and incomplete EEPROM writing during powerdown. Evaluation requires the wakeup signal, and the watchdog-related branch excludes certain reset, overflow and low-12V interrupt conditions.

Separate rows on the same page identify motor B RAM, ROM, EEPROM and programming diagnostics. Their presence helps distinguish a general internal-performance report from a specifically named memory test, although it does not resolve the incorrect component label.

## Keep module identity with the evidence

Record which controller actually reported P0A1C, its calibration and accompanying supply or internal-status codes. Do not identify a physical motor-A assembly from the single conflicting cell, or assume a generic scanner's expanded title establishes the module location.

The source is useful for understanding the types of internal checks involved but insufficient for a replacement or programming decision. The matching service information must resolve applicability and component identity. High-voltage motor-control equipment requires trained professional isolation and diagnosis; this table provides no safe invasive test procedure.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 300](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=300).
