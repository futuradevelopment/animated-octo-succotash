---
{"entryId": "generic-p25ee", "code": "P25EE", "title": "P25EE: Ford's vacuum-pump circuit B feedback stays too low", "description": "Ford evaluates the vacuum-pump B-circuit result with the relay commanded closed, distinguishing it from the A-circuit check.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [193, 200, 206]}], "authoringBatch": "batch-42"}
---

# P25EE: Ford's vacuum-pump circuit B feedback stays too low

P25EE concerns circuit B of the brake-system vacuum-pump control in Ford's hybrid example. The electric vacuum pump is important because the engine can remain off while the vehicle still requires vacuum assistance. The code evaluates electrical feedback from the control circuit, not brake-vacuum level directly.

## The commanded relay state distinguishes the branch

Ford specifies ignition on and the vacuum-pump relay line in its closed state for this check. Its malfunction criterion is monitoring-line voltage below 250 mV for one second. The relay command is essential context: an isolated voltage reading without that state does not reproduce the monitor's decision.

The nearby circuit A check, P258A, uses the relay-open state and a different voltage window. Applying that neighboring test's expected values to P25EE would mix two distinct diagnostic branches. The source also provides a broader range/performance code for the pump circuit.

## Electrical feedback does not establish available assistance

Ford's architecture treats the electric pump as the principal vacuum source for this hybrid braking arrangement. Some pump-related failures can change the powertrain's operating mode to support vacuum generation, but that does not prove the electrical problem has been repaired or establish a safe-driving conclusion from the code alone.

In the PHEV gateway mapping, the brake module's C1036 circuit-B report corresponds to P25EE in OBD reporting. A professional diagnostic record should retain the module, relay command, feedback and related vacuum faults. Correct verification follows the exact vehicle procedure and the required brake-system assessment. Hearing the pump briefly or clearing the code is not equivalent to showing that its commanded-closed feedback check and vacuum-supply functions are both satisfactory.

## Source and applicability

Ford Motor Company, [physical page 193](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=193); [physical page 200](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=200); [physical page 206](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=206). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
