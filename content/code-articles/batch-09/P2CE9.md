---
{"entryId": "generic-p2ce9", "code": "P2CE9", "title": "P2CE9: excessive jumps between downstream pressure samples", "description": "P2CE9 detects unusually large changes between consecutive downstream particulate-filter pressure signal samples.", "status": "draft", "sourceReview": "checked", "scope": "Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [888]}], "authoringBatch": "batch-09"}
---

# P2CE9: excessive jumps between downstream pressure samples

P2CE9 evaluates the smoothness of the downstream relative-pressure sensor's raw signal. The documented monitor compares consecutive samples and flags a difference above 20%. It is a quick-change diagnosis, distinct from simply exceeding an absolute low or high signal limit.

## Repeated jumps matter

The decision requires 99 failed observations out of 200 samples, evaluated at a 12.5-millisecond task interval. An isolated graph spike is therefore not the full published decision rule. Electrical out-of-range conditions and communication loss, where a digital sensor is used, must not be active.

The monitor runs outside cranking with qualified run/crank supply, ignition in range and no diagnostic reset. These exclusions matter when a trace includes startup transitions or invalid data replacement: those periods are not automatically equivalent to the enabled quick-change comparison.

## Preserve the raw time relationship

Review consecutive raw samples, their timing and communication validity. A slowly changing pressure that eventually reaches a high value is a different event from repeated abrupt sample-to-sample jumps. A heavily averaged scan-tool display may hide the variation that the controller evaluates.

The source does not establish whether a jump originates in the sensor, the pressure path or an electrical disturbance. Verification requires a credible signal without excessive successive-sample changes while the quick-change monitor is active. Passing an absolute range check alone does not demonstrate that this intermittent behavior has been resolved.

## Source and applicability

Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately. [GM monitor table, PDF page 888](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=888).
