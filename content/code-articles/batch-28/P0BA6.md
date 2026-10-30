---
{"entryId":"generic-p0ba6","code":"P0BA6","title":"P0BA6: Block 22 low logic includes the adjacent block","description":"In GM’s 2009 monitor, P0BA6 can qualify when block 21 or block 22 reports below 2 volts, making adjacent readings essential.","status":"draft","sourceReview":"checked","scope":"09OBDG13 2-Mode Hybrid Diagnostics — 2009 Diagnostic Parameters, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2009-13-2-mode-hybrid"],"sourcePages":[{"sourceId":"gm-2009-13-2-mode-hybrid","pages":[269]}],"authoringBatch":"batch-28"}
---

# P0BA6: Block 22 low logic includes the adjacent block

The 2009 two-mode hybrid table identifies P0BA6 as block 22 voltage out of range low. Its actual test includes an OR condition: either block 21 or block 22 can provide the below 2-volt reading. A description reduced to “replace block 22” would discard that diagnostic distinction.

## Keep the adjacent measurement

Record both block values and the associated controller state. If the adjacent block is the reading that crosses the boundary, the code still fits the published condition. It does not establish that the physical battery section named in a scanner's shortened title is the defective component.

Qualification requires eight failures among ten samples at 100-millisecond intervals. The table's 0.8-second duration describes accumulated failed observations. A single low snapshot cannot reproduce that evidence on its own.

## Verify the support conditions

The battery controller must be in RUN with its low-voltage system between 9 and 18 volts. Those prerequisites matter both for the original event and for judging a later retest. The document supplies no universal wiring resistance limit or cell-to-channel map.

This is a historical block-measurement calibration, not a standard for every vehicle reporting voltage-sense V. A qualified high-voltage technician should establish the actual pack architecture and sensing circuit before deciding on further work. The useful outcome is a supported explanation of which reading failed and under what conditions, rather than a parts choice based only on P0BA6.

## Source and applicability

09OBDG13 2-Mode Hybrid Diagnostics — 2009 Diagnostic Parameters, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 269](https://gsi.ext.gm.com/gmspo/mode6/pdf/2009/09OBDG13%202-Mode%20Hybrid%20Diagnostics.pdf#page=269).
