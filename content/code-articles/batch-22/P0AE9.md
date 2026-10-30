---
{"entryId": "generic-p0ae9", "code": "P0AE9", "title": "P0AE9: Battery temperature input four must differ from all three references", "description": "Read the GM P0AE9 rationality monitor and understand the role of valid sensor inputs and simultaneous comparisons.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [237]}], "authoringBatch": "batch-22"}
---

# P0AE9: Battery temperature input four must differ from all three references

P0AE9 evaluates battery temperature input four as a possible outlier. In this GM table the controller compares it separately with inputs one, two and three. The diagnosis is based on relative plausibility, not simply on input four being hot or cold.

## Three disagreements must coexist

The failure condition requires each absolute temperature difference to exceed 15°C. These comparisons are joined by AND. Input four must be valid, and its own circuit-low and circuit-high faults must be inactive before the rationality result is accepted.

The sample decision uses 90 failing observations out of 100 at 100ms intervals. Battery-controller run mode and an acceptable low-voltage supply are also required.

## Retain the temperature pattern

Save all four temperature inputs with timestamps and validity status. A record containing only input four cannot demonstrate that it separated from each reference. An average temperature may also conceal the very outlier pattern being tested.

The table does not establish where input four's sensor is installed, which sensor caused the disagreement or what part should be replaced. Those questions belong to the matching battery service procedure. Trained high-voltage personnel must perform any physical access after the prescribed isolation and verification steps. A rationality threshold is a controller decision rule, not a safe operating limit or an instruction to warm individual pack areas for testing.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 237](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=237).
