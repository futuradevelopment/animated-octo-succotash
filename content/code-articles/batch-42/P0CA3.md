---
{"entryId": "generic-p0ca3", "code": "P0CA3", "title": "P0CA3: Ford's step-up converter performance code has several failure paths", "description": "Ford's P0CA3 example can arise from sensing, current, voltage-protection or switching-related observations in the variable-voltage controller.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [180]}], "authoringBatch": "batch-42"}
---

# P0CA3: Ford's step-up converter performance code has several failure paths

Ford's P0CA3 monitor assesses step-up DC/DC converter performance within the hybrid power electronics. The source does not reduce this code to one failed voltage value. It lists several distinct observations that can cause the controller to report the same performance category.

## Identify which branch supplied the evidence

The alternatives include an input-voltage sensor signal below 0.235 volt for 10 milliseconds, current above 300 amps for one second, or torque derating for voltage protection greater than 50 percent for one second. Ford also lists a voltage difference across the converter above 30 volts for 100 milliseconds during self-test, and an upper-switch hardware failure persisting beyond 200 microseconds.

Those conditions measure different things. A small sensor-signal voltage is not the same quantity as high-voltage bus voltage, and a protective torque reduction is not a direct current measurement. Treating all of them as a single converter output-voltage threshold would lose the diagnostic distinction.

## Performance does not select one replacement component

The check operates with the source's stated power-up and low-voltage conditions and named supporting supply/voltage checks. A useful service record includes the relevant internal or subtype evidence rather than only the base P0CA3 label. The summary does not establish which of its alternative paths occurred on a particular vehicle.

Professional follow-up needs the exact vehicle's high-voltage procedure and the associated controller findings. The listed values are monitoring facts, not directions to force a fault or probe internal switches. Verification should address the branch that actually failed and confirm appropriate converter operation. A cleared code, normal later voltage or restored torque alone does not demonstrate that every possible performance path has been resolved.

## Source and applicability

Ford Motor Company, [physical page 180](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=180). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
