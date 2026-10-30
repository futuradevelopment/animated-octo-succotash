---
{"entryId": "generic-p2add", "code": "P2ADD", "title": "P2ADD: Erratic reductant temperature measured over a moving window", "description": "P2ADD evaluates accumulated temperature changes, so a plausible final reading can still follow a failed sensor-stability test.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 04B documented monitor only; module and calibration applicability must be matched to the vehicle.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [208]}], "authoringBatch": "batch-16"}
---

# P2ADD: Erratic reductant temperature measured over a moving window

The P2ADD strategy looks for erratic behaviour in the UTLC secondary temperature signal. Its calculation uses the sum of absolute temperature changes across a moving window. It therefore measures how much the signal has moved, not merely the difference between its first and last readings.

## Why a small net change can still matter

The source lists a string-length threshold above 6°C per moving window. The window contains 14 samples, taken at 1.3-second intervals. A signal that repeatedly rises and falls can accumulate substantial absolute change while returning close to its starting temperature. That is why a stable-looking final scan-tool reading can miss the behaviour that triggered this monitor.

The power mode must be active. P2ADB and P2ADC range faults, SENT communication faults and internal controller faults are listed as inhibitors, separating this stability check from a signal already judged outside its basic range.

## Capture the history, not one value

A useful record retains the temperature sequence and diagnostic status at a sufficient sampling rate. Compare oscillation or sudden reversals with the window-based calculation instead of evaluating only the latest temperature. This is an interpretation of the published metric, not a prescribed substitute for the manufacturer's diagnostic routine.

The row also describes a one-failure-out-of-three-samples confirmation arrangement; its interaction with the moving window is not fully explained in this summary. Do not invent a total test duration from those numbers. Confirmation and physical sensor testing require the application-specific procedure and an eligible monitor evaluation.

## Source and applicability

2025 GM 04B documented monitor only; module and calibration applicability must be matched to the vehicle. [GM PDF, page 208](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=208).
