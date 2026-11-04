---
{"entryId": "generic-p0d0d", "code": "P0D0D", "title": "P0D0D: Ford's positive charge-contactor driver reports overcurrent", "description": "Ford links the positive charging-contactor circuit-high report to a brief driver-overcurrent condition during a close command.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [151, 164]}], "authoringBatch": "batch-42"}
---

# P0D0D: Ford's positive charge-contactor driver reports overcurrent

P0D0D is a circuit-high report for the positive charging contactor in Ford's PHEV example. The manufacturer's stated trigger concerns driver current, not a generic high battery-voltage measurement. Understanding that distinction keeps attention on the correct part of the charging-control sequence.

## The close request is part of the condition

Ford evaluates the condition with charging wake-up active and the positive charge contactor commanded closed. Its listed failure is a positive-contactor driver overcurrent report lasting 0.04 second. That short interval can be significant even when later steady-state readings look ordinary.

The monitor table lists an overall observation below one second, but that is not a replacement for the specific 40 millisecond malfunction duration. Preserving the exact failure condition is more useful than collapsing both numbers into a vague statement that the contactor failed immediately.

## Driver behavior and contact position are different observations

A current-related driver result does not itself establish whether the main contacts opened or closed correctly. Ford uses separate voltage-based checks for contactors inferred to be stuck open or stuck closed. The code set can therefore contain both an electrical-control observation and a switching-state inference without those being redundant findings.

The summary does not provide a universal resistance value, coil pinout or component-replacement instruction for P0D0D. Professional follow-up needs the exact vehicle procedure and the accompanying charge-state information. Correct verification demonstrates that the positive driver operates without its current fault during the permitted sequence and that the related high-voltage system checks are satisfactory. Clearing the code when no charge-close request exists would not exercise the original condition.

## Source and applicability

Ford Motor Company, [physical page 151](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=151); [physical page 164](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=164). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
