---
{"entryId": "honda-p1d9d", "code": "P1D9D", "title": "P1D9D: Parallel VCU temperature readings separate for ten seconds", "description": "Honda P1D9D evaluates the difference between temperature readings from parallel phases of the VCU-side IGBT chip sensing arrangement.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1d9d-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1d9d-factory", "pages": [1]}], "authoringBatch": "batch-49"}
---

# P1D9D: Parallel VCU temperature readings separate for ten seconds

## The comparison is between parallel IGBT temperature channels

Honda P1D9D evaluates the difference between temperature readings from parallel phases of the VCU-side IGBT chip sensing arrangement. The specified failure condition is a difference above +50 °C or below −50 °C continuing for at least ten seconds. Either direction of disagreement can satisfy the monitor.

The purpose is to assess whether the temperature information remains mutually plausible. The code is not an absolute overtemperature threshold for the VCU, and it does not identify which of the compared channels is accurate. The enable table requires at least 5 V on the internal supply designated as the high-voltage-side 6 V supply.

## A channel disagreement needs the correct internal diagnostic procedure

The factory possible-cause section lists internal PCU failure. It does not provide an external temperature-probe comparison, a sensor pinout or a replacement instruction for an individual channel. A qualified technician needs the current Honda procedure and the actual diagnostic values before deciding how the disagreement should be verified.

Honda describes one-drive-cycle MIL illumination with a power-system warning and stores pending, confirmed and freeze-data records in the motor control module. Keep those records and related thermal faults before a reset so that the duration and direction of disagreement are not lost.

An internal temperature-supply prerequisite is not an electrical-safety clearance. Any access to the PCU must follow the required high-voltage isolation and verification steps, even when the reported fault concerns temperature rather than power output.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P1D9D%205572.pdf), PDF pages 1. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
