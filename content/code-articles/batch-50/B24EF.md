---
{"entryId": "nissan-b24ef", "code": "B24EF", "title": "B24EF: A voltage drop can prevent compressor control under load", "description": "Nissan B24EF-97 checks battery condition, refrigerant leakage, fan operation and the cycle before replacing the compressor.", "status": "draft", "sourceReview": "checked", "scope": "Nissan Ariya FE0 factory-manual thermal management procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.", "sourceIds": ["nissan-ariya-fe0-thermal-20261102"], "sourceLocators": [{"sourceId": "nissan-ariya-fe0-thermal-20261102", "locator": "B24ef-97 Electric Compressor > DTC Description, Confirmation Procedure and DTC Diagnosis Procedure"}], "authoringBatch": "batch-50"}
---

# B24EF: A voltage drop can prevent compressor control under load

## The wording describes loss of control during a voltage drop

In the Ariya B24EF-97 entry, compressor control becomes impossible because of a drop in the high-voltage system. The condition is monitored in READY for at least two seconds, and compressor operation stops. The phrase input high voltage in the label refers to the EV supply system; it does not mean this row detects excessive voltage.

The source lists the battery, compressor, cooling fan, excess refrigerant and an abnormal refrigerant cycle as possible causes. This combination connects electrical supply and the load imposed by the refrigeration system.

## Follow the battery and cooling checks before the final branch

Nissan checks the Li-ion battery first, then leakage, cooling-fan operation and the refrigerant cycle. The compressor replacement branch follows when those inspections are normal. That order is more specific than assuming every compressor shutdown is an internal compressor failure.

Confirmation creates air-conditioning demand in READY at a full-cold setting. The original load and charging state are useful history, but should not be treated as proof of a battery defect without the required workflow.

Retain companion battery and HVAC codes and any recent refrigerant service information. A qualified workshop must evaluate both the high-voltage and refrigerant sides with the correct equipment. Repeatedly resetting the warning or adding refrigerant cannot demonstrate that the supply remains controllable under the relevant operating load.

## Source and scope

[Nissan factory procedure, reproduced by niariya.com](https://www.niariya.com/dtc_diagnosis-3171.html#b24ef_97_electric_compressor). Exact section: B24ef-97 Electric Compressor.

Nissan Ariya FE0 factory-manual thermal management procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.
