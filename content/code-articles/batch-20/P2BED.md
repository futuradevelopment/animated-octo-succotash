---
{"entryId": "generic-p2bed", "code": "P2BED", "title": "P2BED: Direct-injection bank 1 rich control needs mode-specific evidence", "description": "Understand Ford P2BED eligibility and why the printed rich threshold must not be silently corrected into a workshop specification.", "status": "draft", "sourceReview": "needs-review", "scope": "Ford 2024–2025 gasoline OBD operation summary, July 16 2024 revision; only the cited monitor and transmission architectures. No individual vehicle fitment or universal calibration is inferred.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [99]}], "authoringBatch": "batch-20"}
---

# P2BED: Direct-injection bank 1 rich control needs mode-specific evidence

P2BED is Ford's direct-injection-mode fuel-control system A rich result for bank 1. The source separately identifies common-mode richness as P0172 and port-injection-mode bank 1 richness as P2BF1. Injection mode is therefore part of the diagnostic meaning.

## Establish the eligible closed-loop observation

The monitor operates continuously during closed-loop fuel control. Ford's example entry conditions include coolant temperature from 70 to 110 degrees Celsius, sufficient load, fuel level at least 10 percent and zero purge duty. A trim value captured outside those conditions does not reproduce the documented evaluation.

The source says the active long-term correction cell is considered with short-term correction. That makes the currently used cell and operating mode more informative than an unrelated stored trim value from another condition.

## Preserve the published threshold limitation

The printed rich formula has an unusual sign and boundary presentation relative to its paired lean line. The original PDF confirms that wording; this article does not insert a missing minus sign or convert it into a trusted universal rich threshold. The applicable calibration must supply the verified limit.

Retain bank 1 correction, injection mode, relevant sensor status and operating conditions. The code does not identify an injector, pump or purge fault by itself. The matched engine procedure must determine why rich control was reported, with the source's ambiguous numerical formula kept separate from its supported mode and eligibility information.

## Source and applicability

Ford 2024–2025 gasoline OBD operation summary, July 16 2024 revision; only the cited monitor and transmission architectures. No individual vehicle fitment or universal calibration is inferred. [Ford PDF, page 99](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=99).
