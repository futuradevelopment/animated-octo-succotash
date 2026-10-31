---
{"entryId":"generic-p05ae","code":"P05AE","title":"P05AE: shutter B fails commanded-position retries","description":"P05AE is a two-stage performance diagnosis for smart grille shutter actuator 2, corresponding to the B shutter in this table.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[572,573,574]}],"authoringBatch":"batch-06"}
---

# P05AE: shutter B fails commanded-position retries

P05AE is a two-stage performance diagnosis for smart grille shutter actuator 2, corresponding to the B shutter in this table. The first stage looks for an indeterminate response, uninitialized state or position disagreement exceeding 5% after the command delay.

## Retry history separates suspicion from the completed fault

A first-stage failure enables repeated attempts to reach the original requested position. The continuation lists a performance-test count of five and describes one to five actuator cycles, typically 10–25 seconds per cycle. A momentary position mismatch is therefore not the same as the completed retry failure.

The source also lists a diagnostic-delay count above 109 before evaluating the initial discrepancy. The narrative says retries continue until position is achieved or the trip ends.

## Verify communication and initialization context

Relevant gates include actuator initialization, supply conditions and LIN communication readiness, with configuration-dependent handling of communication faults. Run/crank-active operation and an awake key-off command path are both described.

Useful evidence includes the commanded position, actuator response and whether the retry sequence completed. Distinguish a communication or initialization problem from a shutter that reports a consistent position but cannot reach the request. Verification should use the vehicle's actuator procedure and completed result. The source does not prove debris is present, prescribe forced manual movement or establish that the entire shutter assembly requires replacement.

## Source and applicability

2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately. These tables describe detection logic, not a complete repair procedure or a component replacement verdict. [gm-2025-04b, PDF page 572](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=572); [gm-2025-04b, PDF page 573](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=573); [gm-2025-04b, PDF page 574](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=574).
