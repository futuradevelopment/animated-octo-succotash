---
{"entryId": "generic-p0d2e", "code": "P0D2E", "title": "P0D2E: Audi compares battery and motor-controller DC-link readings", "description": "Audi P0D2E checks a documented difference between battery-controller and motor-controller DC-link voltage information.", "status": "draft", "sourceReview": "checked", "scope": "2014 Audi Q5/SQ5 reference book, CHJA hybrid chapter, September 2013; named module-specific criteria, not universal high-voltage repair specifications.", "sourceIds": ["audi-q5-2014-qrsb"], "sourcePages": [{"sourceId": "audi-q5-2014-qrsb", "pages": [263]}], "authoringBatch": "batch-43"}
---

# P0D2E: Audi compares battery and motor-controller DC-link readings

P0D2E is a range/performance check on drive-motor A inverter voltage sensing in Audi’s CHJA hybrid table. The source compares DC-link voltage reported by the battery energy controller with DC-link voltage reported by the drive-motor controller. It lists a battery-controller value minus motor-controller value greater than a 9–24 V threshold range.

## Agreement is different from absolute voltage

The monitor can identify disagreement between reporting paths without its row establishing which reading is correct. It should not be paraphrased as proof that the battery or inverter has exceeded an absolute operating voltage. Audi lists separate entries for high inverter voltage and for a high voltage-sensor circuit.

The subtraction order should be preserved. The chart does not expressly say “absolute difference,” and it does not explain how a particular value within the 9–24 V range is selected. Treating 9 V as a universal fixed limit, or assuming that either sign of disagreement has identical meaning, would go beyond the supplied evidence.

## Keep the two reported quantities together

A meaningful diagnostic record identifies both controller readings and the conditions under which they were compared. One isolated voltage display cannot reproduce a two-source plausibility test. The complete service information is needed to determine the relevant data items and the authorized method of comparison.

This high-voltage monitor does not prescribe external probing, inverter replacement or battery replacement. Verification should establish correct agreement of the applicable reporting paths and resolve associated faults through the manufacturer’s procedure. The quick-reference threshold alone cannot certify the physical DC link or establish that the underlying cause has been repaired.

## Source and scope

[2014 Audi Q5/SQ5 Quick Reference Specification Book, September 2013, physical PDF 263](https://static.nhtsa.gov/odi/tsbs/2013/MC-10073843-2280.pdf#page=263). 2014 Audi Q5/SQ5 reference book, CHJA hybrid chapter, September 2013; named module-specific criteria, not universal high-voltage repair specifications.
