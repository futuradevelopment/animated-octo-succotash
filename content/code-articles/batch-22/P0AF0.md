---
{"entryId": "generic-p0af0", "code": "P0AF0", "title": "P0AF0: Inverter-A circuit high is a cold indication with a startup qualification", "description": "Understand the GM P0AF0 temperature-input monitor and the warmup condition applied to a fault present at startup.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [289]}], "authoringBatch": "batch-22"}
---

# P0AF0: Inverter-A circuit high is a cold indication with a startup qualification

P0AF0 is the high-voltage end of inverter A's first temperature-sensor circuit. GM describes PIM Temp 0 below −40°C, corresponding to a signal near 5V. The apparent cold temperature is part of the circuit-fault interpretation, not proof that the inverter is physically that cold.

## Startup and warmup affect eligibility

The wakeup signal must be on. If the malfunction exists at the start of the trip, the row adds accumulated inverter warmup time of at least 1.5 minutes above the stated torque threshold. This prevents the startup context from being ignored when interpreting a later recorded failure.

The source lists a 250-of-350 count decision at approximately 10.4ms intervals. The exact row belongs to inverter A's PIM Temp 0 channel and should not be replaced with another sensor's timing.

## Keep the channel separate from the average

Record the individual temperature, validity, wakeup state and available warmup history. An inverter average that looks reasonable may still conceal an out-of-range individual input. The companion P0AEE rationality check is a separate diagnostic path.

The table supplies no connector position, resistance curve or proof of a particular open circuit. The applicable inverter service information must determine physical testing and repair. High-voltage access requires a qualified technician following the prescribed isolation and verification process, rather than live probing based on the near-5V description.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 289](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=289).
