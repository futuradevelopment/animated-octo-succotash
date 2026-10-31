---
{"entryId":"generic-p04bc","code":"P04BC","title":"P04BC: the commanded fuel-door lock transition did not occur","description":"The 2015 GM hybrid P04BC monitor waits for an unlocked-to-locked transition after a valid lock command.","status":"draft","sourceReview":"checked","scope":"Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[594]}],"authoringBatch":"batch-25"}
---

# P04BC: the commanded fuel-door lock transition did not occur

P04BC in the cited GM hybrid table is a fuel-door lock performance result. The controller has commanded locking, the lock was not already in the locked state, and the expected transition from unlocked to locked does not occur within the documented evaluation period.

## The starting state is part of the test

A lock that is already locked cannot demonstrate a new unlocked-to-locked transition. The source therefore requires the appropriate initial state. Repeating a lock command against an already locked mechanism is not equivalent to exercising this monitor.

The table lists a 600-millisecond evaluation time for the documented calibration. That value describes this controller's check; it is not a universal mechanical service limit for every fuel-door actuator.

## Electrical and feedback faults take priority

The performance evaluation is inhibited by several related lock-driver and lock-position circuit faults. If those are active, a missing P04BC result does not prove that mechanical performance is satisfactory. First establish whether the controller had valid command and feedback information with which to evaluate the transition.

A useful scan capture aligns the requested state, initial reported state and subsequent feedback. This is an editorial inference from the monitor design, not a replacement for GM's vehicle-specific diagnostic tree.

The code does not identify whether the cause is the mechanism, actuator, wiring or position reporting. Use the complete service procedure to locate the failure, then verify an actual transition under valid monitor conditions.

## Application limits

Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.

## Source

[15OBDG01 Hybrid Diagnostics](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=594), physical PDF pages 594.
