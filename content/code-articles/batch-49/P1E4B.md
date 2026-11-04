---
{"entryId": "honda-p1e4b", "code": "P1E4B", "title": "P1E4B: The electric brake motor circuit is reported open", "description": "Honda P1E4B-00 identifies an open-circuit condition in the slave-cylinder drive motor system.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1e4b-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1e4b-factory", "pages": [1]}], "authoringBatch": "batch-49"}
---

# P1E4B: The electric brake motor circuit is reported open

## The controller looks for a complete motor path

Honda P1E4B-00 identifies an open-circuit condition in the slave-cylinder drive motor system. The factory summary allows the monitor during initial and regular diagnosis. Its confirmation conditions include ON mode, a 12-volt supply between 9.5 and 16.7 V and several brake-pedal applications, with an approximate one-second diagnostic duration.

The source specifically names the MU, MV and MW connections between the electric servo brake control unit and tandem motor cylinder. An interruption in those paths can prevent the commanded actuator operation. The code does not, however, identify a particular phase wire as the proven failure.

## An internal motor or controller fault can produce the same record

The possible-cause list also includes failure inside the tandem motor cylinder's motor and inside the brake controller. These alternatives require the correct isolation procedure; the DTC name alone is not enough to choose which assembly to replace.

Honda describes one-drive-cycle red and amber brake warnings and a fail-safe response affecting servo assistance, regenerative braking, automatic hold and other cooperating functions. Save the full P1E4B-00 record and related brake data before clearing memory.

The summary supplies no continuity-test pinout or safe instructions for energizing the motor. Have a qualified technician use the matching Honda procedure. Do not bridge an assumed open phase or drive the vehicle to test whether normal assistance will reappear, since the fault can disable multiple braking functions.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P1E4B-00%204481.pdf), PDF pages 1. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
