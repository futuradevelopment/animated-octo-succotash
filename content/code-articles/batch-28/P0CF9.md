---
{"entryId":"generic-p0cf9","code":"P0CF9","title":"P0CF9: Charging-switch pilot voltage outside its test window","description":"P0CF9 checks the GM control-pilot charging switch using a normalized voltage window during an internal disconnected-cord test.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[600]}],"authoringBatch":"batch-28"}
---

# P0CF9: Charging-switch pilot voltage outside its test window

## A switch test, not a charge-rate code

GM’s documented P0CF9 monitor evaluates the control-pilot charging switch after earlier pilot diagnostics have completed in the same key cycle. The charging switch must be closed, the CPDIAG switch asserted, and the charge cord reported not connected. System voltage must exceed 9 volts. These conditions identify an internal diagnostic sequence rather than an ordinary charging session.

The tested value is charging-system control-pilot voltage divided by battery voltage. A normalized value above 28% or below 14% fails the stated range check. The two-sided window matters: this performance code can result from either direction of deviation, so its title alone does not establish a short to ground or a short to a voltage supply.

## How the conditions guide investigation

The failure counter requires 30 failed samples within a 50-sample window at 100 milliseconds per sample. A technician should distinguish an incomplete test from a completed, failing test. Previous circuit and performance diagnostics must already have run; a collection of related pilot faults should be interpreted in that order rather than treating every code as an independent failed part.

The normalization also makes the battery-voltage reading relevant. Comparing an unscaled pilot voltage with the percentage thresholds would be an invalid test. Record the numerator, reference and commanded switch states from the matching diagnostic data where available.

Do not manually bridge charging-interface switches to recreate these conditions. This article explains the controller’s logic; component tests and safe access require the applicable vehicle procedure. The cited window belongs to this GM calibration, not every implementation of P0CF9.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 600](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=600).
