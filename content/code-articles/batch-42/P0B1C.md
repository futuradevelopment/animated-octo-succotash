---
{"entryId": "generic-p0b1c", "code": "P0B1C", "title": "P0B1C: Ford's half-pack voltage-sense circuit can read high when open", "description": "Ford includes both an open circuit and a short-to-battery condition in its negative half-pack voltage-sensor high report.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [154, 157]}], "authoringBatch": "batch-42"}
---

# P0B1C: Ford's half-pack voltage-sense circuit can read high when open

P0B1C is the high-circuit result for voltage-sense circuit C. Ford's hybrid example maps it to the negative half-pack voltage sensor and lists two possible electrical conditions: a short to battery or an open circuit, persisting for one second. The word high therefore does not prove the battery itself is overcharged.

## An open measurement path can produce a high classification

That open-circuit possibility is a useful diagnostic distinction. Replacing charging-system components solely because a scanner says battery voltage high would skip the measurement-path evidence actually described by this monitor. Ford has separate codes for battery-pack performance and high system voltage.

The source does not provide a universal test-point voltage for P0B1C. It identifies the circuit behavior and its duration within a specific battery design. Physical sensor location, connector access and safe test methods must come from the applicable vehicle information.

## Compare fault categories before trusting a reading

Ford also assesses this negative half-pack measurement against the sum of cell voltages through P0B1A. A range/performance comparison and an electrical high-circuit report are related but different observations. Their coexistence should not automatically be counted as two independently failed battery components.

A professional assessment retains the complete voltage-sense fault set and evaluates measurement validity before drawing conclusions about battery condition. The code does not authorize opening the high-voltage assembly or bypassing its sensing circuits. Verification should show a reliable circuit and appropriate related monitor results under approved conditions. One normal-looking pack-voltage display after the event, or the absence of the code immediately after clearing, is not equivalent to confirming that the intermittent open or high-circuit condition has been corrected.

## Source and applicability

Ford Motor Company, [physical page 154](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=154); [physical page 157](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=157). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
