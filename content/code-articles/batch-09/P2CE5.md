---
{"entryId": "generic-p2ce5", "code": "P2CE5", "title": "P2CE5: downstream filter pressure offset checked with no exhaust flow", "description": "P2CE5 checks downstream particulate-filter pressure sensor offset under a qualified no-flow condition.", "status": "draft", "sourceReview": "checked", "scope": "Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [884]}], "authoringBatch": "batch-09"}
---

# P2CE5: downstream filter pressure offset checked with no exhaust flow

The generic P2CE5 title says particulate-filter pressure sensor C circuit. In the cited GM row, its actual mechanism is downstream relative-pressure offset rationality. With the engine not running and no exhaust flow, the expected pressure is zero; the controller checks whether the learned offset remains within specification.

## A zero-pressure check is not a blockage test

The listed comparison is an absolute difference between the learned offset and a nominal value of 22.79 on the source's raw scale. A deviation above 2.20% fails. Those are signal/offset quantities, not a statement that exhaust pressure should equal 22.79 kPa.

The offset learn must be complete, the pipe-temperature model must permit evaluation and the offset report must not already be done. Electrical, quick-change, temperature and engine-not-running timer faults can inhibit the test. No debounce is listed once the qualified result is available.

## Why the operating state matters

An offset evaluated while real exhaust flow exists would mix sensor baseline with actual pressure. Preserve engine-state and offset-learning information before interpreting the stored result. A credible running pressure response does not automatically prove the zero-flow baseline is correct.

Verification requires a completed qualifying offset learn and an acceptable learned value. The code does not establish that the particulate filter is clogged or specify sensor replacement. Use the exact calibration's interpretation of the raw scale and learning procedure rather than transferring these numbers to an unrelated pressure sensor.

## Source and applicability

Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately. [GM monitor table, PDF page 884](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=884).
