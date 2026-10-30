---
{"entryId": "generic-p27ab", "code": "P27AB", "title": "P27AB: Solenoid E characterization data is missing, incompatible or invalid", "description": "P27AB is the pressure-control-solenoid-E characterization check in the reviewed GM transmission source.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 25OBDG03A monitor and stated transmission mappings only; vehicle and calibration applicability require confirmation.", "sourceIds": ["gm-2025-03a"], "sourcePages": [{"sourceId": "gm-2025-03a", "pages": [1206, 1207]}], "authoringBatch": "batch-04"}
---

# P27AB: Solenoid E characterization data is missing, incompatible or invalid

P27AB is the pressure-control-solenoid-E characterization check in the reviewed GM transmission source. The row identifies GF9 C3 CB38, GR10 C4 C23467810R, or CVT torque-converter-control applications. The applicable transmission must be known before those alternatives are used.

## Incomplete programming is a documented failure path

The source explicitly identifies absent or incomplete solenoid data as a condition that can occur with a new or service transmission controller. The important question is whether the installed controller contains an accepted data set, not whether a new component can be assumed correct merely because it is new.

Other rejection paths include a different solenoid class from the one expected by calibration, a checksum mismatch and decreasing axis points. The monitor sets the programming-complete status false for these conditions.

## The check follows assembly-specific data

Characterization is originally assigned using the installed valve-body assembly part number. The source describes matching TCM characterization programming when that assembly is serviced. Confirming the assembly identity and programming completion is therefore directly connected to this diagnostic.

The monitor executes once per normal power-up during initialization. A later acceptable torque-converter response or clutch shift does not prove that the stored-data check passed, and the code does not itself establish mechanical failure.

Verification should confirm valid solenoid-E data for the installed assembly and no recurrence at initialization after the applicable correction. The documented Type A, one-trip behavior does not prescribe a solenoid, valve-body or controller replacement.

## Source and applicability

Confirm the vehicle, transmission variant and relevant module before applying this monitor description. [GM diagnostic table, PDF page 1206](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=1206). [GM diagnostic table, PDF page 1207](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=1207).
