---
{"entryId": "generic-p2b7b", "code": "P2B7B", "title": "P2B7B: Volkswagen looks for an EVAP pressure signal that hardly changes", "description": "VW’s P2B7B monitor distinguishes a pressure signal stuck within range from the separate high and low pressure-difference checks.", "status": "draft", "sourceReview": "needs-review", "scope": "Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021; engine control 2021/2022 MY. Original manufacturer PDF mirrored by VWTS; physical PDF page references.", "sourceIds": ["vw-drna-dsfb-dsfe-dsff-arteon-gst"], "sourcePages": [{"sourceId": "vw-drna-dsfb-dsfe-dsff-arteon-gst", "pages": [322]}], "authoringBatch": "batch-43"}
---

# P2B7B: Volkswagen looks for an EVAP pressure signal that hardly changes

In Volkswagen’s 2021–2022 engine table, P2B7B is an EVAP pressure sensor C range/performance fault. Its strategy looks for a signal stuck within range. That is different from a value already outside the high or low limits: a seemingly plausible reading may still fail because it does not change as expected.

## The first comparison concerns variation

The source describes a suspicion check using the difference between maximum and minimum deviations of tank pressure from barometric pressure. The listed boundary is below 0.05 kPa. This figure describes very little variation, not a rule that tank pressure itself must always exceed 0.05 kPa.

The same row refers to a fuel-tank vent-valve stuck-closed check for confirmation. It does not fully explain how that confirmation is combined with the initial suspicion, so the short table should not be presented as a complete GX36 diagnostic algorithm.

## Preserve the operating prerequisites

The enabling information includes elapsed time after ECM wake-up, fuel-level and temperature conditions, and engine-running time. The monitor is listed once per driving cycle, with a 0.1-second monitoring entry and two cycles for MIL operation. Those distinct timing fields should not be collapsed into a single required test duration.

The component reference points to the fuel-tank leak-detection module. A professional investigation should reconcile the pressure trend with the matching vent-system procedure before selecting a part. Verification needs appropriate pressure variation and completion of the relevant check; a static reading inside the ordinary range is insufficient evidence.

## Source and scope

[Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021, physical PDF pages 322](https://vwts.ru/diag/engine-drna-dsfb-dsfe-dsff-arteon-diagnostic-eng.pdf#page=322). Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021; engine control 2021/2022 MY. Original manufacturer PDF mirrored by VWTS; physical PDF page references.
