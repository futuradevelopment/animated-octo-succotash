---
{"entryId": "generic-p0ae1", "code": "P0AE1", "title": "P0AE1: Ford's precharge-contactor monitor uses battery current", "description": "Ford evaluates the precharge-contactor circuit while it is commanded closed and checks whether battery current leaves the documented band.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [162]}], "authoringBatch": "batch-42"}
---

# P0AE1: Ford's precharge-contactor monitor uses battery current

P0AE1 concerns Ford's battery precharge-contactor circuit. In the documented monitor, the contactor must be commanded closed before the current observation is evaluated. The code is therefore tied to the precharge stage, not simply to any high current occurring during normal propulsion or charging.

## Current magnitude is assessed in both directions

Ford's listed malfunction condition is battery current below−10 amps or above 10 amps. The sign matters because the test considers excursions on either side of the permitted band. A description that focuses only on positive current would omit one of the source's stated failure paths.

The operation table lists a monitoring duration below one second but does not provide a more specific timed threshold for this individual current row. That gap should not be filled with an invented millisecond value. The criterion also does not authorize deliberately loading the battery or manually operating the precharge contactor.

## Distinguish precharge observations from driver faults

Ford gives the precharge driver a separate limited-current condition under P0AE7. It uses a voltage-relationship comparison for P0AE5. P0AE1's current observation is consequently one part of the broader sequence, not an interchangeable label for every precharge-control problem.

A professional diagnosis preserves the commanded state, current information and other contactor or sensing faults. The source does not determine which physical component caused an out-of-band result. Verification follows the exact battery's approved procedure and demonstrates correct precharge behavior with valid measurements. The absence of P0AE1 after a simple code clear, when no precharge sequence has been evaluated, does not establish that the original condition has been corrected.

## Source and applicability

Ford Motor Company, [physical page 162](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=162). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
