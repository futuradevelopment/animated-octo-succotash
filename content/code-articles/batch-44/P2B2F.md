---
{"entryId": "generic-p2b2f", "code": "P2B2F", "title": "P2B2F: Jetta fan 1 stuck-off monitor's sustained command", "description": "The factory row combines a fan command above 13 percent for 90 seconds with a specific blocked-status pattern.", "status": "draft", "sourceReview": "needs-review", "scope": "Volkswagen Jetta factory Generic Scan Tool manual, Edition 04.2020; DJXA engine control module, 2020 MY table.", "sourceIds": ["vw-jetta-djxa-gst-2020"], "authoringBatch": "batch-44", "sourcePages": [{"sourceId": "vw-jetta-djxa-gst-2020", "pages": [367, 368, 483, 484, 485]}]}
---

# P2B2F: Jetta fan 1 stuck-off monitor's sustained command

P2B2F is the fan 1 performance or stuck-off code in Volkswagen's DJXA table. The monitor does more than observe that the fan is quiet. Its internal blocked check uses an error counter greater than three and a commanded duty above 13 percent for more than 90 seconds.

## Sustained command and blocked-status feedback

The associated feedback signal has a 1.7–2.3 second duration band and a 1.9–2.1 second delay band. These timings encode the diagnostic report. They are not a permitted mechanical stall interval and should not be used to design a deliberate obstruction test. The table lists continuous monitoring and MIL illumination after two driving cycles.

The source has a component-name inconsistency: it attributes the ground signal to a pump even though the code and diagnostic reference concern radiator fan VX57. This needs review against exact vehicle information. The mismatch does not establish that a coolant pump is the failed component.

The fan procedure checks supply and control wiring before its replacement branch. Diagnosis therefore needs to connect the extended command with actual fan response and the reported fault state. A lost feed, control-path defect or assembly problem should be distinguished through evidence, rather than inferred from the stuck-off phrase alone.

Record the original command conditions and other fan-related codes before clearing memory. Professional service should investigate safely, correct the supported branch and verify operation long enough for the qualifying command condition to be met. Keep hands and objects away from the fan: it may start unexpectedly, and forcing a stall can damage the assembly or injure the person testing it.

## Source and applicability

[Volkswagen factory manual, P2B2F](https://vwts.ru/diag/engine-djxa-09s-jetta-7-diagnostic-eng.pdf#page=367). Physical PDF pages 367, 368, 483, 484, 485. Volkswagen Jetta factory Generic Scan Tool manual, Edition 04.2020; DJXA engine control module, 2020 MY table. This explains the documented monitor; it does not establish applicability to other vehicles.
