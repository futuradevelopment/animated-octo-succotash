---
{"entryId": "generic-p2b7d", "code": "P2B7D", "title": "P2B7D: Volkswagen’s EVAP high fault is a tank-to-barometric comparison", "description": "P2B7D in VW’s 2021–2022 table uses pressure difference above 10 kPa after the ECM wake-up interval.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021; engine control 2021/2022 MY. Original manufacturer PDF mirrored by VWTS; physical PDF page references.", "sourceIds": ["vw-drna-dsfb-dsfe-dsff-arteon-gst"], "sourcePages": [{"sourceId": "vw-drna-dsfb-dsfe-dsff-arteon-gst", "pages": [321, 323]}], "authoringBatch": "batch-43"}
---

# P2B7D: Volkswagen’s EVAP high fault is a tank-to-barometric comparison

The Volkswagen 2021–2022 engine table gives P2B7D a specific interpretation: EVAP sensor C reports a tank-to-barometric pressure difference above 10 kPa. The high classification is therefore based on a pressure comparison, even though the general code description uses the word “circuit.”

## Preserve both sides of the comparison

A tank-pressure number by itself cannot reproduce this criterion unless its pressure reference is known. The source compares it with barometric pressure. Likewise, the ten-kilopascal threshold is not an electrical supply or signal-voltage limit.

The row is enabled more than three seconds after ECM wake-up and lists a 0.6-second monitoring time. It is checked continuously, with two driving cycles listed for MIL operation. These details qualify the event rather than establishing that every momentary high reading is a confirmed fault.

## Separate range failure from signal validity

P2B7C is the corresponding negative pressure-difference fault. P2B7A instead examines raw signal validity and internal sensor status. A technician should retain the actual DTC and any related records so that a high-pressure comparison is not mistaken for a sensor initialization error.

The manufacturer’s component reference is fuel-tank leak-detection module GX36. The table does not provide a hose-disconnection test or a direct replacement instruction. Diagnosis needs the matching component and EVAP-system information to explain the high comparison. Repair verification should demonstrate credible relative pressure under the proper conditions; clearing memory or observing an unrelated normal electrical reading is insufficient.

## Source and scope

[Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021, physical PDF pages 321, 323](https://vwts.ru/diag/engine-drna-dsfb-dsfe-dsff-arteon-diagnostic-eng.pdf#page=321). Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021; engine control 2021/2022 MY. Original manufacturer PDF mirrored by VWTS; physical PDF page references.
