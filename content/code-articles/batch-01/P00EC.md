---
{"entryId": "generic-p00ec", "code": "P00EC", "title": "P00EC: intake temperature 3 noise exceeds its change budget", "description": "P00EC detects excessive in-range fluctuation in intake-air temperature 3 in this GM ECM.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 25OBDG03A.pdf, ECM monitor described on the cited physical PDF pages. Vehicle, engine and calibration applicability must be confirmed separately; the file-level model matrix is not per-code fitment evidence.", "sourceIds": ["gm-2025-03a"], "sourcePages": [{"sourceId": "gm-2025-03a", "pages": [124]}], "authoringBatch": "batch-01"}
---

# P00EC: intake temperature 3 noise exceeds its change budget

P00EC detects excessive in-range fluctuation in intake-air temperature 3 in this GM ECM. It uses the accumulated size of short temperature changes, rather than requiring one continuously extreme reading.

## The 80°C figure is a sum

Every 100 milliseconds, the controller calculates the absolute difference from the preceding IAT3 reading. Across ten readings, those changes form a one-second string-length value. A sum greater than 80°C fails a sample; four failures out of five qualify the diagnostic.

The value is not an 80°C absolute intake temperature and not necessarily an 80°C net change. Alternating upward and downward jumps add together even if the final reading returns to its starting point. This is why a display that seems normal between events cannot disprove the monitor’s noise evidence.

## How to investigate and verify

Retain time-resolved IAT3 information and complete module status. A slow graph or isolated resistance measurement may miss the pattern; use the matched vehicle procedure to investigate the signal path rather than assuming one failed component from the code.

Verification should show stable raw behavior over the required sample windows and a completed enabled monitor. The source gives P00EC an 80°C accumulated-change threshold, which differs from the 100°C threshold documented for IAT2’s P0099 in this file. Do not copy the neighboring sensor’s criterion when assessing IAT3. The table classifies this monitor Type B, two trips.

## Source and applicability

This explanation covers the documented 2025 GM monitor, not every vehicle using P00EC. Confirm the vehicle’s module and calibration before applying its limits. [GM diagnostic table, PDF page 124](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=124).
