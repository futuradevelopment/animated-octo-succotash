---
{"entryId": "generic-p24bb", "code": "P24BB", "title": "P24BB: Leak-detection pressure sensor voltage exceeds its upper boundary", "description": "P24BB identifies an out-of-range high signal from the EVAP leak-detection pressure sensor in the reviewed GM system.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 25OBDG03A diagnostic monitor only; exact vehicle, engine and calibration applicability is not established.", "sourceIds": ["gm-2025-03a"], "sourcePages": [{"sourceId": "gm-2025-03a", "pages": [657]}], "authoringBatch": "batch-04"}
---

# P24BB: Leak-detection pressure sensor voltage exceeds its upper boundary

P24BB identifies an out-of-range high signal from the EVAP leak-detection pressure sensor in the reviewed GM system. The monitor evaluates raw sensor voltage; it does not independently prove actual excessive fuel-tank pressure.

## Interpret voltage and pressure carefully

The failure threshold is above 4.85 V, or 97% of reference voltage. The table gives an approximate pressure equivalent of 120 kPa for this sensor's scaling. That conversion should not be applied to a different sensor or treated as a universal tank-pressure limit.

An electrical high signal can make a converted pressure value look high even before its physical accuracy is established. Keeping raw voltage and interpreted pressure separate avoids treating the scan tool's conversion as independent confirmation.

## Sampling while the controller is awake

The diagnostic operates continuously whenever the controller is awake, provided the EVAP sensor communication fault is absent. It needs 640 failures out of 800 samples at 12.5-millisecond intervals.

This circuit monitor is therefore distinct from an overnight or long-soak EVAP performance sequence. A short valid evaluation may address its electrical criterion, while an apparently normal single snapshot may miss intermittent behavior.

Use the applicable pressure-sensor circuit procedure to investigate the signal, supply and reporting path. Verification should demonstrate an in-range raw signal through a completed monitor without recurrence. The source documents Type B, two-trip behavior but does not locate a failed component, identify a specific short or prescribe pump assembly replacement.

## Source and applicability

Confirm the reporting module, system and calibration before applying these diagnostic limits. [GM diagnostic table, PDF page 657](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=657).
