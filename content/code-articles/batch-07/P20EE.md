---
{"entryId":"generic-p20ee","code":"P20EE","title":"P20EE: SCR efficiency is a filtered model-based judgment","description":"P20EE evaluates a filtered estimate of SCR ammonia-storage performance under qualified NOx and DEF conditions.","status":"draft","sourceReview":"checked","scope":"Documented 2025 GM diagnostic parameter monitor in 25OBDG04B.pdf; model, engine and calibration applicability require vehicle-specific confirmation.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[780,781,782,783]}],"authoringBatch":"batch-07"}
---

# P20EE: SCR efficiency is a filtered model-based judgment

P20EE is a selective catalytic reduction efficiency code. The reviewed GM SCR1 strategy estimates maximum ammonia-storage capacity using a model, then evaluates deviations from a nominal value. It does not simply compare one upstream NOx reading with one downstream reading at an arbitrary moment.

## Filtering changes the meaning of a snapshot

The diagnostic averages 300 valid samples taken at 250-millisecond intervals and then applies an exponentially weighted moving-average filter. The printed fail and repass thresholds for the resulting parameter are both 0.35000. Fast-initial, rapid-response and standard modes use different filter gains and permitted test counts.

Accordingly, a single favorable NOx ratio or a momentary poor ratio is not the same evidence as the completed filtered result. The calibration also evaluates the model's supporting conditions rather than accepting every operating sample.

## What must be credible first

The source requires reliable upstream and downstream NOx measurements, a ready DEF system and absence of relevant chemical-model, thermal-model, flow, temperature and dosing faults. It also conditions evaluation on DEF availability, concentration when the sensor is fitted, and appropriate operating states. The continuation includes additional thermal and model-confidence gates.

Verification should establish that those prerequisites permit an actual SCR efficiency test and review the resulting filtered parameter. A code-free interval while dosing or sensing faults inhibit evaluation is inconclusive. The table lists Type A, one-trip reporting but does not prove the catalyst needs replacement or identify a specific contamination cause. This explanation is bounded to the documented 2025 GM SCR1 monitor and requires vehicle-specific applicability confirmation.

Source: [GM monitor, PDF page 780](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=780); [GM monitor, PDF page 781](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=781); [GM monitor, PDF page 782](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=782); [GM monitor, PDF page 783](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=783).
