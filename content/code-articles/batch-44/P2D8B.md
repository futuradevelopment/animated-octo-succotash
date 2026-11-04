---
{"entryId": "generic-p2d8b", "code": "P2D8B", "title": "P2D8B: Jetta fan 2 module's internal-short diagnostic signal", "description": "The DJXA table identifies fan 2 module performance through a coded feedback sequence rather than an airflow measurement.", "status": "draft", "sourceReview": "needs-review", "scope": "Volkswagen Jetta factory Generic Scan Tool manual, Edition 04.2020; DJXA engine control module, 2020 MY table.", "sourceIds": ["vw-jetta-djxa-gst-2020"], "authoringBatch": "batch-44", "sourcePages": [{"sourceId": "vw-jetta-djxa-gst-2020", "pages": [366, 483, 484, 485]}]}
---

# P2D8B: Jetta fan 2 module's internal-short diagnostic signal

P2D8B is the fan 2 control-module performance entry in Volkswagen's 2020 DJXA table. The monitor concerns an internal short-circuit diagnostic. It uses an error counter greater than three and a ground-signal duration band of 5.7–6.3 seconds, followed by a delay band of 1.9–2.1 seconds. These timings describe diagnostic feedback, not how long a fan may safely remain stalled.

## The fan 2 internal-short feedback pattern

The source lists continuous monitoring, zero seconds of additional monitoring time, and MIL illumination after two driving cycles. It does not publish a numerical airflow, fan-speed or module-resistance threshold for this code. Such values must not be borrowed from a nearby fan fault.

The row contains an editorial ambiguity: it calls the feedback signal one sent by the pump, although the DTC description and diagnostic reference identify radiator fan VX57. That wording needs reconciliation against the exact vehicle documentation. It does not justify treating P2D8B as a coolant-pump fault.

The referenced fan procedure first establishes appropriate electrical prerequisites and checks power supply and control wiring. Replacement follows only after the supported electrical branch, with a later ECM-connection check if the fault recurs. The internal-short description therefore remains a reported diagnostic condition, not permission to skip external circuit checks.

Preserve the complete fan-related fault set, commanded state and feedback information. Professional service should confirm the correct fan arrangement and resolve the source wording before component selection. Fans can start unexpectedly; do not obstruct the blades or bridge their supply to reproduce the fault. Verification should demonstrate normal operation without the original diagnostic report returning.

## Source and applicability

[Volkswagen factory manual, P2D8B](https://vwts.ru/diag/engine-djxa-09s-jetta-7-diagnostic-eng.pdf#page=366). Physical PDF pages 366, 483, 484, 485. Volkswagen Jetta factory Generic Scan Tool manual, Edition 04.2020; DJXA engine control module, 2020 MY table. This explains the documented monitor; it does not establish applicability to other vehicles.
