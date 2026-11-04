---
{"entryId": "nissan-b24ed", "code": "B24ED", "title": "B24ED: The suffix separates voltage shortage from high compressor current", "description": "Nissan B24ED-1C and B24ED-97 require different electrical and refrigerant investigations despite a shared current-consumption label.", "status": "draft", "sourceReview": "checked", "scope": "Nissan Ariya FE0 factory-manual thermal management procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.", "sourceIds": ["nissan-ariya-fe0-thermal-20261102"], "sourceLocators": [{"sourceId": "nissan-ariya-fe0-thermal-20261102", "locator": "B24ed-1c Electric Compressor > DTC Description, Confirmation Procedure and DTC Diagnosis Procedure; B24ed-97 Electric Compressor > DTC Description, Confirmation Procedure and DTC Diagnosis Procedure"}], "authoringBatch": "batch-50"}
---

# B24ED: The suffix separates voltage shortage from high compressor current

## The base label hides two different conditions

The Ariya B24ED-1C row describes the auto amplifier receiving a voltage-shortage signal from the compressor while rotation is requested. B24ED-97 instead describes compressor input current of at least 13.5 A. Both are monitored in READY with diagnosis listed as under one second, but their evidence is not interchangeable.

For -1C, compressor operation stops. For -97, speed is limited. Those different protective responses reinforce the need to retain the suffix rather than describe every B24ED occurrence simply as compressor overcurrent.

## Supply-path checks differ from refrigerant-load checks

The -1C procedure checks the battery and front inverter before the high-voltage harness and junction-box paths. Its final compressor branch follows those supply checks. A low-input report at the compressor can therefore originate outside the compressor assembly.

The -97 route checks refrigerant leakage, cooling-fan operation and the refrigerant cycle. It then specifies recovery and recharge with the correct amount followed by an operating observation before its compressor branch. Excess refrigerant is among the listed possibilities, so indiscriminate topping up is inappropriate.

Save the exact suffix, operating conditions and related HVAC, battery and inverter results. Both high-voltage supply testing and refrigerant servicing require qualified personnel using the matching procedure. A generic code reader that drops the suffix omits the distinction needed to select the right diagnostic path.

## Source and scope

[Nissan factory procedure, reproduced by niariya.com](https://www.niariya.com/dtc_diagnosis-3171.html#b24ed_1c_electric_compressor). Exact section: B24ed-1c Electric Compressor, B24ed-97 Electric Compressor.

Nissan Ariya FE0 factory-manual thermal management procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.
