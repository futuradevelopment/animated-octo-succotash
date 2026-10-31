---
{"entryId":"generic-p26ce","code":"P26CE","title":"P26CE: Pump overspeed is a filtered mismatch, not proof of trapped air","description":"Understand the command-versus-feedback logic behind P26CE and the published limits that cannot be applied as physical voltage specifications.","status":"draft","sourceReview":"needs-review","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[851,852]}],"authoringBatch":"batch-18"}
---

# P26CE: Pump overspeed is a filtered mismatch, not proof of trapped air

P26CE evaluates coolant-pump feedback running faster than the requested speed. GM forms a filtered command-minus-feedback difference; overspeed makes that difference negative. This is a tracking diagnosis, so an absolute speed reading without its requested value cannot reproduce the decision.

## Preserve the stable-command window

The source requires the command to change by less than 50 rpm for at least three seconds. It also lists pump enablement, a minimum command of 300 rpm and supply eligibility. These conditions distinguish a sustained tracking discrepancy from ordinary changes while the controller is accelerating or decelerating the pump.

Failure confirmation uses eight seconds within a ten-second window. The result is therefore not equivalent to one fast-looking feedback sample. Preserve the command, feedback and their filtered relationship across the qualifying interval.

## Do not turn placeholders into specifications

The table names different overspeed thresholds for voltage branches but does not supply usable numerical values for those thresholds. It also prints a −9,999 V dividing value, which cannot be treated as a physical vehicle-voltage instruction. Those unresolved entries prevent reconstructing the complete calibration from this summary.

The supported conclusion is a sustained overspeed tracking classification. Although the generic label mentions air in the system, this monitor does not independently confirm trapped air or prescribe bleeding. Vehicle-specific cooling-system checks are needed to determine the cause without substituting a label for evidence.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 851](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=851). [25OBDG03B, PDF page 852](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=852).
