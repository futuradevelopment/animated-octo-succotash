---
{"entryId": "generic-p0adb", "code": "P0ADB", "title": "P0ADB: Contactor control-low classification uses high feedback duty", "description": "P0ADB identifies a contactor control-circuit condition through a specific feedback encoding in this GM hybrid system.", "status": "draft", "sourceReview": "checked", "scope": "2009 General Motors diagnostic parameter file 09OBDG08 Engine Diagnostics.pdf. Section-specific modules and calibrations; no per-code model or engine applicability established.", "sourceIds": ["gm-2009-08-engine"], "sourcePages": [{"sourceId": "gm-2009-08-engine", "pages": [137]}], "authoringBatch": "batch-21"}
---

# P0ADB: Contactor control-low classification uses high feedback duty

The P0ADB row in GM's BAS hybrid table is labeled contactor control shorted low, but its monitored control-feedback threshold is above 98 percent. That apparent inversion is a reason to use the documented signal encoding rather than assume the code name describes a raw connector voltage.

## The feedback quantity is not pack voltage

The percentage is the controller's contactor-control feedback. It must not be interpreted as battery state of charge or as a percentage of hybrid pack voltage. The test requires a closed contactor state, an eligible controller state and system voltage above the specified minimum.

The source accumulates 188 failures in 250 samples at a 20-millisecond interval. It also excludes an open service-disconnect status and specified already-failed contactor diagnostics. These qualifications affect whether a valid comparison can run.

## Distinguish control feedback from welded-contact detection

P0AA1 separately evaluates failure to achieve electrical separation after opening. P0ADB concerns the monitored control-circuit classification. One does not automatically prove the other.

Preserve the exact feedback and status information for the applicable hybrid service procedure. Do not jumper contactor controls or assume electrical isolation from a status display. Qualified assessment must determine the actual fault. Verification should establish correct control feedback and completed monitoring, together with the prescribed isolation/function checks. Erasing P0ADB cannot demonstrate that either control integrity or safe contactor operation has been restored.

## Source and applicability

2009 General Motors diagnostic parameter file 09OBDG08 Engine Diagnostics.pdf. Section-specific modules and calibrations; no per-code model or engine applicability established. This explanation describes the documented monitor, not a universal repair procedure.

[GM diagnostic parameters, PDF page 137](https://gsi.ext.gm.com/gmspo/mode6/pdf/2009/09OBDG08%20Engine%20Diagnostics.pdf#page=137).
