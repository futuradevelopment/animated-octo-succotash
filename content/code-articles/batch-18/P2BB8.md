---
{"entryId":"generic-p2bb8","code":"P2BB8","title":"P2BB8: Coolant sensor 6 circuit low follows a logical-to-input mapping","description":"Learn why P2BB8’s low-resistance result requires the configured coolant-sensor channel to be identified correctly.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[892]}],"authoringBatch":"batch-18"}
---

# P2BB8: Coolant sensor 6 circuit low follows a logical-to-input mapping

P2BB8 concerns the low-resistance electrical classification for logical coolant temperature sensor 6. The GM table uses configurable hardware inputs, and in this file the logical function is assigned to the seventh temperature input. That internal numbering is not a vehicle component-location diagram.

## Resolve the channel before using a limit

The threshold table contains different low-resistance values for different configured inputs. Selecting a value solely because it appears beside the number six would ignore the logical assignment stated in the row. The appropriate input and its calibration must be established together.

The monitor describes a short-to-ground condition in the sensor or signal circuit when resistance falls below the expected range. Its high-temperature annotation is a calibration endpoint, not independent evidence that the coolant truly became that hot.

## Judge persistence in the electrical signal

The check is continuously sampled and requires five seconds of failure in a six-second window. The two-trip reporting classification is separate from that short observation period. A single transition through a low resistance cannot automatically be equated with a completed fault.

Preserve the logical sensor identity, interpreted electrical value and duration. A plausible scan temperature afterward does not locate the original problem. The summary does not distinguish a sensor defect from a wiring path or interpretation issue, and it cannot justify replacing a component before the actual circuit has been identified.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 892](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=892).
