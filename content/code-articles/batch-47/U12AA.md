---
{"entryId": "honda-u12aa", "code": "U12AA", "title": "U12AA: PCM loses the shift-by-wire shifter on EP-CAN", "description": "Honda U12AA identifies missing shift-by-wire shifter messages, while the source disagrees about MIL behavior.", "status": "draft", "sourceReview": "needs-review", "scope": "Honda factory service-information extract hosted in the Laboratory B third-generation Insight archive; EP-CAN Malfunction (Powertrain Control Module (PCM)-Shift By Wire (SBW) Shifter) (U12AA). Applies only to the stated module, suffix and equipment; the archive does not establish all years or VIN fitment.", "sourceIds": ["honda-insight-gen3-u12aa-writer47"], "authoringBatch": "batch-47", "sourcePages": [{"sourceId": "honda-insight-gen3-u12aa-writer47", "pages": [1, 2]}], "sourceLocators": [{"sourceId": "honda-insight-gen3-u12aa-writer47", "locator": "Complete DTC Advanced Diagnostics_ U12AA 7093.pdf; all physical PDF pages."}]}
---

# U12AA: PCM loses the shift-by-wire shifter on EP-CAN

## The PCM is missing shifter information

U12AA concerns EP-CAN communication between the PCM and the shift-by-wire shifter control module. Honda's description says the PCM sets the fault when it receives no signals from that module for at least one second. This is a communication diagnosis; it does not establish a mechanical failure inside the transmission.

The continuous monitor is enabled three seconds after ON mode, with the 12-volt battery at 10 V or more. Possible causes include an open or grounded EP-CAN A_H or A_L circuit, a shifter control-module fault, fuse-related loss of that module and an internal PCM circuit fault.

## A source conflict affects lamp interpretation

The summary table labels this a one-drive-cycle code with the MIL off. The later setting description instead says the MIL comes on when the fault is detected. Those statements cannot both establish one universal lamp response, so the article is marked for review and makes no definite MIL claim.

The source does consistently identify pending and confirmed records and freeze data in PCM memory. A technician should therefore use the actual scan record and vehicle-specific service information rather than treating lamp absence as proof that U12AA is inactive.

## Evidence before parts

Preserve the code, supply-related faults and communication status before clearing memory. Check the applicable shifter power and EP-CAN paths before deciding that the shifter or PCM needs replacement. If gear selection or the displayed state is unreliable, secure the vehicle and arrange professional diagnosis instead of repeatedly operating the shifter to test the warning.

## Source and scope

[Factory diagnostic source](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20U12AA%207093.pdf) — PDF pages 1, 2.

Honda factory service-information extract hosted in the Laboratory B third-generation Insight archive; EP-CAN Malfunction (Powertrain Control Module (PCM)-Shift By Wire (SBW) Shifter) (U12AA). Applies only to the stated module, suffix and equipment; the archive does not establish all years or VIN fitment.
