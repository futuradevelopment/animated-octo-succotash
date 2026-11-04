---
{"entryId": "honda-p1dcb", "code": "P1DCB", "title": "P1DCB: Battery identification circuitry must be separated from cell condition", "description": "Honda P1DCB is defined here as a high-voltage battery identification-circuit fault during system operation.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1dcb-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1dcb-factory", "pages": [1, 2, 3, 4, 5, 6, 7, 8]}], "authoringBatch": "batch-49"}
---

# P1DCB: Battery identification circuitry must be separated from cell condition

## The diagnostic path checks identification resistors

Honda P1DCB is defined here as a high-voltage battery identification-circuit fault during system operation. Although the factory procedure groups it with P0A80, its checks focus on identification resistance and associated wiring. That is different from directly measuring cell capacity or deciding that a weak cell caused the code.

The procedure compares two identification paths with an approximately 24 kΩ reference value. If both specified checks are normal, its branch points toward the battery condition monitor module. If a path is abnormal, the procedure proceeds through identification wiring and reference-ground checks before assigning a battery-pack identification-resistor failure.

## Several wiring segments can change the conclusion

The source distinguishes BATTIND1 and BATTIND2, the intermediate links between battery modules, and the SGTB reference path. Opens or shorts in those circuits can direct the repair away from a complete battery-pack decision. The 24 kΩ value is an identification-circuit reference, not a traction-cell internal-resistance specification.

These checks require service-plug removal and access inside the IPU under the full Honda high-voltage precautions. The excerpt's short steps are not a complete safe-access procedure for an owner. A qualified hybrid technician must use the matching service information and verify isolation before measurements.

Preserve the original P1DCB and any companion records before clearing. The initial confirmation distinguishes a repeatable fault from an intermittent one; a code disappearing after a power cycle does not establish that all identification connections are sound.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Troubleshooting_%20P0A80%20(566),%20P1DCB%20(567)%206490.pdf), PDF pages 1, 2, 3, 4, 5, 6, 7, 8. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
