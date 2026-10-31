---
{"entryId": "generic-p0ac8", "code": "P0AC8", "title": "P0AC8: Battery input two has an independent extreme-cold circuit check", "description": "Interpret the GM P0AC8 circuit-high threshold without borrowing the rationality monitor’s peer comparisons.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [236]}], "authoringBatch": "batch-22"}
---

# P0AC8: Battery input two has an independent extreme-cold circuit check

P0AC8 is battery temperature input two's circuit-high diagnosis. In the GM table the relevant indication is below −45°C. This is an absolute signal-limit check, not a requirement that input two disagree with all three other temperatures.

## The monitor can reject one channel directly

The controller must be in run mode with its low-voltage supply in the stated range. P0A1F must be inactive. The sample rule is 30 failing observations within 40, taken at 100ms intervals.

By comparison, P0AC6 requires valid input two and a three-way disagreement pattern. Treating P0AC8 as that same comparison would add conditions that the circuit-high row does not contain.

## Keep the named input in the record

Record input two's actual temperature and validity alongside its companion codes. A minimum-pack-temperature value may happen to equal it at one instant, but it does not preserve which channel generated the failure. That identity is needed when consulting the vehicle's sensor map.

The source does not establish an open connector, a failed sensor or the correct repair. It supplies no terminal or resistance-test instructions. A trained battery technician must follow the applicable circuit procedure and high-voltage isolation requirements before accessing pack components. An implausibly cold reading does not indicate that the pack is electrically discharged or safe to handle.

An input can reach its circuit limit without completing a rationality comparison.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 236](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=236).
