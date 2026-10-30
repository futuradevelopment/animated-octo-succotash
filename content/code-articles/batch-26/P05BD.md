---
{"entryId": "generic-p05bd", "code": "P05BD", "title": "P05BD: Ram stop-start switch faults versus the ignition module", "description": "FCA explicitly states that P05BD in this case is related to the electronic-shift-module stop/start on-off button, not the keyless ignition node.", "status": "draft", "sourceReview": "checked", "scope": "FCA GPOP 9100676, dated October 29, 2025, concerns the specified 2025 Ram DT ignition-switch applications.", "sourceIds": ["nhtsa-mc-11025041"], "sourcePages": [{"sourceId": "nhtsa-mc-11025041", "pages": [1]}], "authoringBatch": "batch-26"}
---

# P05BD: Ram stop-start switch faults versus the ignition module

## The named switch can be misunderstood

FCA explicitly states that P05BD in this case is related to the electronic-shift-module stop/start on-off button, not the keyless ignition node. That distinction prevents replacing the ignition-switch module simply because a scan description contains the words “stop-start switch.”

## A separate stored code has its own criteria

The note also discusses a stored B1A7D-2A start-button-stuck record in the radio-frequency hub. Its no-replacement guidance includes the absence of reported or observed functional problems. This is separate from identifying which module P05BD belongs to. Do not combine the two entries into an unsupported conclusion that every starting-system fault is harmless.

## What the note supports next

Preserve the reporting module, full code and actual button behavior. Follow the referenced current service case for the relevant switch and electronic-shift-module circuit rather than substituting an ignition module. The short publication does not reproduce a complete electrical test tree, switch resistance or replacement threshold. If an actual functional fault is present, that needs diagnosis under the appropriate procedure. After repair, verify the original stop/start control behavior and returning faults. The useful result is correct system identification before buying parts, not a universal instruction to erase P05BD or disable stop/start.

## Source and applicability

FCA GPOP 9100676, dated October 29, 2025, concerns the specified 2025 Ram DT ignition-switch applications.

[Manufacturer bulletin, page 1](https://static.nhtsa.gov/odi/tsbs/2025/MC-11025041-0001.pdf#page=1)
