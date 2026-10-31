---
{"entryId": "generic-p06ef", "code": "P06EF", "title": "P06EF: Wrangler restart performance and coordinated PCM/ABS software", "description": "FCA includes P06EF in a PCM update for the 2018 Wrangler 3.6 L engine with stop/start.", "status": "draft", "sourceReview": "checked", "scope": "FCA 18-092-19 concerns the 2018 Jeep Wrangler JL with the 3.6 L ERC engine and ESS in the listed markets.", "sourceIds": ["nhtsa-mc-10169232"], "sourcePages": [{"sourceId": "nhtsa-mc-10169232", "pages": [1, 2]}], "authoringBatch": "batch-26"}
---

# P06EF: Wrangler restart performance and coordinated PCM/ABS software

## Restart performance has a defined software case

FCA includes P06EF in a PCM update for the 2018 Wrangler 3.6 L engine with stop/start. The source separately describes cold-condition radio or cluster reboots during an ESS shutdown. Those observations make the stop/start event and surrounding operating conditions useful evidence, but the bulletin does not state that every reboot is caused by P06EF or that every restart fault is software.

## Separate the EVAP instruction

P0456 is another code in the same release. Its small-leak verification test is an instruction for the EVAP complaint, not an engine-restart test. Keeping that distinction avoids sending a P06EF-only vehicle through an unrelated leak diagnosis merely because the two codes appear together on a bulletin page.

## Completion involves a second controller

The PCM correction is accompanied by a requirement to verify the ABS module’s applicable software. The workshop should document both software levels and investigate other conditions outside the bulletin before using this path. For the original restart complaint, preserve whether the problem occurred during an ESS event, the ambient conditions and any warning or reboot sequence. Then verify the affected behavior after the appropriate repair. A vehicle that still fails to restart needs current system diagnosis; this bulletin supplies neither a universal starter-current limit nor evidence to replace the starter automatically. Its scope is the specified ERC-equipped Wrangler, not every 2018 engine or every later stop/start vehicle.

## Source and applicability

FCA 18-092-19 concerns the 2018 Jeep Wrangler JL with the 3.6 L ERC engine and ESS in the listed markets.

[Manufacturer bulletin, page 1](https://static.nhtsa.gov/odi/tsbs/2019/MC-10169232-9999.pdf#page=1) · [Manufacturer bulletin, page 2](https://static.nhtsa.gov/odi/tsbs/2019/MC-10169232-9999.pdf#page=2)
