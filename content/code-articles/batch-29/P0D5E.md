---
{"entryId":"generic-p0d5e","code":"P0D5E","title":"P0D5E: charger discharge failure has two reporting paths","description":"GM P0D5E can reflect the charger discharge-voltage test or a separate HCP2 backup evaluation when a charger result is unavailable.","status":"draft","sourceReview":"checked","scope":"GM 2015 15OBDG01 Hybrid Diagnostics, HCP2/VICM and charger discharge-monitor examples on the cited pages. Exact vehicle applicability and safe service procedures require vehicle-specific information.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[556,736]}],"authoringBatch":"batch-29"}
---

# P0D5E: charger discharge failure has two reporting paths

P0D5E records unsuccessful charger-system discharge in this GM example, but the reporting controller matters. The charger has its own voltage-based test, while HCP2 can store that result or perform a backup evaluation when no confirmed charger result is available.

## Identify which path produced the record

The charger row checks whether reported high-voltage output remains at least 60 V after its allowed discharge period. One branch follows an active-discharge command; another follows a specified shutdown delay after confirmed communication loss. Voltage validity and the awake secondary controller are prerequisites.

HCP2 separately accepts a failed result reported by the charger. If neither pass nor fail is confirmed, its backup logic evaluates battery current during a controlled internal test and requires a healthy current sensor. These are different evidence paths, so a voltage result and a backup current result should not be silently combined into one universal threshold.

## Treat uncertainty as an energy-safety issue

Record the controller, discharge command history, communication faults and the result available from the charger. That information distinguishes a reported discharge failure from the absence of a trustworthy result.

A stored code does not prove which contactor or circuit caused the condition, and clearing it does not establish successful discharge. The numerical thresholds here are diagnostic criteria, never a safe-to-touch declaration. This article provides no discharge or bypass procedure. High-voltage inspection must follow the exact vehicle procedure with suitable training and equipment.

## Source and applicability

GM 2015 15OBDG01 Hybrid Diagnostics, HCP2/VICM and charger discharge-monitor examples on the cited pages. Exact vehicle applicability and safe service procedures require vehicle-specific information.

[General Motors source, physical page 556](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=556) · [General Motors source, physical page 736](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=736)
