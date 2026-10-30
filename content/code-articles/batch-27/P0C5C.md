---
{"entryId":"generic-p0c5c","code":"P0C5C","title":"P0C5C: motor A resolver circuit B low monitors the S24 reference","description":"GM P0C5C evaluates a low S24 reference voltage, separately from the S13 circuit and resolver-learning diagnoses.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[292]}],"authoringBatch":"batch-27"}
---

# P0C5C: motor A resolver circuit B low monitors the S24 reference

P0C5C is motor A position-sensor circuit B low in GM's parameter table. The monitored quantity is resolver S24 circuit reference voltage. Circuit B here is a resolver-channel designation, not a reference to drive motor B.

## Keep the channel and failure direction distinct

The low criterion is S24 reference voltage below 0.5 V with the wakeup signal on. GM uses fifty qualifying counts among eighty at a 10.4 ms rate, with one-trip reporting. The high-range companion uses a different threshold and shorter qualifying-count filter.

The nearby S13 circuit has its own codes. Similar numerical limits do not make S13 and S24 interchangeable physical test points. Preserve the exact code and channel report when preparing a diagnostic record.

## Verify the electrical path before inferring position error

A low reference-voltage diagnosis does not prove that the rotor's learned offset is incorrect or that a mechanical adjustment is required. Related circuit, performance and not-learned codes describe different checks and should remain separate evidence.

The source does not identify connector pins, mandate resolver replacement or supply a safe direct-probing procedure. The actual vehicle's hybrid service information must map S24 and define the checks. Qualified personnel must establish high-voltage isolation for physical access, then confirm credible reference behavior during eligible controller operation rather than relying only on cleared fault memory.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 292](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=292).
