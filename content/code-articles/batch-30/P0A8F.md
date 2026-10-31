---
{"entryId":"generic-p0a8f","code":"P0A8F","title":"P0A8F: GM eAssist charging faults and high-current fuse connections","description":"GM’s eAssist bulletin distinguishes charging-system connection faults from misleading scan setup and lost diagnostic history.","status":"draft","sourceReview":"checked","scope":"GM PIC5626A, April 2013: 2012–2013 Buick LaCrosse and Regal eAssist, and 2013 Chevrolet Malibu ECO eAssist, all with RPO HP6.","sourceIds":["nhtsa-mc-10112981"],"sourcePages":[{"sourceId":"nhtsa-mc-10112981","pages":[1,2]}],"authoringBatch":"batch-30"}
---

# P0A8F: GM eAssist charging faults and high-current fuse connections

P0A8F in the covered GM eAssist vehicles can accompany a discharged 12-volt battery and charging-system warnings. GM PIC5626A warns that an engine may start and run even while charging is inoperative. It also notes the converse: the 12-volt system can appear to charge while hybrid-system voltage eventually becomes low.

## Make sure the scan sees the hybrid modules

The bulletin requires selecting engine RPO LUK when configuring GDS2. An incorrect vehicle setup can prevent communication with the hybrid powertrain modules and produce an apparently empty fault search. In addition, earlier codes may disappear after the 12-volt battery discharges. A scan with no stored faults therefore does not, by itself, disprove the reported charging event.

GM directs inspection of high-current fuses, their seating, cable connections and crimps. A fuse can be electrically problematic because of poor contact or thermal stress even when it is not visibly open. The prescribed loaded voltage-drop method addresses resistance too small for ordinary resistance measurements to assess reliably.

## Repair history and build date matter

The bulletin specifically associates an open or poorly connected 175-amp fuse with a possible history P0A8F that does not consistently reset. It also contains a separate battery-cooling-fan check after sufficiently low voltage, with different instructions around the December 15, 2011 build boundary.

Provide the workshop with discharge history and the complete warning sequence. High-current fuse and hybrid charging checks require the correct service procedures; they are not an invitation to bridge fuses or probe hybrid circuits. The bulletin supports verifying power delivery before assuming the power module itself needs replacement.

## Source and applicability

GM PIC5626A, April 2013: 2012–2013 Buick LaCrosse and Regal eAssist, and 2013 Chevrolet Malibu ECO eAssist, all with RPO HP6.

[PIC5626A — NHTSA manufacturer communication 10112981](https://static.nhtsa.gov/odi/tsbs/2013/MC-10112981-9999.pdf#page=1), physical PDF pages 1, 2.
