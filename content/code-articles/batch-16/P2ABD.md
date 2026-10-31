---
{"entryId": "generic-p2abd", "code": "P2ABD", "title": "P2ABD: Wastegate bank 1 driver protection from current or heat", "description": "P2ABD has distinct overcurrent and overtemperature paths in the wastegate H-bridge driver, with different qualification times.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [859]}], "authoringBatch": "batch-16"}
---

# P2ABD: Wastegate bank 1 driver protection from current or heat

P2ABD combines two protection reports from the H-bridge driver controlling wastegate bank 1. The controller can record this code when the driver reports excessive current or excessive internal temperature. The code name does not reveal which of those two paths produced the event.

## Current and temperature are separate decisions

For the current-limitation path, the source requires the power stage to be actuated and lists 1,500 milliseconds. Open-load diagnosis and the overload plausibility test must not be active. The battery-voltage prerequisite is above 10,900 mV.

The internal-overtemperature path uses the driver's temperature-error report and a 1,000-millisecond qualification. It also excludes active open-load diagnosis and requires the stated battery condition. Both entries refer to additional diagnostic inhibitors and a two-trip response.

## Why the distinction changes the investigation

If enhanced diagnostic data exposes the protection reason, preserve it before disturbing the system. A current-limitation event during a command and a temperature report are different observations; neither alone identifies a failed motor or proves the actuator is mechanically jammed. The source provides no measured current or temperature threshold to substitute for the driver's own status.

Verification should show that the relevant protection report remains absent during an eligible operating event. Testing only with no actuator demand would fail to exercise the current branch's stated condition. Use the application procedure for commanded tests and electrical access, because this summary does not supply safe probing instructions or replacement criteria.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 859](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=859).
