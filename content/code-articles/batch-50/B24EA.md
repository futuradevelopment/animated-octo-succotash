---
{"entryId": "nissan-b24ea", "code": "B24EA", "title": "B24EA: Compressor shutdown is a consequence code with named priorities", "description": "Nissan B24EA-97 directs diagnosis to the compressor temperature faults that caused protective shutdown or speed limitation.", "status": "draft", "sourceReview": "checked", "scope": "Nissan Ariya FE0 factory-manual thermal management procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.", "sourceIds": ["nissan-ariya-fe0-thermal-20261102"], "sourceLocators": [{"sourceId": "nissan-ariya-fe0-thermal-20261102", "locator": "B24ea-97 Electric Compressor > DTC Description, Confirmation Procedure and DTC Diagnosis Procedure"}], "authoringBatch": "batch-50"}
---

# B24EA: Compressor shutdown is a consequence code with named priorities

## The entry records a protective response

The Ariya B24EA-97 monitor identifies compressor shutdown associated with B24D8-4B or B24F9-1C. It is monitored in READY, with diagnosis listed as less than one second. Compressor operation is stopped or speed is limited as protection.

The important distinction is that B24EA does not introduce an independent component test. Nissan explicitly links it to the named compressor internal-temperature or intelligent-power-module temperature-sensor faults. A scan containing all three should not be interpreted as three unrelated failed assemblies.

## Diagnose the initiating fault before the consequence

The factory branch instructs the technician to follow the applicable B24D8 or B24F9 procedure. Those entries contain the evidence needed to investigate why the protective action occurred. Clearing B24EA alone cannot establish that the initiating thermal condition has disappeared.

Confirmation uses air conditioning in READY with a full-cold request. That reproduces compressor demand, but a technician must first determine that operation is safe; repeatedly forcing a thermal shutdown is not a useful owner-level test.

Preserve the complete HVAC scan, including current and historical companion faults, and the sequence of the cooling complaint. A shutdown message may be what the driver notices first even when another code supplies the more specific cause. The source provides no basis to replace the compressor solely because this consequence code is present.

## Source and scope

[Nissan factory procedure, reproduced by niariya.com](https://www.niariya.com/dtc_diagnosis-3171.html#b24ea_97_electric_compressor). Exact section: B24ea-97 Electric Compressor.

Nissan Ariya FE0 factory-manual thermal management procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.
