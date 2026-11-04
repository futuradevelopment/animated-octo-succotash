---
{"entryId": "generic-p2e2b", "code": "P2E2B", "title": "P2E2B: Ariya excitation errors require the complete suffix", "description": "Nissan P2E2B-11 and P2E2B-12 use different repair branches, while the generic high-current label lacks a supplied current threshold.", "status": "draft", "sourceReview": "needs-review", "scope": "Nissan Ariya FE0 factory service procedures reproduced in NiAriya’s collection labeled 2023–2026; factory document revision is not shown. Confirm the exact drivetrain, detailed DTC suffix and VIN-specific applicability.", "sourceIds": ["nissan-ariya-fe0-front-dtc"], "sourceLocators": [{"sourceId": "nissan-ariya-fe0-front-dtc", "locator": "p2e2b_11_drive_motor_a_excitation_current; P2e2b-11 Drive Motor a Excitation Current; DTC detection logic, confirmation and complete displayed diagnosis procedure"}, {"sourceId": "nissan-ariya-fe0-front-dtc", "locator": "p2e2b_12_drive_motor_a_excitation_current; P2e2b-12 Drive Motor a Excitation Current; DTC detection logic, confirmation and complete displayed diagnosis procedure"}], "authoringBatch": "batch-45"}
---

# P2E2B: Ariya excitation errors require the complete suffix

## Two Nissan suffixes share a broad error description

The catalog labels P2E2B as **drive-motor A excitation current too high**. Nissan's Ariya pages describe both **P2E2B-11** and **P2E2B-12** as excitation-module errors detected in READY, within one second. This draft is marked **needs-review** because the displayed tables do not state the current threshold or fully explain how that general error description maps to the catalog's high-current wording.

Both variants stop front-motor control. Their similar detection summaries do not mean their diagnostic paths are interchangeable.

## The suffix selects a different component check

For suffix 11, the procedure inspects excitation bus-bar and harness connections. A sound connection leads to front-inverter replacement; a defective connection is repaired first.

For suffix 12, the procedure instead checks the front-motor rotor coil for a short. The displayed test treats **4.55 ohms or less** as the short-circuit condition and directs motor replacement. A result above that branch threshold directs inverter replacement. This value is a resistance decision within the stated procedure, not an excitation-current limit.

Nissan additionally cautions that suffix-12 history can arise from voltage fluctuations during 12-volt battery installation. Battery-service history therefore matters when the code is stored as a past malfunction.

## Keep the diagnostic limits visible

Record the full suffix, current or historical status and companion faults. Confirmation patterns differ, with suffix 12 including a longer driving observation. These are professional confirmation procedures, not owner instructions to provoke a fault.

Resolve the definition wording against current VIN-specific information before choosing a repair. Excitation access and rotor testing require the complete high-voltage isolation procedure and trained EV personnel.

## Sources and applicability

[Nissan Ariya factory diagnostic procedure: P2e2b-11 Drive Motor a Excitation Current](https://www.niariya.com/motor_control_inverter_front_-681.html#p2e2b_11_drive_motor_a_excitation_current); [Nissan Ariya factory diagnostic procedure: P2e2b-12 Drive Motor a Excitation Current](https://www.niariya.com/motor_control_inverter_front_-681.html#p2e2b_12_drive_motor_a_excitation_current). Nissan Ariya FE0 factory service procedures reproduced in NiAriya’s collection labeled 2023–2026; factory document revision is not shown. Confirm the exact drivetrain, detailed DTC suffix and VIN-specific applicability. These are manufacturer procedures for that documented configuration, not universal repair instructions.
