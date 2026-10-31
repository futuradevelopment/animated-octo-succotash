---
{"entryId":"generic-p25cd","code":"P25CD","title":"P25CD: Bank 2 camshaft park-lock circuit is classified open","description":"Learn how GM distinguishes a Bank 2 park-lock actuator open-circuit fault from position error and other electrical fault branches.","status":"draft","sourceReview":"needs-review","scope":"GM 2020 20OBDG07 ECM Summary Tables, electronic intake-camshaft park-lock actuator monitor. The source establishes bank and driver-state logic but does not establish model fitment or a complete external resistance-test specification.","sourceIds":["gm-2020-20obdg07-diagnostics"],"sourcePages":[{"sourceId":"gm-2020-20obdg07-diagnostics","pages":[453,454,571]}],"authoringBatch":"batch-29"}
---

# P25CD: Bank 2 camshaft park-lock circuit is classified open

P25CD is the open-circuit branch for the Bank 2 intake-camshaft park-lock actuator in the cited GM implementation. The monitored hardware is an electronic locking-pin actuator controlled by a low-side driver. The controller classifies a low voltage during the driver's off state as the open-circuit observation for this branch.

## Do not substitute a camshaft-position diagnosis

An open actuator circuit and a camshaft that fails to reach its locking position are different findings. The source separately lists a Bank 2 locking-position offset check. P25CD itself does not measure an angular error or establish that the mechanical pin is jammed.

The neighboring P25CE entry also describes low voltage with the driver off, but classifies a short toward ground. That overlap is a reason to preserve the controller's exact fault classification and use the vehicle-specific electrical procedure. One low scan-tool or meter reading cannot independently distinguish every branch summarized in the table.

## Recheck under qualified operating conditions

The P25CD entry requires one second of continuous failure, ECU drive state, engine speed at least 80 rpm and battery voltage between 10.9 V and 25.5 V. Its basic enable table also excludes starting mode and battery-saver operation. Illumination uses two trips.

The published open-circuit threshold notation is incomplete as an external service specification, so no connector resistance limit is inferred here. Verification should confirm continuity according to the applicable wiring procedure and a completed monitor result. The code alone does not identify the failed connector, wire or actuator winding, or justify replacing mechanical timing components.

## Source and applicability

GM 2020 20OBDG07 ECM Summary Tables, electronic intake-camshaft park-lock actuator monitor. The source establishes bank and driver-state logic but does not establish model fitment or a complete external resistance-test specification.

[General Motors source, physical page 453](https://gsi.ext.gm.com/gmspo/mode6/pdf/2020/20OBDG07%20Diagnostics.pdf#page=453) · [General Motors source, physical page 454](https://gsi.ext.gm.com/gmspo/mode6/pdf/2020/20OBDG07%20Diagnostics.pdf#page=454) · [General Motors source, physical page 571](https://gsi.ext.gm.com/gmspo/mode6/pdf/2020/20OBDG07%20Diagnostics.pdf#page=571)
