---
{"entryId": "generic-p0cec", "code": "P0CEC", "title": "P0CEC: Electronics coolant-pump control reads high", "description": "GM's P0CEC monitor checks for high control voltage while the electronics coolant pump is enabled within a low PWM duty range.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [945]}], "authoringBatch": "batch-36"}
---

# P0CEC: Electronics coolant-pump control reads high

P0CEC identifies hybrid/EV electronics coolant pump A control circuit high. The 2018 GM table characterizes the monitored response as a short to power on the output control circuit.

## The narrow command window is significant

For this implementation, the control voltage must be above 9 V to fail. The pump is enabled, system voltage is above 10.2 V, and control PWM duty lies strictly between zero and 10 percent. Sixteen failed samples among 20 at 250-millisecond intervals satisfy the listed five-second evaluation. GM gives Type B, two-trip reporting.

This is a command-dependent electrical test. A high reading obtained with a substantially different PWM request does not, on its own, reproduce P0CEC. Nor does the monitor measure coolant flow or determine whether the pump impeller is obstructed.

## Preserve control and enable as separate observations

The table distinguishes the pump's enable state from its PWM control request. Retaining both in a diagnostic record helps avoid confusing an enable-circuit problem with this control-output fault. Compare any companion cooling codes against their own measured quantities before assigning a common cause.

After the relevant circuit repair, confirmation should show acceptable feedback in the documented command window and completion of the applicable cooling-system checks. A normal coolant temperature at idle is insufficient proof that this electrical test passed. Use the vehicle-specific circuit information and qualified hybrid-system service; the table supplies neither physical pin locations nor instructions to energize the pump externally.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 945](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=945).
