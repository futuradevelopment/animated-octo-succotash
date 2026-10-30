---
{"entryId": "generic-u02bb", "code": "U02BB", "title": "U02BB: the EVAP purge pump loses its LIN response", "description": "Understand U02BB: the evap purge pump loses its lin response, with documented GM monitor criteria and diagnostic limits.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 03A diagnostic parameter document; the cited module and monitor only. Per-code vehicle, engine and calibration applicability is not established.", "sourceIds": ["gm-2025-03a"], "sourcePages": [{"sourceId": "gm-2025-03a", "pages": [738]}], "authoringBatch": "batch-05"}
---

# U02BB: the EVAP purge pump loses its LIN response

U02BB means the ECM is missing the EVAP purge pump's LIN response in this documented implementation. The monitored response is EVAPP_Rsp_01_C05, with an absence criterion of at least 250 milliseconds. That makes this a communication finding, not a measurement of fuel-vapor leakage or purge flow.

## Conditions that make the timeout meaningful

The diagnostic and LIN channel must be enabled, the LIN module initialized and the purge-pump slave configured as present. The row also considers actuator/powertrain-relay state, supply conditions and power-mode transitions. General conditions must be satisfied for at least three seconds.

The communication logic executes in a 500-millisecond loop and lists Type B, two-trip reporting. The 250-millisecond response-age criterion is not a claim that the pump was mechanically stalled for that duration.

## Follow the missing information

Establish whether the purge pump had the intended power and whether its response disappeared alone or alongside other LIN devices. Those observations distinguish a device-specific investigation from a shared communication dependency. They do not identify a failed pump without the applicable service tests.

For verification, confirm that the expected response remains available during an eligible monitor interval. A separate EVAP performance test may be needed for a flow or leak concern, but it cannot substitute for communication verification. Do not infer a fuel-system leak or a guaranteed component replacement from the U-code alone.

## Source and applicability

[GM 03A, PDF page 738](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=738). This explanation covers the documented 2025 monitor. Confirm the vehicle's module, engine and calibration before applying these criteria; the document's vehicle list does not establish this code's applicability to every listed model.
