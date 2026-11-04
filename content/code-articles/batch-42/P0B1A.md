---
{"entryId": "generic-p0b1a", "code": "P0B1A", "title": "P0B1A: Ford's lower half-pack measurement disagrees with the cell sum", "description": "Ford applies a configuration-specific comparison limit to the bottom half-pack voltage-sense C performance monitor.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [154, 157]}], "authoringBatch": "batch-42"}
---

# P0B1A: Ford's lower half-pack measurement disagrees with the cell sum

P0B1A is a plausibility check for Ford's bottom half-pack voltage measurement. The BECM compares that aggregate measurement with the combined readings of the cells in the same half. It is a relationship between measurements, not a diagnosis that the battery's lower half has a particular failed cell.

## The comparison is symmetrical

Ford uses the absolute difference between the bottom half-pack value and the corresponding cell-voltage sum. A difference above 42 volts on the documented PHEV configuration, or above 38 volts on the FHEV configuration, for one second meets the listed fault condition. Either side of the comparison can be the larger value.

That distinction prevents a range/performance code from being simplified into an electrical low or high report. Ford's P0B1B and P0B1C are separate circuit classifications for this measurement path and describe different evidence.

## Data validity comes before a battery-health conclusion

The comparison alone cannot identify which observation is inaccurate. A technician needs the full set of cell-sense, half-pack and related electrical findings before treating the mismatch as a physical battery-condition result. The manufacturer-specific battery configuration also matters because the published difference limits are not the same for plug-in and full-hybrid examples.

Useful verification confirms that the relevant measurements agree under the appropriate service checks, rather than relying only on the total pack-voltage display. A total can appear plausible while one aggregate reading disagrees with its cell sum. The summary does not supply connector-level procedures or authorize internal high-voltage probing. Clearing the code, or observing a later single matching value, does not by itself establish that the discrepancy has been consistently resolved.

## Source and applicability

Ford Motor Company, [physical page 154](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=154); [physical page 157](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=157). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
