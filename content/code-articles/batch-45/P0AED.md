---
{"entryId": "generic-p0aed", "code": "P0AED", "title": "P0AED: Honda traction-inverter temperature sensor 1 circuit", "description": "Honda P0AED uses a repeat-fault check to distinguish a current PCU fault from an intermittent event.", "status": "draft", "sourceReview": "checked", "scope": "Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability.", "sourceIds": ["honda-insight-gen3-dtc-5737"], "sourceLocators": [{"sourceId": "honda-insight-gen3-dtc-5737", "locator": "PDF physical page 1; DTC Troubleshooting: P0AED (109); P0AED detection or complete troubleshooting branch"}], "authoringBatch": "batch-45", "sourcePages": [{"sourceId": "honda-insight-gen3-dtc-5737", "pages": [1]}]}
---

# P0AED: Honda traction-inverter temperature sensor 1 circuit

## Sensor 1 belongs to the traction-motor inverter

The Honda Insight troubleshooting extract defines P0AED as **traction-motor inverter temperature sensor 1 circuit**, with Honda identifier 109. This is the inverter temperature-reporting circuit, not a direct statement that the engine coolant or traction battery is overheating.

The complete code and detecting system matter because the neighboring sensor-2 fault uses a different identifier and a different verification wait. This page does not publish a numerical voltage or temperature threshold for P0AED, and it does not identify a separately replaceable sensor in its repair branch.

## The documented decision depends on recurrence

Honda's procedure first verifies the problem through HDS: the stored code is cleared, the prescribed power-state change is performed, and pending or confirmed P0AED is checked again. If the fault returns, the factory branch directs replacement of the power control unit, PCU.

If it does not return, Honda classifies the condition as intermittent and says the system is normal at that moment. It then uses the saved freeze data or onboard snapshot to investigate the original conditions. That temporary result does not establish that the earlier fault was imaginary or permanently repaired.

## A useful repair record

Preserve the initial snapshot before clearing and document whether P0AED returned during the specified verification. Do not transfer the sensor-2 soak procedure to this sensor-1 page. These extracts come from a third-generation Insight collection without an exact model-year revision on the individual PDF, so applicability must be checked. Honda explicitly requires its electric-powertrain precautions; PCU access and replacement are professional high-voltage work.

## Sources and applicability

[DTC Troubleshooting: P0AED (109) (Honda manual extract 5737)](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Troubleshooting_%20P0AED%20(109)%205737.pdf#page=1). Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability. These are manufacturer procedures for that documented configuration, not universal repair instructions.
