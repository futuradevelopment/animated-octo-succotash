---
{"entryId": "generic-p2d3b", "code": "P2D3B", "title": "P2D3B: MX-30 high-voltage discharge sequence fault", "description": "Mazda detects remaining energy that fails to discharge after the high-voltage contactors are opened.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P2D3B:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300202037200"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300202037200", "locator": "id300202037200; DTC P2D3B:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P2D3B: MX-30 high-voltage discharge sequence fault

P2D3B concerns the high-voltage discharge system. In the cited Mazda MX-30 electric chart, the PCM detects that remaining energy in the high-voltage circuit could not be discharged after the contactors were cut off. This is a shutdown-sequence problem, not a diagnosis of low battery state of charge.

## Discharge sequence evidence and professional boundaries

The safety implication is direct: an off command or an opened contactor does not, by itself, prove that downstream high-voltage components are free of stored energy. The chart supplies no residual-voltage limit or discharge timeout. It therefore cannot be used as a substitute for the manufacturer's isolation and zero-energy verification procedure.

Mazda first checks DTCs in the BECM, drive motor control module, and DC-DC converter. It then checks the PCM for PTC-heater-related faults. Those companion faults take priority because the discharge sequence involves more than one system. The possible-cause list includes those EV components, internal battery faults, and the PCM.

If the prerequisite fault checks are clear, the workshop preserves the snapshot, clears the record, and evaluates recurrence under the relevant operating conditions. A returning pending P2D3B leads to CAN communication diagnosis and repetition of the sequence. PCM replacement is considered only after that recurrence branch with communication normal.

The useful service evidence is which companion faults were present, whether the discharge fault remained current or pending, and whether it returned after the underlying defect was corrected. Do not attempt to discharge the circuit manually, bridge a contactor, or probe high-voltage terminals. This procedure requires qualified EV service personnel and complete vehicle-specific safety information.

## Source and applicability

[Mazda factory procedure, P2D3B](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300202037200.html). id300202037200; DTC P2D3B:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P2D3B:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
