---
{"entryId": "generic-p0ae5", "code": "P0AE5", "title": "P0AE5: Ford compares pack voltage with the precharge-contactor voltage sum", "description": "Ford's precharge-control performance monitor detects a short-lived discrepancy between battery-pack voltage and combined contactor-voltage information.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [162]}], "authoringBatch": "batch-42"}
---

# P0AE5: Ford compares pack voltage with the precharge-contactor voltage sum

Ford's P0AE5 monitor evaluates a voltage relationship during a precharge-contactor close command. It compares pack voltage with the sum of the contactor-voltage measurements. The result is a consistency check within the precharge sequence, rather than a generic declaration that battery voltage is too high.

## A relative difference is the relevant quantity

The source specifies an absolute difference above 20 volts for 0.04 second. Because the comparison is absolute, the pack measurement can be either higher or lower than the summed contactor measurements. Reducing the code to a one-direction voltage error would change the manufacturer's stated condition.

The 40 millisecond criterion also explains why a later static reading can miss the recorded event. The fault is tied to a commanded switching stage and its voltage relationships, not to an arbitrary measurement taken after the sequence has ended.

## Check measurement validity and the sequence together

Ford's neighboring precharge diagnostics evaluate battery current and driver current-limiting behavior separately. Those observations can add context, but P0AE5 itself does not establish which voltage input or physical switching component caused the discrepancy. Sensor and contactor findings need to remain distinguishable in the diagnostic record.

The summary provides no safe internal test points or instruction to force the precharge path on. Professional follow-up needs the applicable battery procedure, valid voltage information and the requested contactor state. Verification should demonstrate the correct relationship during the permitted precharge check and complete the associated high-voltage assessment. A plausible total pack voltage or a fault-memory clear alone cannot show that the timed comparison has subsequently passed.

## Source and applicability

Ford Motor Company, [physical page 162](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=162). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
