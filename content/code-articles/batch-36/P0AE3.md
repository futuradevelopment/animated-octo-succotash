---
{"entryId": "generic-p0ae3", "code": "P0AE3", "title": "P0AE3: Precharge bus voltage did not rise as expected", "description": "The GM P0AE3 monitor infers a stuck-open precharge path from insufficient bus voltage during a defined precharge sequence.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG01 diagnostic monitor; document section stated in article; per-vehicle and calibration applicability must be verified.", "sourceIds": ["gm-2018-18obdg01-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg01-hybrid-diagnostics", "pages": [944]}], "authoringBatch": "batch-36"}
---

# P0AE3: Precharge bus voltage did not rise as expected

P0AE3 names a hybrid/EV battery precharge contactor circuit stuck open condition. The 2018 GM HPC2/VICM common table diagnoses it from insufficient propulsion negative-bus voltage during precharge. It does not directly observe the contactor's internal mechanical movement.

## The sequence supplies the meaning

The listed failure threshold is bus voltage below 5 V. The precharge contactor state must have been closed for 0.090 seconds, the propulsion negative contactor must be open, the bus-voltage measurement must not be faulted, and battery heating mode must be off.

Eight failed samples out of ten at 12.5-millisecond intervals satisfy the row's evaluation. The test executes once per controller wake-up during precharge and is classified Type A, one trip.

## A low voltage outside this sequence is different evidence

Retain the precharge state, elapsed time, bus-voltage validity and actual voltage together. A low bus reading when precharge has not been requested does not reproduce this test. Likewise, a sensor fault can make a voltage-based conclusion unreliable, which is why measurement validity is an enable condition.

The vehicle-specific procedure must distinguish a nonresponsive contactor path from other causes of the missing voltage response. Do not bypass precharge or bridge contactors to test that hypothesis. High-voltage diagnosis requires qualified personnel. Verification should include the prescribed precharge sequence and an eligible monitor result, not just an erased stored code.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 944](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG01%20Hybrid%20Diagnostics.pdf#page=944).
