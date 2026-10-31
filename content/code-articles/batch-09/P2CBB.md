---
{"entryId": "generic-p2cbb", "code": "P2CBB", "title": "P2CBB: fan 3 underspeed is a model-based performance result", "description": "P2CBB compares fan 3 speed with a qualified modeled target rather than a fixed universal rpm.", "status": "draft", "sourceReview": "checked", "scope": "Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [882, 883]}], "authoringBatch": "batch-09"}
---

# P2CBB: fan 3 underspeed is a model-based performance result

P2CBB evaluates cooling fan 3 for underperformance. Its expected speed is built from the fan request with startup, transport and ramp delays, rate limiting and voltage compensation. Actual speed must remain within a calibrated low-side margin of that expectation.

## Fan 3 has its own qualifications

The table requires fan speed at least 875 rpm, fan command on and battery voltage within range. It also requires LIN-based operation enabled and excludes fan-3 communication code U067C, continuous-operation code P135E and speed range codes P30F3/P30F2. These exclusions prevent a missing or invalid speed signal from being treated as an ordinary performance shortfall.

Confirmation uses 16 failed observations out of 20 one-second samples. The continuation explains that the controller can hold the fan commanded on after initial diagnostic activation to give the monitor time to reach a decision.

## Useful comparisons

Review measured speed against the modeled or applicable calibrated expectation after permitted response delays. A brief lag immediately after a command increase is not the same evidence as a persistent deficit once the expected response has settled. Do not borrow fan 2's minimum-speed qualification merely because its monitor has a similar name.

Verification needs a valid fan-3 feedback signal and completion of this comparison while its prerequisites are met. The source does not specify a universal fan speed for every command percentage, or prove whether an underspeed event originates in motor drive, electrical supply or another part of the fan system.

## Source and applicability

Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately. [GM monitor table, PDF page 882](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=882); [GM monitor table, PDF page 883](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=883).
