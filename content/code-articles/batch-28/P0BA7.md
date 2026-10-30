---
{"entryId":"generic-p0ba7","code":"P0BA7","title":"P0BA7: Block 22 high reporting needs a sustained record","description":"GM’s historical P0BA7 check observes block 22 above 20 volts and qualifies the result across multiple samples.","status":"draft","sourceReview":"checked","scope":"09OBDG13 2-Mode Hybrid Diagnostics — 2009 Diagnostic Parameters, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2009-13-2-mode-hybrid"],"sourcePages":[{"sourceId":"gm-2009-13-2-mode-hybrid","pages":[269]}],"authoringBatch":"batch-28"}
---

# P0BA7: Block 22 high reporting needs a sustained record

P0BA7 is a high-reading fault for block 22 in the cited 2009 GM hybrid controller. The printed threshold is a reported block voltage above 20 volts. That describes what the controller sees; it does not independently demonstrate the physical condition of the battery or identify a repair.

## Separate a spike from a qualified fault

GM requires eight failing samples in a ten-sample window, checking every 100 milliseconds. The listed 0.8-second failure accumulation is meaningful when reviewing a captured voltage trace. A later normal value does not explain away an earlier qualifying sequence, and one isolated high sample is not the complete diagnostic.

The controller must be in RUN, and the 12-volt support supply must remain within 9–18 volts. Include that supply information when assessing the credibility of the report and the validity of a repeat test.

## Identify the test actually stored

P0BA7 is an upper-limit check. The neighboring P0BA5 uses a scaled block-to-pack rationality comparison. Those tests can fail for different recorded reasons, so their descriptions should not be blended into one battery-imbalance conclusion.

Have the applicable vehicle documentation establish how the V sense designation relates to the actual pack. The historical table does not provide a universal connector location or specify battery replacement. Physical high-voltage inspection must be performed by suitably trained personnel using the correct service procedure.

## Source and applicability

09OBDG13 2-Mode Hybrid Diagnostics — 2009 Diagnostic Parameters, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 269](https://gsi.ext.gm.com/gmspo/mode6/pdf/2009/09OBDG13%202-Mode%20Hybrid%20Diagnostics.pdf#page=269).
