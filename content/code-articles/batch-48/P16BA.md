---
{"entryId": "volkswagen-p16ba", "code": "P16BA", "title": "P16BA: The charge-air cooling pump reports dry running", "description": "Volkswagen distinguishes V188 dry-running feedback from blocked and overheated pump reports.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen Golf 7/Golf Wagon 2014-onward CRUA/DEJA Generic Scan Tool manual, edition 08.2018; only the cited engine-control diagnostic table and component procedure, not universal model fitment.", "sourceIds": ["vw-crua-deja-golf7-gst-2018"], "sourcePages": [{"sourceId": "vw-crua-deja-golf7-gst-2018", "pages": [110, 352, 353]}], "authoringBatch": "batch-48"}
---

# P16BA: The charge-air cooling pump reports dry running

## Dry running is a reported pump condition

P16BA is the CRUA/DEJA entry for dry-running feedback from charge-air cooling pump V188. The controller receives a diagnostic indication from the output driver, with three attempts over six seconds. The table lists the malfunction lamp after two driving cycles.

The row does not define a fluid-level threshold or claim that the main expansion tank must be empty. It identifies how the pump's operation has been classified. That distinction avoids turning an electronic diagnostic report into an unsupported conclusion about exactly where coolant was lost or whether the pump itself has failed.

## Verify the circuit and the actual cooling arrangement

The V188 procedure checks electrical supply, ground and the controller connection before reaching its component decision. Those checks remain relevant even when the code wording sounds hydraulic. A workshop must also identify the correct charge-air cooling circuit and use its matching service information when evaluating the reported dry-running condition.

Record related pump codes and any recent cooling-system work. Such history can guide the investigation, but it is not proof of air in the circuit or a particular leak. Do not repeatedly command a pump that reports dry running simply to see whether it starts sounding different.

Inspection of coolant systems requires safe temperature and pressure. Once the cause is established and corrected, verification should show normal pump feedback during the relevant operation. A cleared code and a full-looking reservoir alone do not demonstrate that V188's monitored condition has disappeared.

## Source and applicability

[Volkswagen Golf 7/Golf Wagon CRUA/DEJA Generic Scan Tool, edition 08.2018](https://vwts.ru/diag/engine-crua-deja-golf-7-diagnostic-eng.pdf). Physical PDF pages 110, 352, 353. Volkswagen Golf 7/Golf Wagon 2014-onward CRUA/DEJA Generic Scan Tool manual, edition 08.2018; only the cited engine-control diagnostic table and component procedure, not universal model fitment.
