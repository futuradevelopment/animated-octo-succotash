---
{"entryId": "generic-p0a1a", "code": "P0A1A", "title": "P0A1A: Ford compares generator torque estimates with their commands", "description": "Ford's generator control-module report can arise from a local generator-torque mismatch or a wider total-torque estimate error.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [167, 190]}], "authoringBatch": "batch-42"}
---

# P0A1A: Ford compares generator torque estimates with their commands

A generator control-module code does not automatically mean the module has failed internally. Ford's P0A1A example uses torque-estimate comparisons. The summary gives one condition involving the generator itself and another involving the total torque calculation for the hybrid system.

## Two comparisons can produce the report

The local condition is a difference between generator torque estimate and command above 40 Nm for 550 milliseconds. The second concerns total torque estimation exceeding demand by more than 800 Nm for longer than 500 milliseconds. These are different control relationships, not a single measured shaft-torque limit.

The source describes continuous monitoring and names supporting generator reference, performance, inverter and resolver checks. The validity of those inputs matters before an estimate mismatch is treated as evidence of a particular mechanical or electronic failure.

## Preserve estimated and commanded quantities separately

The word estimate is important. The summary does not claim that a technician has directly measured shaft torque when this code sets. A useful event record distinguishes requested torque, the controller's estimate and the supporting sensor or inverter findings instead of combining them into a generic low-output complaint.

Ford's hybrid architecture places generator and traction-motor control within a coordinated powersplit system. A broader total-torque error can therefore reach this report even though the base title names the generator module. The exact diagnostic procedure is needed to establish which branch applied.

Verification should address the recorded comparison with valid supporting checks and the required high-voltage safeguards. Replacing a module solely from the code name, or clearing the report after a later normal-looking estimate, would go beyond what the monitor evidence establishes.

## Source and applicability

Ford Motor Company, [physical page 167](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=167); [physical page 190](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=190). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
