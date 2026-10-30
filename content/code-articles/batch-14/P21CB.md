---
{"entryId": "generic-p21cb", "code": "P21CB", "title": "P21CB: Comparing the reductant controller supply with reported vehicle voltage", "description": "Learn how P21CB detects a local supply shortfall relative to a network reference instead of one universal battery-voltage limit.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 25OBDG04B DEFC monitor calibration only; this document does not establish applicability to every model, engine or reductant system.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [202]}], "authoringBatch": "batch-14"}
---

# P21CB: Comparing the reductant controller supply with reported vehicle voltage

P21CB evaluates the reductant controller's permanent power supply against a vehicle-system voltage received over serial data. The documented GM strategy is a comparison between two observations, rather than a simple absolute low-battery threshold.

## The difference is the important quantity

The criterion is the network-reported CGM voltage minus the reductant permanent supply exceeding 3 V. The table specifies a three-second failure accumulation on a 0.01-second sampling basis and excludes engine cranking from this comparison.

A battery voltage that appears acceptable at one location does not automatically establish that the reductant controller receives an equivalent supply. Conversely, the comparison depends on a trustworthy remote voltage reference as well as the local measurement.

## Interpret both readings at the same operating point

Useful evidence includes both voltage values, cranking state and communication health. Comparing readings captured at different times or under different loads could create an apparent difference that the controller never evaluated simultaneously.

The source lists a powertrain-relay voltage validity mask and communication conditions, but its wording around the CAN fault line is incomplete. This article therefore does not prescribe an exact communication enable rule from that line. The supported conclusion is a relative supply discrepancy during eligible operation. The code alone cannot distinguish a real supply-path drop from an unreliable measurement or reference. The actual wiring and module data definitions are needed before assigning a failed component.

## Source and scope

2025 GM 25OBDG04B DEFC monitor calibration only; this document does not establish applicability to every model, engine or reductant system. These are documented monitor criteria, not a universal repair procedure. [GM PDF, physical page 202](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=202).
