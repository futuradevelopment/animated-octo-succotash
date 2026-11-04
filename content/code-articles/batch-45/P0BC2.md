---
{"entryId": "generic-p0bc2", "code": "P0BC2", "title": "P0BC2: Honda high-voltage battery temperature sensor 5 circuit", "description": "Honda P0BC2 uses the fifth battery temperature channel and a specific companion-code branch before battery replacement.", "status": "draft", "sourceReview": "checked", "scope": "Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability.", "sourceIds": ["honda-insight-gen3-dtc-5849", "honda-insight-gen3-dtc-5994"], "sourceLocators": [{"sourceId": "honda-insight-gen3-dtc-5849", "locator": "PDF physical page 1–4; DTC Troubleshooting: P0A9B (972), P0AC5 (973), P0ACA (974), P0AE8 (975), P0BC2 (976); P0BC2 detection or complete troubleshooting branch"}, {"sourceId": "honda-insight-gen3-dtc-5994", "locator": "PDF physical page 1–2; DTC Advanced Diagnostics: P0BC2; P0BC2 detection or complete troubleshooting branch"}], "authoringBatch": "batch-45", "sourcePages": [{"sourceId": "honda-insight-gen3-dtc-5849", "pages": [1, 2, 3, 4]}, {"sourceId": "honda-insight-gen3-dtc-5994", "pages": [1, 2]}]}
---

# P0BC2: Honda high-voltage battery temperature sensor 5 circuit

## The fifth temperature input has a defined electrical limit

In the cited Insight factory extracts, P0BC2 means **HV battery temperature sensor 5 circuit**. The battery condition monitor module continuously watches five temperature inputs. For sensor 5, the monitor detects output of at least 4.83 V or no more than 0.72 V lasting three seconds or longer under its specified enable conditions.

The result concerns signal integrity, not an independently measured battery overheating event. Honda specifies two-drive-cycle detection. The first event stores a pending fault; a qualifying repeat can store confirmed fault data and illuminate the MIL and POWER SYSTEM indicator.

## Companion faults determine which chart applies

The troubleshooting page first verifies the failure using the recorded conditions and warns that detection may require at least ten minutes. A repeated P0BC2 leads to checks for P0BC3, P0BC4 and P0BC5, which are sensor 5's range/performance, low and high faults. If any is present, Honda directs diagnosis to that code's procedure.

The battery-pack replacement branch applies when P0BC2 repeats without those listed companions. Honda then identifies sensor 5 as faulty. A non-repeat result is instead considered intermittent and investigated through the original freeze data or onboard snapshot. This is a materially narrower conclusion than replacing the pack whenever P0BC2 appears in history.

## Retain the channel identity

A useful repair record preserves sensor number, initial readings and pending/confirmed status before clearing. The shared five-sensor flow contains different companion-code sets for each channel, and those should not be exchanged. Verify model applicability for these third-generation Insight extracts and have a qualified hybrid technician conduct operating verification and any battery enclosure work.

## Sources and applicability

[DTC Troubleshooting: P0A9B (972), P0AC5 (973), P0ACA (974), P0AE8 (975), P0BC2 (976) (Honda manual extract 5849)](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Troubleshooting_%20P0A9B%20(972),%20P0AC5%20(973),%20P0ACA%20(974),%20P0AE8%20(975),%20P0BC2%20(976)%205849.pdf#page=1); [DTC Advanced Diagnostics: P0BC2 (Honda manual extract 5994)](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P0BC2%205994.pdf#page=1). Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability. These are manufacturer procedures for that documented configuration, not universal repair instructions.
