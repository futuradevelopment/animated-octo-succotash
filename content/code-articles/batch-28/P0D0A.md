---
{"entryId":"generic-p0d0a","code":"P0D0A","title":"P0D0A: Positive charging-contactor driver command mismatch","description":"P0D0A compares commanded and actual positive charging-contactor control-circuit behavior in the cited GM system.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[555]}],"authoringBatch":"batch-28"}
---

# P0D0A: Positive charging-contactor driver command mismatch

## What P0D0A proves

In the cited GM charging system, P0D0A concerns the positive charging-contactor control circuit. The controller compares its requested driver state with electrical feedback. This is different from directly proving that the high-voltage contact surfaces are welded or that battery voltage is absent beyond the contactor.

The diagnostic has state-dependent criteria. With the driver off, an output above 4 volts is an open-load indication; a reading above supply voltage minus 0.4 volt is the listed short-to-battery indication. With the driver on, current-sense feedback below 57 milliamps is the open-circuit criterion. These numbers refer to control-driver diagnostics, not traction-battery voltage limits.

## Why commanded state is essential

The same observed voltage cannot be interpreted correctly without knowing whether the controller requested the contactor on or off. A technician needs the command, feedback and supporting supply measurement together. The table explicitly says this diagnostic cannot detect a short-to-ground fault, so absence of P0D0A does not certify every possible circuit failure has been excluded.

The 12-volt battery must be above 10.2 volts for this monitor. It operates continuously when qualified and uses 40 failures in 50 samples at 12.5 milliseconds per sample. The documented passing duration is 625 milliseconds.

Diagnosis should remain focused on the positive control channel identified by the code while considering the supply qualification. The table does not authorize contactor replacement from the code alone, and it is not a safe-isolation procedure. High-voltage access and control-circuit testing require appropriately trained personnel using vehicle-specific instructions.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 555](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=555).
