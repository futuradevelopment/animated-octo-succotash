---
{"entryId": "generic-p27aa", "code": "P27AA", "title": "P27AA: Solenoid D characterization is not accepted as correctly programmed", "description": "P27AA reports invalid characterization programming for pressure-control solenoid D in the reviewed GM source.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 25OBDG03A monitor and stated transmission mappings only; vehicle and calibration applicability require confirmation.", "sourceIds": ["gm-2025-03a"], "sourcePages": [{"sourceId": "gm-2025-03a", "pages": [1204, 1205]}], "authoringBatch": "batch-04"}
---

# P27AA: Solenoid D characterization is not accepted as correctly programmed

P27AA reports invalid characterization programming for pressure-control solenoid D in the reviewed GM source. This data-check row names GF9 C2 CB29, GR10 C5 C1356789, or CVT C1 clutch functions. Its mappings should not be borrowed from a different code family's solenoid-D row.

## The data axes must remain ordered

The continuation identifies an axis-data failure when a characterization point is lower than its preceding point. The data must be nondecreasing. This is an internal calibration-validity rule, not a measurement that clutch pressure physically fell during driving.

The same programming-complete flag can also be invalidated by missing data, incomplete programming, a device-class mismatch or a checksum problem. The code identifies the rejected solenoid-D data set without uniquely identifying the reason for rejection.

## Check the installed assembly identity

The source associates characterization with the valve-body assembly part number and describes programming the matching data after valve-body service. A change in hardware without correctly completed matching data is therefore a relevant investigation path, not a proven cause in every case.

The test runs during normal controller power-up initialization before ordinary time-loop operation. A road test or electrical resistance check cannot replace that data acceptance test.

Verification should establish correct hardware-to-data matching, accepted programming and no recurrence at subsequent initialization. The source lists Type A, one-trip behavior. It does not authorize replacing a clutch, valve body or controller solely because this calibration diagnostic is stored.

## Source and applicability

Confirm the vehicle, transmission variant and relevant module before applying this monitor description. [GM diagnostic table, PDF page 1204](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=1204). [GM diagnostic table, PDF page 1205](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=1205).
