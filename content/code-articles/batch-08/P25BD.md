---
{"entryId":"generic-p25bd","code":"P25BD","title":"P25BD: engine overspeed detected without commanded fuel delivery","description":"P25BD monitors an overspeed condition when the controller is not delivering fuel.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG04B diagnostic parameter file; the cited monitor is documented, but individual vehicle, engine and calibration applicability has not been established.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[841]}],"authoringBatch":"batch-08"}
---

# P25BD: engine overspeed detected without commanded fuel delivery

P25BD is titled unmetered fuel—forced engine shutdown. The documented monitor asks whether engine speed remains excessive while no fuel is being delivered by the controller. That combination is more significant than an ordinary high-rpm event under commanded fueling.

## Failure and recovery differ

The cited calibration fails when speed exceeds 5,800 rpm and the overspeed condition remains true for more than 500 ms. Its pass condition is below 5,500 rpm, again sustained for more than 500 ms. The 300 rpm separation creates hysteresis between failure and recovery. The listed engine-speed enable threshold is above 1,500 rpm, and reporting is Type A, one trip.

## What the code does not prove

The entry does not identify the source of any unmetered combustible material or provide a shutdown hardware procedure. It also does not establish that an engine is safe to restart simply because a code has been cleared. Preserve speed history and commanded-fueling information for professional diagnosis.

This event should not be deliberately reproduced by accelerating the engine or defeating its shutdown behavior. If uncontrolled engine speed is occurring, prioritize moving away from danger and obtaining emergency or professional assistance appropriate to the situation. Verification and return to service require the manufacturer's procedure and a resolved cause, not an improvised overspeed test.

## Source and application limits

This explanation covers the cited 2025 GM monitor. Confirm the vehicle and calibration in its service information before applying these limits; inclusion in this file does not establish model compatibility. [GM diagnostic parameters, PDF page 841](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=841).
