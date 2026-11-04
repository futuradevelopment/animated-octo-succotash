---
{"entryId": "generic-p0c3e", "code": "P0C3E", "title": "P0C3E: Ford's converter sensor B fails a temperature-correlation check", "description": "Ford uses the same documented soak-based comparison for converter temperature sensors A and B, while retaining their separate code identities.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [181]}], "authoringBatch": "batch-42"}
---

# P0C3E: Ford's converter sensor B fails a temperature-correlation check

P0C3E identifies the B-side DC/DC converter temperature-sensor performance category. Ford's summary groups it with the A-side check and evaluates whether power-electronics temperature agrees sufficiently with engine coolant temperature after an extended engine-off period. The shared procedure should not be mistaken for proof that both sensors are defective.

## Correlation is different from an overheating limit

Ford describes a temperature difference above 30°C after a 180 minute engine-off soak. That relation is the relevant condition; the source does not give P0C3E a standalone maximum operating temperature. A warm reading during normal converter operation is not automatically the same observation.

The monitor's prerequisites include the supporting reference-voltage and engine-off-timer information, along with its power-up and low-voltage conditions. A reliable comparison depends on those inputs as well as on the two displayed temperatures.

## Preserve B-side identity without inventing a mounting map

The summary provides no distinct physical location or special threshold for sensor B in this section. That mapping belongs to the exact vehicle's service procedure. A generic sensor letter should not be turned into an assumed upper switch, lower switch or external cooling-component location.

Useful evidence includes the qualifying soak, the compared temperatures and any other sensor or reference faults. A mismatch alone does not determine which measurement is inaccurate. Professional verification should demonstrate an acceptable comparison under the required conditions and complete the related high-voltage checks. A later ordinary temperature or a fault-memory clear outside a qualifying soak does not test the condition that produced P0C3E.

## Source and applicability

Ford Motor Company, [physical page 181](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=181). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
