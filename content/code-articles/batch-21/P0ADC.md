---
{"entryId": "generic-p0adc", "code": "P0ADC", "title": "P0ADC: Contactor control-high classification uses low feedback duty", "description": "P0ADC monitors a low encoded control-feedback value for the documented contactor high-circuit fault.", "status": "draft", "sourceReview": "checked", "scope": "2009 General Motors diagnostic parameter file 09OBDG08 Engine Diagnostics.pdf. Section-specific modules and calibrations; no per-code model or engine applicability established.", "sourceIds": ["gm-2009-08-engine"], "sourcePages": [{"sourceId": "gm-2009-08-engine", "pages": [137]}], "authoringBatch": "batch-21"}
---

# P0ADC: Contactor control-high classification uses low feedback duty

GM's BAS hybrid P0ADC entry is labeled contactor shorted high, while its control-feedback criterion is below five percent. The diagnostic label and the encoded feedback direction are therefore not interchangeable. A generic high-circuit description cannot be converted directly into a connector-voltage test.

## Interpret the correct feedback channel

The monitored percentage belongs to contactor-control feedback. It is not hybrid battery voltage, state of charge or proof that the contactor's power contacts are physically open or closed. The source qualifies the test with a closed contactor state and the specified controller operating states.

The counter requires 188 failures in 250 observations, sampled every 20 milliseconds. An open service-disconnect status and certain existing contactor faults prevent the ordinary comparison. A blocked monitor is not a pass.

## Control integrity is separate from electrical separation

The adjacent P0AA1 strategy evaluates voltage behavior after an opening command. P0ADC instead classifies a control-circuit condition. The code alone does not identify a welded contact, faulty coil or particular wire.

Preserve command, feedback and detailed status records for the exact hybrid service procedure. Do not bypass contactor controls or probe the pack from this summary. Verification requires correct feedback, completed monitoring and any prescribed isolation/function checks. A cleared diagnostic record does not establish that the contactor control or the high-energy system is safe and functioning correctly.

## Source and applicability

2009 General Motors diagnostic parameter file 09OBDG08 Engine Diagnostics.pdf. Section-specific modules and calibrations; no per-code model or engine applicability established. This explanation describes the documented monitor, not a universal repair procedure.

[GM diagnostic parameters, PDF page 137](https://gsi.ext.gm.com/gmspo/mode6/pdf/2009/09OBDG08%20Engine%20Diagnostics.pdf#page=137).
