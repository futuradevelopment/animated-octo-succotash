---
{"entryId": "generic-p0d6d", "code": "P0D6D", "title": "P0D6D: MX-30 compressor low-voltage monitor and source caveat", "description": "Mazda compares the compressor's voltage report with an otherwise normal high-voltage supply, with a documented chart inconsistency.", "status": "draft", "sourceReview": "needs-review", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0D6D:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300202033700"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300202033700", "locator": "id300202033700; DTC P0D6D:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0D6D: MX-30 compressor low-voltage monitor and source caveat

The MX-30 electric P0D6D chart describes a low reading from the voltage sensor inside the electric air-conditioning compressor. Its precondition is significant: the PCM considers the high-voltage circuit voltage normal. The diagnostic question is therefore why the compressor reports inadequate voltage when the broader system is not already classified as low. No numeric voltage limit is supplied on this page.

## Low compressor voltage and the source mismatch

Mazda first checks for related faults in the BECM, drive motor control module, DC-DC converter, and battery charge control module. Those faults take priority over isolated compressor diagnosis. The listed causes include the compressor, connectors, and an open circuit or inadequate insulation in the high-voltage supply path. The chart examines the cable, compressor connection, and junction box No.3 before its final compressor decision.

The source contains an important inconsistency: its early present-versus-past check names P0D6E, although the page and later recurrence check are for P0D6D. One insulation-test branch also names a different cable segment from the initial cause list. These details need confirmation against the applicable current service information; they should not be silently corrected or turned into a definitive wiring test.

The later compressor branch uses a fresh power-state cycle and reassesses P0D6D after a waiting period. That workshop verification interval is not the unpublished low-voltage detection timer. A recurring fault after the prerequisite checks can lead to compressor replacement.

Cable access, insulation testing, and compressor replacement are professional high-voltage work. This article deliberately provides no disconnection or probing sequence. Preserve the snapshot, companion codes, and source discrepancies so the technician can resolve the correct circuit and procedure before testing.

## Source and applicability

[Mazda factory procedure, P0D6D](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300202033700.html). id300202033700; DTC P0D6D:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0D6D:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
