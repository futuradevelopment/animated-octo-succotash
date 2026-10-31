---
{"entryId": "generic-p0afa", "code": "P0AFA", "title": "P0AFA: Hybrid output voltage falls below its monitored minimum", "description": "P0AFA checks low voltage on the documented BAS hybrid output, separately from voltage-correlation faults.", "status": "draft", "sourceReview": "checked", "scope": "2009 General Motors diagnostic parameter file 09OBDG08 Engine Diagnostics.pdf. Section-specific modules and calibrations; no per-code model or engine applicability established.", "sourceIds": ["gm-2009-08-engine"], "sourcePages": [{"sourceId": "gm-2009-08-engine", "pages": [119]}], "authoringBatch": "batch-21"}
---

# P0AFA: Hybrid output voltage falls below its monitored minimum

P0AFA is the hybrid-system low-voltage check in GM's BAS hybrid summary. The monitored 36-volt output sensor reports less than 22 volts for two seconds while the module is awake. These values belong to this older BAS architecture and must not be transferred to a different hybrid battery system.

## Low output is different from disagreement between measurements

The adjacent P0AF8 strategy compares battery and controller-output voltage. P0AFA instead uses a fixed low-voltage boundary on the monitored output. A system can therefore have a low reading or a measurement disagreement without those being identical diagnostic conditions.

The code does not identify whether the low report originates in actual supply behavior, connection state or invalid measurement. The exact service procedure is needed to establish which interpretation fits the vehicle.

## Preserve more than a later resting voltage

Record the originating module's voltage data, operating state and companion faults before clearing memory. A voltage that recovers after shutdown does not explain the earlier event or prove that the problem is corrected.

Do not attempt to recharge, bridge or probe hybrid components based on this summary. Use the prescribed professional diagnostic and isolation procedures. Verification should establish credible output-voltage information and completed monitoring under the applicable conditions. An erased P0AFA or a normal low-voltage battery reading cannot independently demonstrate that the monitored hybrid output remains above its required limit.

## Source and applicability

2009 General Motors diagnostic parameter file 09OBDG08 Engine Diagnostics.pdf. Section-specific modules and calibrations; no per-code model or engine applicability established. This explanation describes the documented monitor, not a universal repair procedure.

[GM diagnostic parameters, PDF page 119](https://gsi.ext.gm.com/gmspo/mode6/pdf/2009/09OBDG08%20Engine%20Diagnostics.pdf#page=119).
