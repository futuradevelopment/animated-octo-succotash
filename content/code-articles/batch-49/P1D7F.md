---
{"entryId": "honda-p1d7f", "code": "P1D7F", "title": "P1D7F: Generator inverter protection reports do not match", "description": "Honda P1D7F checks consistency between the generator-side gate-driver fault signals and the PDU's internally communicated GEN FO information.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1d7f-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1d7f-factory", "pages": [1, 2]}], "authoringBatch": "batch-49"}
---

# P1D7F: Generator inverter protection reports do not match

## Two reporting routes describe the same protection event

Honda P1D7F checks consistency between the generator-side gate-driver fault signals and the PDU's internally communicated GEN FO information. One branch concerns an SC overcurrent-protection signal; the other concerns the F15V gate-drive power-supply fault signal. In either branch, a fault signal disagrees with a normal GEN FO report for at least 90 milliseconds.

The source explains that the protection logic blocks gate drive when it detects the relevant problem. The diagnostic issue here is the mismatch between reports, rather than a simple declaration that normal generator output current is high. The stated 12-volt supply prerequisite is at least 8 V.

## Preserve which protection branch was involved

The factory list identifies internal PCU failure. It supplies no supported instruction to bypass the gate-blocking response or manipulate the SC or F15V signals. Those are internal protection paths, and defeating them would remove information and protection needed for safe control.

Keep freeze data and companion generator, supply and internal-communication records so the correct Honda diagnostic sequence can distinguish the involved branch. This is a one-drive-cycle MIL fault with a power-system indication and pending and confirmed storage.

The excerpt is a monitor explanation, not a live inverter test procedure. A qualified hybrid technician must follow the prescribed isolation and verification steps before any PCU access; the small timing value does not justify attempting to reproduce the fault with energized hardware.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P1D7F%205561.pdf), PDF pages 1, 2. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
