---
{"entryId": "generic-p05df", "code": "P05DF", "title": "P05DF: GM brake-pedal B signal changes implausibly fast", "description": "P05DF evaluates an excessive negative rate of change, rather than limiting how quickly the driver applies the brake.", "status": "draft", "sourceReview": "checked", "scope": "GM 2018 18OBDG02 Hybrid Diagnostics, BSC2 brake-system monitor table; document-level example only, vehicle/calibration fitment not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [1733]}], "authoringBatch": "batch-35"}
---

# P05DF: GM brake-pedal B signal changes implausibly fast

GM's cited BSC2 monitor defines P05DF as brake-pedal position sensor B circuit intermittent/erratic. Its detailed test concerns the direction and speed of a change in measured pedal travel.

## The monitor checks the returning direction

The table evaluates a negative gradient below −2,000 mm per second for a short qualifying interval. Its explanation explicitly limits the rate check to the backward direction because a universal maximum for how rapidly a driver can press the pedal is not defined.

That distinction matters when investigating a sudden signal step. The code does not simply mean the driver braked too quickly. It reports a change in the monitored direction that the controller considers implausible for the mechanical system.

## A smooth average reading can conceal the event

A transient jump may be missed by a slow display or a single stationary value. Preserve the fault timing and related channel data, then use the correct vehicle procedure to assess signal continuity and mechanical plausibility. The monitor summary does not independently identify a connector, sensor or control module as the failed part.

The source permits this check in running or shutdown software states and classifies it as a one-trip fault. Channel B must remain distinct from the other pedal signal and from a correlation check between them.

Brake-pedal faults warrant qualified service, especially with warning lamps or changed pedal behavior. Repair confirmation should show a credible B-channel travel trajectory without the original implausible return step, not merely a code cleared from memory.

## Source and applicability

GM 2018 18OBDG02 Hybrid Diagnostics, BSC2 brake-system monitor table; document-level example only, vehicle/calibration fitment not established. The [manufacturer service document](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=1733) is hosted by the manufacturer. Its diagnostic instructions take precedence over a general code dictionary.
