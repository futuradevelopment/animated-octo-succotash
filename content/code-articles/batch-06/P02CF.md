---
{"entryId":"generic-p02cf","code":"P02CF","title":"P02CF: cylinder 2 maximum injector offset in the SQP map","description":"In this GM implementation, P02CF means cylinder 2 has learned an SQP energizing-time correction above the allowed maximum.","status":"draft","sourceReview":"needs-review","scope":"2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[1143]}],"authoringBatch":"batch-06"}
---

# P02CF: cylinder 2 maximum injector offset in the SQP map

In this GM implementation, P02CF means cylinder 2 has learned an SQP energizing-time correction above the allowed maximum. The comparison occurs when a new value enters the learning map.

## Why a stored map matters

SQP uses rail-pressure drop to estimate a small injection made during diesel fuel cut-off. Its result is not simply a snapshot of injector voltage or current. The table records the maximum-authority outcome at multiple rail-pressure levels in nonvolatile storage; one saturated level can support the fault.

That structure gives two useful checks. Establish whether a new eligible learning event has updated the relevant entry, and determine whether the upper-limit condition is localized to one pressure region. A brief period of normal running proves neither point.

## Interpreting the published threshold

The maximum is a named calibration in microseconds, not a published number that applies to every engine. The source also repeats “minimum authority” in parts of this maximum row. Its greater-than comparison, maximum calibration identifier and row title consistently support the upper-limit meaning.

The listed diagnostic requires SQP authority and injection management to be enabled and uses Type B, two-trip reporting. An investigation should assess the learning evidence before assigning a physical cause. The table alone cannot justify replacing cylinder 2's injector or altering the high-pressure fuel system.

## Source and applicability

2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately. These tables describe detection logic, not a complete repair procedure or a component replacement verdict. [gm-2025-04b, PDF page 1143](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1143).
