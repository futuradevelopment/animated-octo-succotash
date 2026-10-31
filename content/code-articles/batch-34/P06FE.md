---
{"entryId": "generic-p06fe", "code": "P06FE", "title": "P06FE: Volkswagen CJAA cold-start intake-airflow control performance", "description": "P06FE identifies cold-start diesel intake-airflow control performance in Volkswagen's 2014 CJAA chart.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen 2014 Golf/GTI/Golf R Quick Reference Specification Book, January 2014; CJAA chart only. Source-scoped monitor explanation, not universal thresholds.", "sourceIds": ["vw-2014-golf-gti-r-dtc-quick-reference"], "sourcePages": [{"sourceId": "vw-2014-golf-gti-r-dtc-quick-reference", "pages": [42, 53, 64]}], "authoringBatch": "batch-34"}
---

# P06FE: Volkswagen CJAA cold-start intake-airflow control performance

P06FE identifies cold-start diesel intake-airflow control performance in Volkswagen's 2014 CJAA chart. Its stated malfunction condition is a valve remaining open beyond a 12-percent position criterion.

## This is a position-performance result

The source does not describe P06FE as an airflow sensor's low-voltage fault. It points to a valve-open condition within cold-start airflow control. The position observation and the operating purpose should remain attached to the code when interpreting a shortened scanner label.

The CJAA chart separately lists throttle actuator circuit faults and general stuck-open or stuck-closed entries. Those electrical and performance codes provide different evidence. A cold-start performance result does not, on its own, establish a broken actuator wire or identify a failed mass-airflow sensor.

## Avoid turning the percentage into a universal setting

The 12-percent figure is the manufacturer's monitor criterion in this chart, not a recommended valve adjustment or a normal opening for all operating conditions. The quick reference does not specify the complete cold-start enabling conditions or a duration requirement.

Professional diagnosis should use the exact CJAA control-system information to compare command, reported position and relevant circuit faults. The source provides no cleaning method, adaptation reset or replacement instruction. It supports the performance distinction while leaving the physical cause to further testing.

Source: Volkswagen manufacturer diagnostic chart, [physical PDF page 42](https://static.nhtsa.gov/odi/tsbs/2014/MC-10122269-9999.pdf#page=42); [physical PDF page 53](https://static.nhtsa.gov/odi/tsbs/2014/MC-10122269-9999.pdf#page=53); [physical PDF page 64](https://static.nhtsa.gov/odi/tsbs/2014/MC-10122269-9999.pdf#page=64).
