---
{"entryId": "generic-p0a9b", "code": "P0A9B", "title": "P0A9B: Honda high-voltage battery temperature sensor 1 circuit", "description": "Honda P0A9B watches sensor 1 voltage and routes more specific temperature faults before its battery-pack repair branch.", "status": "draft", "sourceReview": "checked", "scope": "Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability.", "sourceIds": ["honda-insight-gen3-dtc-5849", "honda-insight-gen3-dtc-5612"], "sourceLocators": [{"sourceId": "honda-insight-gen3-dtc-5849", "locator": "PDF physical page 1–4; DTC Troubleshooting: P0A9B (972), P0AC5 (973), P0ACA (974), P0AE8 (975), P0BC2 (976); P0A9B detection or complete troubleshooting branch"}, {"sourceId": "honda-insight-gen3-dtc-5612", "locator": "PDF physical page 1–2; DTC Advanced Diagnostics: P0A9B; P0A9B detection or complete troubleshooting branch"}], "authoringBatch": "batch-45", "sourcePages": [{"sourceId": "honda-insight-gen3-dtc-5849", "pages": [1, 2, 3, 4]}, {"sourceId": "honda-insight-gen3-dtc-5612", "pages": [1, 2]}]}
---

# P0A9B: Honda high-voltage battery temperature sensor 1 circuit

## Sensor 1 is one of five battery temperature inputs

The Honda Insight procedure identifies P0A9B as **HV battery temperature sensor 1 circuit**. Five sensors report battery-module temperature to the battery condition monitor module. For sensor 1, the advanced diagnostic threshold is an output of at least 4.83 V or no more than 0.72 V for three seconds or longer.

This is a signal-voltage test, not proof that the battery reached a particular physical temperature. Monitoring is continuous under the specified enable conditions, including adequate 12-volt supply. Honda uses two drive cycles: the first qualifying event stores a pending fault, while a repeat can store a confirmed fault and freeze data and illuminate the MIL and POWER SYSTEM indicator.

## The specific companion codes take priority

Honda's shared temperature-sensor procedure first reproduces the original freeze-data conditions and warns that detection can take ten minutes or more. If P0A9B returns, its sensor-1 branch checks for P0A9C, P0A9D or P0A9E. Those more specific range, low and high faults go to their own procedures.

Only when P0A9B repeats without those listed companion faults does this branch identify sensor 1 as faulty and direct battery-pack replacement. If the initial fault does not repeat, Honda treats it as intermittent and reviews the original snapshot. The code alone therefore does not establish that a pack must be replaced.

## Scope and safe verification

Preserve pending/confirmed status and the original temperature-signal data before clearing. The five sensors share a factory flow, but each code has its own numbered branch. Match these third-generation Insight extracts to VIN-specific service information and have a qualified hybrid technician perform the operating checks and any battery enclosure work.

## Sources and applicability

[DTC Troubleshooting: P0A9B (972), P0AC5 (973), P0ACA (974), P0AE8 (975), P0BC2 (976) (Honda manual extract 5849)](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Troubleshooting_%20P0A9B%20(972),%20P0AC5%20(973),%20P0ACA%20(974),%20P0AE8%20(975),%20P0BC2%20(976)%205849.pdf#page=1); [DTC Advanced Diagnostics: P0A9B (Honda manual extract 5612)](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P0A9B%205612.pdf#page=1). Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability. These are manufacturer procedures for that documented configuration, not universal repair instructions.
