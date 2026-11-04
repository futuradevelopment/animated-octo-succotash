---
{"entryId": "generic-p0dfc", "code": "P0DFC", "title": "P0DFC: Ford's generator resolver position has not been learned correctly", "description": "Ford separates an unacceptable stored generator-resolver configuration from electrical faults in the resolver signal path.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [167, 171, 172]}], "authoringBatch": "batch-42"}
---

# P0DFC: Ford's generator resolver position has not been learned correctly

P0DFC concerns learned generator-position information in Ford's hybrid transaxle controller. The source explains that a resolver must be configured correctly during assembly initialization and after replacement of the relevant inverter controller. An unacceptable stored configuration can produce a not-learned result even though that label does not prove a broken sensor wire.

## The stored position is the monitored item

Ford's position-monitor section describes the not-configured condition as a resolver position stored in EEPROM outside the acceptable range. Its entry conditions include elapsed time after power-up, valid low-voltage supply and a passed internal communication check. Those prerequisites matter when interpreting whether the configuration assessment was available.

The summary does not give the actual acceptable learned-value interval or the service learning procedure. It would therefore be inappropriate to invent a target value or advise repeating an initialization sequence without the exact vehicle instructions.

## Compare configuration findings with circuit findings

The generator resolver's circuit code is P0C64. Ford distinguishes that hardware, wiring or conversion-path category from P0DFC's configuration concern. If both kinds of findings are present, a learning assumption alone would not explain the independent circuit evidence.

The generator is part of the powersplit transaxle and has its own resolver, separate from the traction motor's resolver. Correct machine and module identification is consequently important before interpreting the fault.

Professional verification should establish valid prerequisite conditions and an acceptable stored generator configuration through the approved service process. Clearing the DTC does not itself supply a learned value, and one plausible speed reading after the clear cannot establish that the configuration check and related position diagnostics have passed.

## Source and applicability

Ford Motor Company, [physical page 167](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=167); [physical page 171](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=171); [physical page 172](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=172). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
