---
{"entryId": "generic-p2c1f", "code": "P2C1F", "title": "P2C1F: rail pressure falls short during catalyst warm-up", "description": "Understand P2C1F: rail pressure falls short during catalyst warm-up, with documented GM monitor criteria and diagnostic limits.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 03A diagnostic parameter document; the cited module and monitor only. Per-code vehicle, engine and calibration applicability is not established.", "sourceIds": ["gm-2025-03a"], "sourcePages": [{"sourceId": "gm-2025-03a", "pages": [687, 688]}], "authoringBatch": "batch-05"}
---

# P2C1F: rail pressure falls short during catalyst warm-up

P2C1F describes measured fuel-rail pressure remaining below the controller's target during catalyst warm-up. GM defines the relevant error as desired pressure minus measured pressure. A positive error is therefore the important direction, rather than an absolute rail-pressure number considered without its target.

## What the monitor establishes

In this ECM section, failure must accumulate for 10 seconds in a 12.5-second sample window. The row specifies Type A, one-trip reporting. Its pressure-error limit points to supporting calibration tables; the extracted row does not justify quoting one universal pressure difference.

Monitoring requires at least 11 V, low-side pressure above 0.275 MPa, an enabled high-pressure pump and catalyst warm-up, and a non-cranking engine. Several pressure-sensor, pump-circuit and timing-input faults prevent the intended evaluation.

## Evidence worth keeping

Capture desired and measured pressure at the same time as the warm-up status. A lower pressure after the commanded target has also fallen is different evidence from failure to follow an unchanged target. Check whether the low-side supply met the monitor's prerequisite; passing that gate does not prove the entire fuel system healthy.

The useful verification is a completed eligible warm-up evaluation with pressure tracking restored. Merely clearing the code or observing normal hot idle does not demonstrate that. Use professional, vehicle-specific methods for high-pressure fuel testing; the diagnostic summary does not identify a failed replacement part.

## Source and applicability

[GM 03A, PDF page 687](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=687); [GM 03A, PDF page 688](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=688). This explanation covers the documented 2025 monitor. Confirm the vehicle's module, engine and calibration before applying these criteria; the document's vehicle list does not establish this code's applicability to every listed model.
