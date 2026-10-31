---
{"entryId": "generic-p04de", "code": "P04DE", "title": "P04DE: cold-start EGR excessive flow compares modeled and measured air mass", "description": "Audi's CPNB P04DE monitor uses an air-mass ratio with a turbo-position-dependent limit rather than a single fixed EGR-flow number.", "status": "draft", "sourceReview": "checked", "scope": "Audi 2014 A6/S6 Quick Reference Specification Book, September 2013, Engine Code CPNB, DTC chart. Thresholds only describe this documented monitor; not universal across other makes or engines.", "sourceIds": ["audi-2014-a6-s6-reference-2013-09"], "authoringBatch": "batch-31", "sourcePages": [{"sourceId": "audi-2014-a6-s6-reference-2013-09", "pages": [354]}]}
---

# P04DE: cold-start EGR excessive flow compares modeled and measured air mass

P04DE describes excessive EGR flow during cold start. In Audi's CPNB chart, the criterion compares a ratio of modeled and measured air-mass flow with a limit that depends on turbocharger position. The model, measurement and operating position are therefore all part of the documented evidence.

## Excessive flow is an inferred system result

The row does not state that the controller directly measured an EGR valve physically stuck open. As diagnostic interpretation, an abnormal air-mass relationship needs explanation through the relevant system checks; the code alone does not isolate the valve from the information used to evaluate flow.

Turbocharger position also prevents the limit from being treated as a single constant. Comparing observations from different positions without the applicable calibration could misrepresent what the controller considers excessive.

## Retain cold-start conditions

A normal reading after warm-up does not reproduce the situation named in the fault. Preserve the available cold-start event information and identify the correct CPNB diagnostic procedure. Audi's quick-reference row does not publish the full ratio function, a numeric universal threshold or a mandatory repair. This is a scoped explanation of the monitor, not permission to apply another engine's airflow target to P04DE.

Source: [Audi 2014 A6/S6 Quick Reference Specification Book](https://static.nhtsa.gov/odi/tsbs/2013/MC-10243900-9999.pdf#page=354).
