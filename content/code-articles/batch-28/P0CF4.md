---
{"entryId":"generic-p0cf4","code":"P0CF4","title":"P0CF4: Control-pilot integrity uses internal states as well as signal level","description":"GM P0CF4 contains separate processor-state and pilot-signal integrity checks under defined diagnostic-switch and charging-cord conditions.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[596]}],"authoringBatch":"batch-28"}
---

# P0CF4: Control-pilot integrity uses internal states as well as signal level

P0CF4 is a control-pilot integrity diagnostic in this GM charging-control table. It is broader than a simple high- or low-voltage threshold. The source divides the assessment into two parts involving the main and auxiliary processor logic states and a diagnostic evaluation of the pilot signal.

## Identify which integrity branch is relevant

Part A can fail for a high auxiliary-processor logic state or a low main-processor state, with vehicle-speed or disconnected-cord eligibility. Part B requires the asserted pilot diagnostic switch, open charging and ventilation switches, and a disconnected cord. Its failure alternatives include pilot signal above 55% or below 30%, a low auxiliary-processor state, or a high main-processor state. Those are OR alternatives, not a requirement that every abnormal state occur together.

These are internal diagnostic states. They are not instructions for an owner to manipulate charging switches, simulate a pilot signal or bypass normal charging controls.

## Retain state information with the code

The table uses 30 failures among 50 samples and gives a five-second pass duration. Supply requirements differ between the printed branches, so one assumed voltage condition should not be assigned to the entire diagnostic. Preserve the controller state, cord state and relevant signal information for the technician.

P0CF4 does not identify a failed charging cable, inlet or control module by itself. The source supplies no universal pinout or complete external testing sequence. A qualified workshop must match the actual charging system and service procedure, including electrical safety requirements, before interpreting the internal integrity result or selecting a repair.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 596](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=596).
