---
{"entryId": "generic-p24bc", "code": "P24BC", "title": "P24BC: noisy EVAP pressure information in Ford's leak-check module", "description": "Ford's P24BC monitor examines rapid changes in leak-detection-pump pressure feedback rather than declaring a physical EVAP leak.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [39, 48]}], "authoringBatch": "batch-42"}
---

# P24BC: noisy EVAP pressure information in Ford's leak-check module

Ford uses the leak-detection-pump pressure sensor to judge several stages of the hybrid EVAP sequence. P24BC addresses unstable information from that sensor. A noisy signal can undermine conclusions about a valve or system leak even when its average pressure appears reasonable.

## The monitor evaluates changes between samples

The documented sensor is sampled every 100 milliseconds. Ford lists a pressure change exceeding 25 inches of water, approximately 6.227 kPa, between samples as one fault indication. Its filtered fault-level criterion is 25 percent, with a ten-second noisy-sensor check. These are signal-analysis conditions, not recommended pressures for an external leak test.

The same entry also includes open- and short-circuit conditions. That breadth is useful when interpreting an intermittent code: the evidence may involve temporary loss of the electrical signal rather than a genuinely rapid change in fuel-vapor pressure. A stable reading after the event cannot exclude a previously recorded signal disruption.

## Preserve the reference system used by the leak monitor

Ford distinguishes the leak-check module's absolute pressure measurement from the tank's relative pressure measurement. The module's signal is converted to gauge pressure using the barometric reference before comparisons are made. Directly comparing uncorrected values from those two sensors can create an apparent disagreement that the controller itself accounts for.

The source lists P24BC among faults that must be absent for other EVAP checks. Accordingly, associated leak or valve results should be interpreted with their execution status and sensor validity. Repair verification needs stable pressure feedback and a valid completed monitor; clearing a leak code alone does not demonstrate that the noisy input has been resolved.

## Source and applicability

Ford Motor Company, [physical page 39](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=39); [physical page 48](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=48). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
