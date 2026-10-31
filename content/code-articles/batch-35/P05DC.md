---
{"entryId": "generic-p05dc", "code": "P05DC", "title": "P05DC: GM brake-pedal B range and PWM performance", "description": "P05DC covers travel values and the frequency or duty cycle of the brake-pedal B signal.", "status": "draft", "sourceReview": "checked", "scope": "GM 2018 18OBDG02 Hybrid Diagnostics, BSC2 brake-system monitor table; document-level example only, vehicle/calibration fitment not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [1734]}], "authoringBatch": "batch-35"}
---

# P05DC: GM brake-pedal B range and PWM performance

GM's cited BSC2 table defines P05DC as brake-pedal position sensor B circuit range/performance. Several monitor branches share this code, so its title does not identify one single electrical failure mode.

## Position range and signal format are separate checks

One branch evaluates whether reported travel falls outside the documented physical range, above 47 mm or below −0.5 mm. Another checks the pulse-width-modulated signal's frequency and duty cycle against permitted limits. The source describes a nominal 1 kHz sensor module.

A signal can therefore fail because its decoded position is implausible or because its timing format is unacceptable. Seeing a changing voltage is not proof that either check passes. Conversely, a plausible displayed travel value may not reveal brief communication-format errors.

## Confirm the affected channel and branch

This code concerns channel B. The adjacent A-channel procedure and an A/B correlation fault are related but do not establish the same evidence. A scan record showing companion faults and operating state can help determine which diagnostic path the actual service procedure requires.

The source contains a copied reference to sensor A inside its B-channel duty-cycle description; this article follows the P05DC heading and explicit B-signal criteria without transferring that inconsistent label into a pin-level instruction.

Monitoring can occur in running or shutdown software states. Brake-system testing requires appropriate professional methods. After the established repair, verify both credible travel and valid B-channel signaling as applicable, rather than relying on a stationary pedal reading or cleared memory.

## Source and applicability

GM 2018 18OBDG02 Hybrid Diagnostics, BSC2 brake-system monitor table; document-level example only, vehicle/calibration fitment not established. The [manufacturer service document](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=1734) is hosted by the manufacturer. Its diagnostic instructions take precedence over a general code dictionary.
