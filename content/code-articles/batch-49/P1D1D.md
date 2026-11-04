---
{"entryId": "honda-p1d1d", "code": "P1D1D", "title": "P1D1D: The V0 sensor reports a sustained low signal", "description": "Honda P1D1D concerns V0 voltage information used by the PCU to control the voltage control unit.", "status": "draft", "sourceReview": "needs-review", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1d1d-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1d1d-factory", "pages": [1]}], "authoringBatch": "batch-49"}
---

# P1D1D: The V0 sensor reports a sustained low signal

## The labeled threshold is a low-voltage criterion

Honda P1D1D concerns V0 voltage information used by the PCU to control the voltage control unit. The explicit malfunction threshold is a sensor output below 0.10 V for at least 500 milliseconds. The diagram also places the failure band below the normal signal range.

The general-description sentence, however, says the voltage “exceeds” a set value. That wording is inconsistent with the low-circuit title and labeled threshold. This article retains a source-review flag and does not reinterpret the code as an overvoltage condition. Current Honda information should resolve the wording before the excerpt is used as a definitive circuit specification.

## A low sensor signal is not a discharged-battery diagnosis

The monitor requires at least 8 V on the 12-volt supply. Its signal boundary should not be confused with the actual traction-battery voltage. The sole listed cause is internal PCU failure; the excerpt does not establish that the battery is empty or identify a replaceable external sensor.

Honda specifies one-drive-cycle MIL illumination with a power-system indication and stores pending, confirmed and freeze-data records. Keep those records so the V0 reading and related internal communication or supply faults can be reviewed together.

A qualified technician must apply the matching diagnostic procedure. The low signal level does not make the surrounding PCU safe to open or probe without the required high-voltage isolation and verification.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P1D1D%205550.pdf), PDF pages 1. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
