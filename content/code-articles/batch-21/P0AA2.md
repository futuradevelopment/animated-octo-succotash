---
{"entryId": "generic-p0aa2", "code": "P0AA2", "title": "P0AA2: A close command does not produce the required contactor status", "description": "P0AA2 checks failure to close the battery contactor and also recognizes an open service-disconnect status.", "status": "draft", "sourceReview": "checked", "scope": "2009 General Motors diagnostic parameter file 09OBDG08 Engine Diagnostics.pdf. Section-specific modules and calibrations; no per-code model or engine applicability established.", "sourceIds": ["gm-2009-08-engine"], "sourcePages": [{"sourceId": "gm-2009-08-engine", "pages": [143]}], "authoringBatch": "batch-21"}
---

# P0AA2: A close command does not produce the required contactor status

P0AA2 identifies a battery contactor that has not reached the required closed status in GM's BAS hybrid implementation. The source includes a failure to close after a command and a separate branch for an active open-service-disconnect status.

## An open status is not automatically a failed contactor

The table waits at least three seconds after a close command before judging the specified non-defaulted contactor status. It also distinguishes states associated with impact, overtemperature or an engine-controller open command. Those status details matter because the system can remain open for reasons other than a physically defective contactor.

The service-disconnect branch is especially important. A code associated with an open disconnect does not justify forcing the contactor closed or bypassing an interlock. Its cause and the permitted restoration procedure must be established from the exact vehicle information.

## Preserve the command and reason for remaining open

Record the close request, elapsed time and detailed contactor status rather than relying only on a generic stuck-open label. The summary does not authorize a contactor replacement from the code alone.

Hybrid isolation and contactor assessment require the prescribed professional procedures. Verification should confirm that the system is legitimately permitted to close, reaches the correct status and completes its monitoring. Clearing P0AA2 or attempting repeated startups does not establish that the condition preventing closure has been resolved.

## Source and applicability

2009 General Motors diagnostic parameter file 09OBDG08 Engine Diagnostics.pdf. Section-specific modules and calibrations; no per-code model or engine applicability established. This explanation describes the documented monitor, not a universal repair procedure.

[GM diagnostic parameters, PDF page 143](https://gsi.ext.gm.com/gmspo/mode6/pdf/2009/09OBDG08%20Engine%20Diagnostics.pdf#page=143).
