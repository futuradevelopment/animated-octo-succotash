---
{"entryId": "generic-p05dd", "code": "P05DD", "title": "P05DD: GM brake-pedal B signal stuck low", "description": "P05DD requires a low B-channel voltage and absent PWM edges in the cited GM implementation.", "status": "draft", "sourceReview": "checked", "scope": "GM 2018 18OBDG02 Hybrid Diagnostics, BSC2 brake-system monitor table; document-level example only, vehicle/calibration fitment not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [1734]}], "authoringBatch": "batch-35"}
---

# P05DD: GM brake-pedal B signal stuck low

P05DD is brake-pedal position sensor B circuit low in GM's cited BSC2 diagnostic table. The pedal signal in this implementation is pulse-width modulated. The fault is therefore more specific than an ordinary low position reading when the pedal is released.

## Signal activity separates position from circuit failure

The monitor identifies a line below 0.3 V with no rising or falling PWM edge detected. The source associates that stationary low condition with a short to ground. A released brake pedal should still be represented by valid signaling; release is not the same as a signal wire stuck electrically low.

Likewise, the low portion of a normal pulse train is not sufficient evidence for this code. Diagnosis must assess transitions as well as level, using the correct parameter and vehicle-specific test method.

## Do not substitute the neighboring performance diagnosis

P05DC evaluates channel-B range and communication characteristics, while P05DD addresses the low/stationary electrical condition. A different code in the same sensor family can require a different interpretation even though the component name matches.

The table monitors during running or shutdown software states and uses a short qualifying period. It supplies detection logic, not a complete repair tree or universal sensor pinout. Qualified brake-system diagnosis should identify the actual circuit fault and assess any accompanying warnings. After repair, verify valid B-channel pulses and the completed diagnostic, rather than concluding success from an average voltage or an erased code alone.

## Source and applicability

GM 2018 18OBDG02 Hybrid Diagnostics, BSC2 brake-system monitor table; document-level example only, vehicle/calibration fitment not established. The [manufacturer service document](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=1734) is hosted by the manufacturer. Its diagnostic instructions take precedence over a general code dictionary.
