---
{"entryId": "generic-p2adc", "code": "P2ADC", "title": "P2ADC: A high temperature report from the smart reductant tank sensor", "description": "P2ADC comes from the smart reductant tank temperature sensor’s own range calculation and is transmitted to the controller.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 04B documented monitor only; module and calibration applicability must be matched to the vehicle.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [208]}], "authoringBatch": "batch-16"}
---

# P2ADC: A high temperature report from the smart reductant tank sensor

P2ADC identifies an excessively high temperature report from the reductant tank's UTLC smart sensor in the cited DEFC strategy. The smart sensor performs the range computation and sends an error flag over SENT. The controller is not simply applying an unexplained high-voltage limit to a conventional analogue temperature input.

## What the documented monitor requires

The threshold is a reductant UTLC temperature measurement above 90°C. The row lists two seconds of evaluation with a four-sample, 0.5-second time base. Vehicle power mode must be active, which the document defines to include accessory, run, start request or propulsion modes.

SENT communication faults and internal controller faults inhibit the check. This matters when a high-temperature code appears with communication trouble: establish whether the received sensor information was considered valid before interpreting a displayed temperature as reliable physical evidence.

## Avoid a misleading circuit assumption

The dictionary says circuit high, but the source's failure criterion is reported temperature and an internally generated sensor flag. Neither that wording nor the 90°C threshold identifies a connector pin voltage or establishes that the tank contents truly reached that temperature.

Useful follow-up evidence includes the UTLC temperature, sensor error status and communication health during an active power mode. A one-time plausible temperature after clearing does not verify completion of the sampling decision. The summary provides no connector test or replacement instruction; match the smart-sensor diagnostic procedure to the vehicle before making either conclusion.

## Source and applicability

2025 GM 04B documented monitor only; module and calibration applicability must be matched to the vehicle. [GM PDF, page 208](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=208).
