---
{"entryId": "generic-p2dca", "code": "P2DCA", "title": "P2DCA: A sudden change in measured generator excitation current", "description": "P2DCA compares consecutive excitation-current measurements, making change over time central to its interpretation.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [553]}], "authoringBatch": "batch-16"}
---

# P2DCA: A sudden change in measured generator excitation current

P2DCA is the intermittent excitation-current monitor in this source. Its criterion uses the absolute difference between the current measurement and its previous value. That is a change detector, not a sustained high-current or low-current limit.

## The published number lacks a unit

The row prints a difference greater than 0.4, but does not give the measurement unit or sampling interval. It would be incorrect to call that 0.4 amperes or convert it into a rate per second without additional documentation. The underlying distinction remains clear: both an upward jump and a downward jump can enlarge an absolute difference.

Ignition on and basic enabling conditions are specified, with a two-trip response. No universal observation duration is shown in this row. A stable reading taken after the event therefore cannot reconstruct the two measurements that led to the fault.

## Record a sequence instead of one value

If the diagnostic system exposes appropriate excitation feedback, preserve its history and status together with generator demand. Confirm the parameter scale and update rate before trying to compare a logged change with the undocumented-unit threshold. A generic battery-voltage log is not automatically the same signal.

The table does not prove an intermittent connector, defective rotor or regulator failure. It identifies the controller's change-based concern and the missing information needed for a physical test. Verification requires the correct application monitor and an eligible measurement sequence; code clearing followed by one plausible current value does not demonstrate resolution.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 553](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=553).
