---
{"entryId": "generic-p03af", "code": "P03AF", "title": "P03AF: interpreting cylinder 3 deceleration evidence on DJXA", "description": "Volkswagen publishes lower, cylinder-specific threshold bands for cylinder 3 and requires qualifying engine operation.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen Jetta factory Generic Scan Tool manual, Edition 04.2020; DJXA engine control module, 2020 MY table.", "sourceIds": ["vw-jetta-djxa-gst-2020"], "authoringBatch": "batch-44", "sourcePages": [{"sourceId": "vw-jetta-djxa-gst-2020", "pages": [52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 445, 446, 447, 465, 466, 467]}]}
---

# P03AF: interpreting cylinder 3 deceleration evidence on DJXA

P03AF identifies the cylinder 3 excessive-pressure monitor in the 2020 Jetta DJXA diagnostic table. The source's distinguishing evidence is relative angular crankshaft deceleration, evaluated for 30 revolutions. It does not publish a maximum cylinder pressure in conventional pressure units.

## Cylinder 3 limits and diagnostic interpretation

Cylinder 3 uses greater-than-or-equal-to threshold bands of 14,200–16,800 s⁻² during nondynamic operation, 21,300–25,200 s⁻² during medium-dynamic operation, and 28,400–33,600 s⁻² during high-dynamic operation. These differ materially from the other cylinders. The range notation reflects calibration-dependent boundaries and must not be reduced to one fixed number for every DJXA vehicle.

Dynamic classification depends on engine-speed gradient and requested manifold-pressure gradient. The monitor additionally requires more than 60 percent load and less than 6,000 rpm, a closed clutch, inactive gear shifting and no fuel cutoff. Requested and actual rail pressure must remain within the listed difference, with tooth-angle adaptation completed and the specified ignition-timing relationship satisfied.

That combination explains why freeze-frame context matters. A motion-based combustion monitor should be assessed alongside genuine ignition, fuel and crankshaft evidence. Volkswagen names fuel quality, plug fouling, compression and deposits in its diagnostic guidance. The referenced G28 procedure provides a separate path for missing or intermittent crankshaft information, while the G61 procedure considers fuel and mechanical noise before sensor replacement.

The appropriate outcome is a supported diagnosis for cylinder 3, followed by controlled verification. Neither a single deceleration threshold nor the generic code title proves an internal engine defect. High-load recreation and fuel handling should be left to suitably equipped professional service.

## Source and applicability

[Volkswagen factory manual, P03AF](https://vwts.ru/diag/engine-djxa-09s-jetta-7-diagnostic-eng.pdf#page=52). Physical PDF pages 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 445, 446, 447, 465, 466, 467. Volkswagen Jetta factory Generic Scan Tool manual, Edition 04.2020; DJXA engine control module, 2020 MY table. This explains the documented monitor; it does not establish applicability to other vehicles.
