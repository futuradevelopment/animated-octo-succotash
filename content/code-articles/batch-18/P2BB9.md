---
{"entryId":"generic-p2bb9","code":"P2BB9","title":"P2BB9: Coolant sensor 6 circuit high has contradictory assignment wording","description":"Understand P2BB9’s high-resistance classification while keeping its unresolved sensor assignment separate from a repair decision.","status":"draft","sourceReview":"needs-review","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[892,893]}],"authoringBatch":"batch-18"}
---

# P2BB9: Coolant sensor 6 circuit high has contradictory assignment wording

P2BB9 is labeled coolant temperature sensor 6 circuit high. Its GM description concerns resistance above a configured upper limit, consistent with an open path or a short toward a high potential. A high circuit result should not be read as high coolant temperature.

## The channel cannot be chosen from the heading alone

Although the row heading names sensor 6, the assignment paragraph names the radiator-coolant function. The page also lists separate hardware inputs, logical functions and differing resistance thresholds. This inconsistency prevents treating one listed resistance or connector location as conclusively applicable from this summary.

The supported electrical direction remains useful: the controller is evaluating excessive resistance. The article does not conceal the mapping problem by importing a neighboring row’s value.

## Preserve eligibility and the failure interval

The monitor needs diagnostic enablement plus either more than ten seconds of engine running or minimum intake-air temperature above −20°C. Its confirmation requires five seconds of failure within six seconds. These qualifications matter when comparing a stored event with a cold power-up reading.

Retain the exact configured input, interpreted resistance and operating state. An unusually cold displayed coolant value can result from the electrical interpretation, rather than establish actual coolant temperature. Resolve the assignment with the vehicle’s service information before selecting a numerical limit or deciding which component to test.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 892](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=892). [25OBDG03B, PDF page 893](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=893).
