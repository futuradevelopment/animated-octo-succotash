---
{"entryId": "generic-p24bf", "code": "P24BF", "title": "P24BF: interpreting Ford's EVAP changeover-valve driver fault", "description": "Ford's P24BF electrical check is separate from pressure-based tests of whether the leak-check switching valve changes position.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [39, 47]}], "authoringBatch": "batch-42"}
---

# P24BF: interpreting Ford's EVAP changeover-valve driver fault

P24BF belongs to the electrical monitoring of the changeover valve in Ford's hybrid EVAP leak-check module. The high-circuit label identifies a driver-level fault category. It does not mean the controller has measured excessive fuel-tank pressure or proved that the valve is mechanically stuck in one position.

## Read the electrical and functional reports separately

Ford's summary pairs P24BF with P24BE, describes open or shorted output-driver conditions, and specifies five seconds to obtain the smart driver's status. It does not divide that abbreviated description into individual harness-pin tests or publish a dedicated voltage threshold for this code. Those details should not be inferred from the word high alone.

The same valve has functional monitors, P24C0 and P24C1. Those monitors use pressure movement during the after-run sequence to infer the valve's state. Because the electrical codes are among their prerequisites, a driver fault can prevent a later pressure-based test from providing a valid mechanical assessment.

## Follow the leak-check hardware's role

During the sequence, the changeover valve helps route flow through the reference path and the system-under-test path. It is not interchangeable with the purge valve, refueling valve or tank-pressure control valve. Correct component identification is therefore essential before treating a generic scanner's abbreviated description as a repair location.

A useful service record preserves driver status, accompanying electrical codes and the completion status of the leak monitor. An unsuccessful leak test does not by itself justify replacing this valve, and a quiet fault memory after clearing is not proof that its driver was exercised successfully. Verification should include the applicable electrical check and a subsequently valid functional sequence.

## Source and applicability

Ford Motor Company, [physical page 39](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=39); [physical page 47](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=47). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
