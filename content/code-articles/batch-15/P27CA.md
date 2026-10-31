---
{"entryId":"generic-p27ca","code":"P27CA","title":"P27CA: Valve-four stuck-on requires unexpected travel and partner relaxation","description":"P27CA evaluates rods three and four after hydraulic routing changes, rather than diagnosing a stuck valve from one position.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG07A Part 2 documented monitor only; its application-matrix filename join is unresolved. No model, engine or universal calibration applicability is inferred.","sourceIds":["gm-2025-07a-2"],"sourcePages":[{"sourceId":"gm-2025-07a-2","pages":[1021,1022]}],"authoringBatch":"batch-15"}
---

# P27CA: Valve-four stuck-on requires unexpected travel and partner relaxation

The cited P27CA strategy concerns shift solenoid four hydraulically stuck on. It watches the rod response when the selector changes hydraulic routing. Persistent valve pressure can produce unintended travel on one rod while another rod relaxes, giving the controller a paired pattern to evaluate.

## Commanded force must be absent

Both rod-three and rod-four force targets must be zero. The source then looks for at least 1,000 micrometres of unintended movement and at least 125 micrometres of companion relaxation within 200 ms of the selector-target change. The roles depend on the target routing state.

Relevant position-sensor and valve electrical faults must not be active. Without those conditions, movement might represent an intentional command or unreliable feedback rather than the documented stuck-on event.

## Verification preserves the relationship

Record selector target, both rod positions and force requests together. A single position sample or a normal subsequent shift cannot reconstruct the original transition. The generic solenoid-R label is mapped to valve four only in this source’s implementation. The table supports the hydraulic classification but does not describe a universal mechanical repair or authorize manually reproducing the intrusive sequence outside the applicable service procedure.

## Document scope and source

2025 GM 25OBDG07A Part 2 documented monitor only; its application-matrix filename join is unresolved. No model, engine or universal calibration applicability is inferred. These figures explain the cited controller logic, not a vehicle-specific repair instruction. Match the vehicle’s service information before applying them.

[GM physical PDF page 1021](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=1021), [GM physical PDF page 1022](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=1022).
