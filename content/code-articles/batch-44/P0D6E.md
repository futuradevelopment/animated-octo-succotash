---
{"entryId": "generic-p0d6e", "code": "P0D6E", "title": "P0D6E: MX-30 compressor voltage reading too high", "description": "Why Mazda checks the wider high-voltage system before judging a high compressor voltage report.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0D6E:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300202033800"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300202033800", "locator": "id300202033800; DTC P0D6E:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0D6E: MX-30 compressor voltage reading too high

Mazda's MX-30 electric P0D6E monitor concerns a voltage reading inside the electric air-conditioning compressor. It reports a value above the specified limit while the PCM considers the high-voltage circuit normal. The source does not publish that limit. This combination focuses attention on the compressor's reported supply condition without proving that the entire battery voltage is excessive.

## High compressor voltage and supply evidence

The first diagnostic branch checks other high-voltage faults in four controllers: the BECM, drive motor control module, DC-DC converter, and battery charge control module. Any relevant fault found there receives its own troubleshooting before this compressor procedure continues. This prevents a broader power-system problem from being mistaken for an isolated compressor defect.

Mazda then distinguishes a present malfunction from a historical event, using controlled power-state changes. Its verification uses at least 30 seconds off and at least 10 seconds in READY, and repeats the assessment before the compressor replacement branch. Those are workshop confirmation intervals, not the unpublished overvoltage detection duration. The chart lists the electric compressor as its possible cause and does not supply an external sensor-pin test.

After component work, the same pending code leads to CAN diagnosis and a repeat of the diagnostic sequence. Completion also requires reviewing other DTCs. Save the snapshot, companion faults, and whether P0D6E remained current across the service checks. Compressor replacement and any access to its high-voltage connection require the complete manufacturer safety procedure and qualified personnel; the code does not justify owner probing or repeated charging experiments.

## Source and applicability

[Mazda factory procedure, P0D6E](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300202033800.html). id300202033800; DTC P0D6E:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0D6E:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
