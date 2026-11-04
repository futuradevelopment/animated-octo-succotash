---
{"entryId": "ford-b10da", "code": "B10DA", "title": "B10DA: an invalid anti-theft handshake on the Fusion network", "description": "Ford B10DA:86 concerns the identifier response exchanged between the instrument cluster and PCM during starting.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2011 Fusion FWD 2.5L workshop manual, Pinpoint Test G: DTC B10DA:86 and/or DTC U0100:00; limited to the module and equipment configuration described.", "sourceIds": ["ford-2011-fusion-efcff800d1aca1"], "sourceLocators": [{"sourceId": "ford-2011-fusion-efcff800d1aca1", "locator": "Pinpoint Test G: DTC B10DA:86 and/or DTC U0100:00; Normal Operation and complete pinpoint diagnostic sequence"}], "authoringBatch": "batch-46"}
---

# B10DA: an invalid anti-theft handshake on the Fusion network

B10DA needs its suffix to be useful. The Fusion procedure considered here addresses B10DA:86, an invalid response during the Passive Anti-Theft System exchange between the instrument cluster and PCM. It separately directs B10DA:61 to another diagnostic chart.

## A recognized key is only one part of starting authorization

At ignition-on or start, the transceiver reads the key identification and passes it to the cluster. The cluster also expects the proper PCM response over high-speed CAN. Missing or unexpected data can leave the vehicle with an anti-theft no-start even though the problem is not simply an unrecognized key. Low battery voltage is another listed explanation for this code.

The manual begins with battery condition and a network communication test. It then examines the CAN path between the PCM and cluster, including connector fit, terminal damage and splice integrity. That order avoids treating a communication problem as proof that keys must be replaced.

## Preserve evidence before programming

B10DA:86 is stored in continuous memory, so its triggering condition may have disappeared by the time the car reaches the workshop. Record associated communication codes and the circumstances of the failed start. Module replacement branches require the appropriate PATS parameter reset, and cluster replacement also requires key programming. Those are configuration-sensitive service operations; the code alone does not justify exchanging modules or bypassing the anti-theft system.

## Source and applicability

[Ford workshop procedure](https://charm.li/Ford/2011/Fusion%20FWD%20L4-2.5L/Repair%20and%20Diagnosis/Accessories%20and%20Optional%20Equipment/Antitheft%20and%20Alarm%20Systems/Testing%20and%20Inspection/Pinpoint%20Tests/Anti-Theft%20-%20Passive%20Anti-Theft%20System%20%28PATS%29/Pinpoint%20Test%20G%3A%20DTC%20B10DA%3A86%20and%2For%20DTC%20U0100%3A00/). Ford 2011 Fusion FWD 2.5L workshop manual, Pinpoint Test G: DTC B10DA:86 and/or DTC U0100:00; limited to the module and equipment configuration described.
