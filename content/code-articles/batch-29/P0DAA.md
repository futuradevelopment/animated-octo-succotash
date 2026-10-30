---
{"entryId":"generic-p0daa","code":"P0DAA","title":"P0DAA: charging isolation uses measurement history and a state-dependent limit","description":"GM P0DAA evaluates charging-bus isolation resistance with a latest-reading requirement and a multi-wakeup history, not ten rapid scan samples.","status":"draft","sourceReview":"checked","scope":"GM 2015 15OBDG01 Hybrid Diagnostics, cited HCP2/VICM charging-isolation monitor. Historical calibration only; no vehicle-specific isolation-test or safe-access procedure is supplied.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[558]}],"authoringBatch":"batch-29"}
---

# P0DAA: charging isolation uses measurement history and a state-dependent limit

P0DAA is a charging-system isolation diagnostic in the cited GM HCP2 table. It concerns resistance between the high-voltage charging bus and chassis ground. A low resistance indicates inadequate isolation; it does not identify which component created the leakage path.

## The history rule changes interpretation

GM requires the latest measurement to be below the applicable limit and at least five of the last ten measurements to be below it. No more than one isolation measurement is taken per HCP2 wakeup cycle. Ten consecutive readings on a scanner are therefore not necessarily the ten diagnostic samples in this history.

The printed boundary also depends on fault state: 325 kΩ when P0DAA is not active and 400 kΩ when it is active. Both entries refer to Charge Only mode. The source describes a passing measurement as one exceeding the applicable threshold.

## A pass is not permission for physical access

Preserve the current fault state, charge mode and available measurement history. Those details explain why a single reading cannot be interpreted using one fixed boundary without knowing the controller's state.

The code does not prove a failed battery or charger by itself. It also does not establish that high-voltage circuits have discharged. Isolation assessment and safe de-energization are separate questions. Qualified personnel must follow the matching vehicle procedure to locate the cause and verify the repair. This article provides no insulation-tester connection, bypass or energized-circuit testing instructions.

## Source and applicability

GM 2015 15OBDG01 Hybrid Diagnostics, cited HCP2/VICM charging-isolation monitor. Historical calibration only; no vehicle-specific isolation-test or safe-access procedure is supplied.

[General Motors source, physical page 558](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=558)
