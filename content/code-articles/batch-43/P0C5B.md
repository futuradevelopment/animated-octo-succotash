---
{"entryId": "generic-p0c5b", "code": "P0C5B", "title": "P0C5B: Audi’s motor-position circuit B fails its range check", "description": "The Q5 hybrid reference distinguishes P0C5B’s position-signal range check from circuit B signals held continuously low or high.", "status": "draft", "sourceReview": "checked", "scope": "2014 Audi Q5/SQ5 reference book, CHJA hybrid chapter, September 2013; named module-specific criteria, not universal high-voltage repair specifications.", "sourceIds": ["audi-q5-2014-qrsb"], "sourcePages": [{"sourceId": "audi-q5-2014-qrsb", "pages": [263]}], "authoringBatch": "batch-43"}
---

# P0C5B: Audi’s motor-position circuit B fails its range check

P0C5B is Audi’s drive-motor A position-sensor circuit B range/performance entry. In the CHJA hybrid chapter, the criterion is a position-sensor signal outside its low or high range. The reference does not provide a numerical acceptance window for this particular row.

## The neighboring codes define a useful distinction

The same table separately describes circuit-B low and high conditions as a signal continuously at zero or continuously at one. Those entries should not be merged with P0C5B simply because the sensor name is shared. A range/performance report and an input stuck at a defined state represent different recorded evidence.

The letter B identifies a monitored circuit within this drive-motor position-sensing system. The summary does not establish that the vehicle has a separately replaceable “sensor B,” nor does it provide a physical location for one. That distinction matters before a component is ordered from a generic scan-tool description.

## Evaluate the correct control-module information

Audi places these entries under electrical drive control module J841. The applicable diagnostic procedure must establish which position-signal values or states are available, how they are interpreted, and what related faults affect the result. A threshold copied from circuit A would not be justified: the adjacent A entries use voltage limits, while the B entries describe signal states.

The chart does not specify a detection time or a replacement branch. A qualified hybrid-system technician should verify the position-information behavior using the correct procedure and equipment. The reference is not permission to open the motor or probe energized inverter circuits, and clearing the code does not establish that the range check now passes.

## Source and scope

[2014 Audi Q5/SQ5 Quick Reference Specification Book, September 2013, physical PDF 263](https://static.nhtsa.gov/odi/tsbs/2013/MC-10073843-2280.pdf#page=263). 2014 Audi Q5/SQ5 reference book, CHJA hybrid chapter, September 2013; named module-specific criteria, not universal high-voltage repair specifications.
