---
{"entryId": "generic-p0d1d", "code": "P0D1D", "title": "P0D1D: MX-30 expansion-valve driver AML error", "description": "The BECM uses eight consecutive AML diagnostic-bit errors; the source does not publish a valve-pin low-voltage threshold.", "status": "draft", "sourceReview": "needs-review", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0D1D:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300201011700"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300201011700", "locator": "id300201011700; DTC P0D1D:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0D1D: MX-30 expansion-valve driver AML error

The generic P0D1D title says battery coolant-control valve B circuit low. Mazda's MX-30 electric implementation describes a diagnosis-resistor error reported by the AML bit in the electric expansion-valve driver integrated circuit. The BECM requires eight consecutive detections. The page does not specify a low voltage at an external valve pin.

## Interpreting the AML driver report

This distinction limits what can be inferred. The article explains the documented battery cooling monitor, but the generic valve-B wording is not enough to identify an external coolant hose valve or a connector terminal. The source's possible-cause section points to internal high-voltage-battery parts. A separate physical mapping would require the applicable complete service information.

The persistence requirement is a count. Without the sampling period, eight detections cannot be restated as a time in seconds. Unlike another related chart, this page does not state an auxiliary-battery voltage prerequisite, so one should not be imported merely because the procedures are adjacent.

Mazda preserves the snapshot and evaluates recurrence using the diagnostic tool's commanded battery expansion-valve operation. If the same pending fault returns, CAN communication is assessed before the internal battery assembly branch. The final scan addresses other DTCs. This establishes a controlled diagnostic response rather than a direct instruction to replace an externally accessible valve.

Useful evidence includes the exact AML-related DTC, any other battery cooling faults, and the outcome of the supervised command test. Directly powering the valve, probing internal driver circuitry, or opening the battery enclosure is outside owner-level diagnosis. Qualified EV personnel must apply the complete high-voltage service procedure.

## Source and applicability

[Mazda factory procedure, P0D1D](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300201011700.html). id300201011700; DTC P0D1D:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0D1D:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
