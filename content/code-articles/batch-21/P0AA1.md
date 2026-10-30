---
{"entryId": "generic-p0aa1", "code": "P0AA1", "title": "P0AA1: Battery contactor appears to remain conductive after opening", "description": "P0AA1 evaluates link-voltage behavior after a contactor-open command in the documented BAS hybrid system.", "status": "draft", "sourceReview": "checked", "scope": "2009 General Motors diagnostic parameter file 09OBDG08 Engine Diagnostics.pdf. Section-specific modules and calibrations; no per-code model or engine applicability established.", "sourceIds": ["gm-2009-08-engine"], "sourcePages": [{"sourceId": "gm-2009-08-engine", "pages": [137]}], "authoringBatch": "batch-21"}
---

# P0AA1: Battery contactor appears to remain conductive after opening

P0AA1 is the contactor-stuck-closed check in GM's BAS hybrid summary. The controller compares link voltage before and after an open command under a qualified shutdown state. The concern is that the expected electrical separation has not occurred.

## Voltage behavior needs the command and current context

The published criterion looks for link voltage remaining within 500 millivolts of its pre-opening value. The table also qualifies the check with a specified pack-current condition observed shortly after the open command, power mode off or accessory, and valid supporting diagnostics.

This is not a universal instruction to measure inside a battery pack. It explains why a contactor status bit alone is insufficient: the monitor checks electrical behavior associated with the commanded transition.

## A stuck-closed report requires controlled service assessment

The source separates P0AA1 from the contactor control-circuit low and high codes. A control-feedback fault and failure to achieve electrical separation are related concerns but different monitored results. The code alone does not identify a particular welded contact or prove which component must be replaced.

Do not bypass the contactor or assume the system is de-energized because the command says open. Use the exact hybrid isolation and diagnostic procedures through qualified service. Verification must establish the prescribed electrical separation and completed monitoring after correction. Clearing the code cannot demonstrate that a contactor now opens safely.

## Source and applicability

2009 General Motors diagnostic parameter file 09OBDG08 Engine Diagnostics.pdf. Section-specific modules and calibrations; no per-code model or engine applicability established. This explanation describes the documented monitor, not a universal repair procedure.

[GM diagnostic parameters, PDF page 137](https://gsi.ext.gm.com/gmspo/mode6/pdf/2009/09OBDG08%20Engine%20Diagnostics.pdf#page=137).
