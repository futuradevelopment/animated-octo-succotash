---
{"entryId":"generic-p0ce9","code":"P0CE9","title":"P0CE9: Electronics coolant-pump control line has a recorded circuit fault","description":"P0CE9 addresses the electronics coolant-pump control line; the cited GM row is incomplete and does not justify inventing missing fault branches.","status":"draft","sourceReview":"needs-review","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[565]}],"authoringBatch":"batch-28"}
---

# P0CE9: Electronics coolant-pump control line has a recorded circuit fault

P0CE9 is listed under power-electronics cooling diagnostics in this GM source. Its component heading identifies the coolant-pump control circuit, and the visible malfunction wording explicitly includes an open control line. The original row ends mid-description, so this article does not assume additional short-circuit branches from similar pump codes.

## Check the conditions that are documented

System voltage must exceed 10.2 volts, the pump-enable state must be true, and the hardware I/O control-circuit status must not be indeterminate. These conditions matter because an unavailable or indeterminate status is not the same evidence as a definite reported circuit fault.

The time column provides 16 failed samples out of 20 but cuts off before a complete sampling interval. A duration is therefore not calculated or borrowed from the neighboring P0CEA row.

## Keep electrical status separate from thermal performance

P0CE9 concerns the command-path circuit information. The adjacent performance diagnostic uses temperatures and operating prerequisites to assess pump behavior. A circuit complaint should not be treated as direct proof of poor coolant flow or an automatic instruction to replace the pump.

A qualified technician needs the exact vehicle circuit procedure, original control status and enable history to continue. The incomplete source wording remains a review flag. No universal connector pinout, resistance limit or high-voltage service step is inferred from this partial monitor row.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 565](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=565).
