---
{"entryId": "generic-p2b7c", "code": "P2B7C", "title": "P2B7C: Volkswagen’s EVAP sensor-C low monitor uses pressure relative to atmosphere", "description": "The VW 2021–2022 table gives P2B7C a tank-minus-barometric pressure boundary below -10 kPa.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021; engine control 2021/2022 MY. Original manufacturer PDF mirrored by VWTS; physical PDF page references.", "sourceIds": ["vw-drna-dsfb-dsfe-dsff-arteon-gst"], "sourcePages": [{"sourceId": "vw-drna-dsfb-dsfe-dsff-arteon-gst", "pages": [321, 323]}], "authoringBatch": "batch-43"}
---

# P2B7C: Volkswagen’s EVAP sensor-C low monitor uses pressure relative to atmosphere

Volkswagen describes P2B7C as EVAP pressure sensor C circuit low, but its published monitor quantity is a pressure difference. The 2021–2022 engine table compares tank pressure with barometric pressure and sets the low boundary below -10 kPa.

## Negative pressure difference is not negative supply voltage

The units are kilopascals. The criterion must not be rewritten as a low-voltage test merely because “circuit low” appears in the title. It also should not be treated as an absolute tank-pressure value of minus ten kilopascals; the reference to barometric pressure supplies the comparison baseline.

The paired P2B7D entry uses the opposite boundary above +10 kPa. These separate faults describe different sides of the pressure comparison, while P2B7A concerns invalid raw signals or internal sensor errors. Keeping those categories distinct helps interpret a scan record accurately.

## Apply the wake-up condition

The low monitor requires more than three seconds since ECM wake-up. Its table entry gives 0.60 second monitoring, continuous checking and MIL operation after two driving cycles. A reading captured before the specified wake-up interval does not by itself reproduce the full criterion.

Volkswagen directs component diagnosis toward fuel-tank leak-detection module GX36. The summary does not distinguish all possible sensor, connection or pneumatic causes. The appropriate professional procedure is needed to establish why the relative pressure was outside the expected range. Verification should reconcile both tank and barometric information under the applicable conditions, not merely show that the DTC was erased.

## Source and scope

[Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021, physical PDF pages 321, 323](https://vwts.ru/diag/engine-drna-dsfb-dsfe-dsff-arteon-diagnostic-eng.pdf#page=321). Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021; engine control 2021/2022 MY. Original manufacturer PDF mirrored by VWTS; physical PDF page references.
