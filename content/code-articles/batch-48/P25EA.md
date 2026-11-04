---
{"entryId": "generic-p25ea", "code": "P25EA", "title": "P25EA: The supercharger keeps turning as though its clutch stayed closed", "description": "The CREC monitor gives disengagement a much longer qualification before judging the speed ratio.", "status": "draft", "sourceReview": "checked", "scope": "Audi Q7 2016-onward CREC Generic Scan Tool manual, edition 11.2016; only the cited engine-control calibration table and component procedure. Confirm the installed engine and control-module software.", "sourceIds": ["audi-crec-gst-2016"], "sourcePages": [{"sourceId": "audi-crec-gst-2016", "pages": [434, 922, 923]}], "authoringBatch": "batch-48"}
---

# P25EA: The supercharger keeps turning as though its clutch stayed closed

## The requested state is disengaged

P25EA is Audi's CREC supercharger-disconnect-clutch stuck-closed entry. The controller requests the clutch open and checks whether the supercharger-to-engine speed ratio remains above 2.10. Eligibility includes engine speed above 550 RPM, limited speed gradient and more than forty-nine seconds in the stated condition. The actual monitoring period is half a second.

The long preceding qualification is important. It is distinct from the short observation used to make the fault decision, and it should not be omitted when interpreting a brief post-command speed reading. The code evaluates a persistent drive relationship after disengagement has been requested.

## Check the command as well as the mechanical response

The N421 section explains that the magnetic clutch disconnects the supercharger drive when engine-output demand is low. Its diagnostic sequence covers electrical supply and controller wiring as well as the clutch itself. A stuck-closed report does not, by itself, establish whether the problem lies in control or the mechanism.

Retain the clutch command, speed information and related circuit codes. A technician must use the correct procedure without exposing anyone to the moving belt and clutch assembly. Applying external power is not a substitute for evaluating a commanded-off condition.

Confirmation should show the expected disengaged speed behavior under eligible operation. A warning-free restart or a momentary change in sound cannot demonstrate that the longer qualification and final ratio check have passed.

## Source and applicability

[Audi Q7 CREC Generic Scan Tool, edition 11.2016](https://vwts.ru/diag/engine-crec-generic-scan-tool-eng.pdf). Physical PDF pages 434, 922, 923. Audi Q7 2016-onward CREC Generic Scan Tool manual, edition 11.2016; only the cited engine-control calibration table and component procedure. Confirm the installed engine and control-module software.
