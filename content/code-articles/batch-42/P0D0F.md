---
{"entryId": "generic-p0d0f", "code": "P0D0F", "title": "P0D0F: the negative charging-contactor state does not match Ford's open command", "description": "Ford's negative charge-contactor monitor uses a charger-to-pack voltage comparison with different initial-power-up timing.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [150, 163, 164]}], "authoringBatch": "batch-42"}
---

# P0D0F: the negative charging-contactor state does not match Ford's open command

Ford's P0D0F monitor addresses a negative charging contactor that appears to remain closed after the charge contactors are commanded open. Its evidence comes from the reported high-voltage relationship, rather than a direct mechanical observation of the contactor.

## Initial power-up has a different confirmation time

The documented criterion compares the charger's high-voltage measurement with battery-pack voltage minus 20 volts. A value above that relative boundary for three seconds supports the fault during the normal check. Ford extends the interval to six seconds at initial power-up. Distinguishing those stages prevents an early voltage observation from being judged against the wrong timing.

The monitor depends on the validity of the charger and pack information. A code label alone does not establish that every reported voltage is accurate or that the controller's inferred state identifies one unique physical defect. The exact high-voltage diagnostic procedure is needed to resolve those questions.

## Retain related switching and driver evidence

Ford documents an equivalent comparison for the positive charging contactor's stuck-closed category. It separately monitors contactor-driver current and open-circuit behavior. The resulting codes describe different aspects of the charging sequence and should not be treated as interchangeable names for a failed charger.

A useful record includes the contactor command, whether the event occurred during initial power-up, the relative voltage information and any accompanying driver faults. Verification needs a correctly completed switching sequence under approved service conditions. Neither a completed previous charge session nor the disappearance of the code after clearing proves that the negative charging path subsequently opened as expected. This monitor explanation is not a procedure for probing or bypassing high-voltage contactors.

## Source and applicability

Ford Motor Company, [physical page 150](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=150); [physical page 163](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=163); [physical page 164](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=164). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
