---
{"entryId":"generic-p22fa","code":"P22FA","title":"P22FA: upstream NOx response is evaluated during a fuel-cut transition","description":"GM P22FA evaluates a slow high-to-low upstream NOx response during a qualified change from fueling to deceleration fuel cutoff.","status":"draft","sourceReview":"checked","scope":"GM 2015 15OBDG04 Engine Diagnostics, cited upstream NOx high-to-low response monitor only. Document-level evidence does not establish per-code vehicle, engine or wiring applicability.","sourceIds":["gm-2015-15obdg04-engine-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg04-engine-diagnostics","pages":[233,234]}],"authoringBatch":"batch-29"}
---

# P22FA: upstream NOx response is evaluated during a fuel-cut transition

P22FA concerns the upstream NOx sensor's high-to-low dynamic response in this GM diesel example. It is a response-time diagnostic, not simply a statement that the measured NOx concentration is above an emissions limit or that the reductant fluid is defective.

## The transition supplies the test event

The source describes a qualified change from fueling to deceleration fuel cutoff. It evaluates response time between specified fractions of the initial NOx value and also checks whether the signal remains above 60 percent of that initial value for at least four seconds.

The printed response-time boundary is 1.8 seconds. The monitor includes initial concentration and operating-state qualifications, and requires more than two fault events. A single stationary concentration reading therefore cannot reproduce the dynamic response evidence behind the code.

## Preserve the baseline and time trace

A technician should retain the initial NOx value, the falling signal and the fueling-to-cutoff transition. Without the baseline, percentage-of-initial-value criteria lose their meaning. Likewise, a sensor can give a plausible steady reading while responding too slowly to a qualified change.

The parameter table does not identify a failed sensing element, heater or communication path from this code alone. It provides no universal sensor replacement instruction or road-test method. Use the matching engine diagnostic procedure to establish the cause and verify response under controlled qualifying conditions. Do not force an improvised driving maneuver merely to reproduce the named transition.

## Source and applicability

GM 2015 15OBDG04 Engine Diagnostics, cited upstream NOx high-to-low response monitor only. Document-level evidence does not establish per-code vehicle, engine or wiring applicability.

[General Motors source, physical page 233](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG04%20Engine%20Diagnostics.pdf#page=233) · [General Motors source, physical page 234](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG04%20Engine%20Diagnostics.pdf#page=234)
