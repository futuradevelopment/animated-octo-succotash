---
{"entryId": "generic-p2ce7", "code": "P2CE7", "title": "P2CE7: downstream pressure raw signal below its electrical range", "description": "P2CE7 detects an excessively low downstream particulate-filter pressure sensor signal.", "status": "draft", "sourceReview": "checked", "scope": "Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [886]}], "authoringBatch": "batch-09"}
---

# P2CE7: downstream pressure raw signal below its electrical range

P2CE7 is an electrical low-range diagnosis for the downstream relative-pressure sensor. The controller compares its raw signal with the sensor's low clamp specification. The cited table associates a raw value below 0.02% with a short-to-ground classification.

## Signal range and exhaust pressure are different

The threshold is expressed on the raw signal scale. It is not an exhaust-pressure limit of 0.02 kPa and does not establish that pressure in the exhaust is abnormally low. A genuine no-flow condition should still produce a valid sensor baseline rather than automatically become an electrical range failure.

Confirmation requires 158 failed observations out of 200 samples at a 12.5-millisecond task rate. The monitor needs active run/crank supply and ignition within range, but the engine itself must not be in the cranking phase. Diagnostic reset must also be inactive.

## Use the correct fault classification

Review the raw channel and supply qualifications before drawing conclusions from a converted pressure display. A scan tool may show a substituted pressure when the electrical input is invalid. The ground-short classification guides the electrical investigation but does not identify the exact damaged wire, connector or sensor element.

Verification requires an in-range raw signal and completion of the electrical monitor under its enable conditions. Pressure-response and offset checks may be needed separately if the signal returns to range but remains implausible. The table does not support condemning a particulate filter from P2CE7 alone.

## Source and applicability

Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately. [GM monitor table, PDF page 886](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=886).
