---
{"entryId": "generic-p05de", "code": "P05DE", "title": "P05DE: GM brake-pedal signal B stuck high", "description": "P05DE detects a high B-channel level together with missing PWM transitions.", "status": "draft", "sourceReview": "checked", "scope": "GM 2018 18OBDG02 Hybrid Diagnostics, BSC2 brake-system monitor table; document-level example only, vehicle/calibration fitment not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [1733]}], "authoringBatch": "batch-35"}
---

# P05DE: GM brake-pedal signal B stuck high

P05DE is brake-pedal position sensor B circuit high in GM's cited BSC2 table. This implementation uses a pulse-width-modulated signal, so the diagnostic evidence includes both voltage level and whether the signal continues to switch.

## High level alone is not the whole criterion

The monitor looks for the B signal line above 4.7 V with no rising or falling PWM edge detected. Its description associates this stationary high state with a short toward the supply. A normal PWM waveform naturally has high portions; the missing transitions distinguish a stuck-high condition from ordinary signaling.

This is why a single voltmeter reading may not describe the full problem. The correct procedure must evaluate signal behavior as well as level, with instrumentation and connection methods appropriate to the actual brake system.

## Preserve the B-channel identity

The code specifically concerns channel B. A normal channel-A reading does not demonstrate that B has valid transitions, and an A/B correlation fault asks a different question from this circuit-high monitor. Retain related codes because they may show whether one channel or a shared element is affected.

The table allows monitoring during running or shutdown software states and gives a brief qualifying interval. It does not establish universal model fitment or prove that the pedal assembly must be replaced. Brake warnings require qualified assessment. After the established repair, verify valid B-channel switching and the relevant diagnostic result; simply seeing a lower average voltage is not equivalent to restored PWM communication.

## Source and applicability

GM 2018 18OBDG02 Hybrid Diagnostics, BSC2 brake-system monitor table; document-level example only, vehicle/calibration fitment not established. The [manufacturer service document](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=1733) is hosted by the manufacturer. Its diagnostic instructions take precedence over a general code dictionary.
