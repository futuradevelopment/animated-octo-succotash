---
{"entryId": "generic-p07ab", "code": "P07AB", "title": "P07AB: Clutch 5 does not develop the expected release slip", "description": "GM's P07AB monitor detects a clutch that appears to remain applied when the controller expects release-related slip.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG01 diagnostic monitor; document section stated in article; per-vehicle and calibration applicability must be verified.", "sourceIds": ["gm-2018-18obdg01-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg01-hybrid-diagnostics", "pages": [1820]}], "authoringBatch": "batch-36"}
---

# P07AB: Clutch 5 does not develop the expected release slip

P07AB generically means transmission friction element E stuck on. The 2018 GM HPC1 “CT6 Unique” table calls it clutch 5 stuck on and evaluates slip during an offgoing or released state. It is the opposite operating question from a locked clutch slipping excessively.

## Missing slip can be fault evidence

One branch monitors the offgoing state with valid motor-speed information. Another compares actual clutch 5 slip with a desired slip profile when clutch status is released and no shutdown is commanded. The table requires a failure for two seconds in a 2.68-second window and lists Type A, one-trip reporting.

The relevant thresholds in the released-state branch are named calibration functions in supporting tables, not a universal rpm value. They should not be replaced with a guessed number from another transmission.

## Preserve the transition

A steady snapshot taken after the shift can miss the offgoing profile that produced the fault. Record the requested clutch state, actual slip, expected/profiled slip information and motor-speed validity where the diagnostic system provides them.

This result indicates failure to achieve the expected release behavior; it does not identify a mechanical sticking point, hydraulic cause or controller failure from the code alone. A qualified transmission technician should use the correct application procedure. Repair verification must address the release transition safely under the prescribed conditions, rather than relying only on a cleared historical code or an ordinary parked observation.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 1820](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG01%20Hybrid%20Diagnostics.pdf#page=1820).
