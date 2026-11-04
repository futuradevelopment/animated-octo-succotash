---
{"entryId": "generic-p25eb", "code": "P25EB", "title": "P25EB: The supercharger clutch circuit is checked while commanded off", "description": "Audi uses an intermediate actuator-voltage window for the N421 open-circuit monitor.", "status": "draft", "sourceReview": "checked", "scope": "Audi Q7 2016-onward CREC Generic Scan Tool manual, edition 11.2016; only the cited engine-control calibration table and component procedure. Confirm the installed engine and control-module software.", "sourceIds": ["audi-crec-gst-2016"], "sourcePages": [{"sourceId": "audi-crec-gst-2016", "pages": [434, 922, 923]}], "authoringBatch": "batch-48"}
---

# P25EB: The supercharger clutch circuit is checked while commanded off

## Range/performance refers to a particular off-state signature

The CREC table labels P25EB as supercharger disconnect-clutch circuit range/performance. Its strategy describes an open circuit and evaluates actuator voltage between two and three volts while the clutch actuator is commanded off. The observation lasts two seconds, with a two-driving-cycle lamp response.

That intermediate voltage window is a diagnostic signature in the controller's circuit. It should not be read as the clutch's normal power supply or used as a voltage to apply externally. It also differs from the speed-ratio tests that diagnose a clutch stuck open or closed mechanically.

## Use the electrical procedure for N421

Audi's N421 checking section examines the clutch component, supply and connection to the engine controller. It also recognizes that a component may fail under load. Those checks help keep an electrical-path result separate from a conclusion drawn only from whether the supercharger appears to spin.

Preserve related P25E9/P25EA and supply faults before clearing memory. A technician should identify the installed clutch circuit and evaluate the commanded-off state with the appropriate equipment and precautions around the belt drive.

Following repair, the relevant confirmation is normal off-state electrical feedback and absence of the original open-circuit report. Forcing the clutch to engage or observing one normal running event does not reproduce the monitored inactive-state condition, and an erased warning alone cannot establish circuit integrity.

## Source and applicability

[Audi Q7 CREC Generic Scan Tool, edition 11.2016](https://vwts.ru/diag/engine-crec-generic-scan-tool-eng.pdf). Physical PDF pages 434, 922, 923. Audi Q7 2016-onward CREC Generic Scan Tool manual, edition 11.2016; only the cited engine-control calibration table and component procedure. Confirm the installed engine and control-module software.
