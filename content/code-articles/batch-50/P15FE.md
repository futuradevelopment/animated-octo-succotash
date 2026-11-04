---
{"entryId": "nissan-p15fe", "code": "P15FE", "title": "P15FE: Charge-port lock position is an electrical feedback problem", "description": "Nissan P15FE-16 follows a low charge-connector lock-position signal through port inspection and circuit diagnosis.", "status": "draft", "sourceReview": "checked", "scope": "Nissan Ariya FE0 factory-manual EV control / VCM procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.", "sourceIds": ["nissan-ariya-fe0-vcm-20261102"], "sourceLocators": [{"sourceId": "nissan-ariya-fe0-vcm-20261102", "locator": "P15fe-16 Charge Port Lock > DTC Description, Confirmation Procedure and DTC Diagnosis Procedure"}], "authoringBatch": "batch-50"}
---

# P15FE: Charge-port lock position is an electrical feedback problem

## Distinguish lock movement from position feedback

P15FE-16 in this Ariya procedure means the normal-charge connector lock-position sensor's reported value is below a specified limit for more than one second. The table does not provide a numerical threshold. It lists an open or shorted sensor circuit, the sensor and the VCM as possibilities.

The stated protective response prohibits quick charging. That wording should be preserved even though the monitored feedback belongs to the normal-charge connector lock; changing it to an assumed normal-charge-only restriction would alter the source.

## Inspect the port before pursuing the controller

Nissan checks the charge port and then the lock-status detection circuit. Only after those inspections does the flow repeat confirmation and consider the VCM if the problem returns. The confirmation includes power-on observation and, when necessary, a normal-charging event.

A lock that appears to move cannot by itself verify its feedback signal, and a low feedback value does not automatically prove a jammed mechanical latch. Record whether the connector engaged and released normally, without forcing or bypassing the locking mechanism. A damaged port or trapped connector needs the matching service procedure and professional assessment before charging-system electrical tests are attempted.

Nissan includes port inspection before electrical feedback testing. This preserves an opportunity to identify an installation or visible-condition problem before attributing a low sensor value to an internal controller failure.

## Source and scope

[Nissan factory procedure, reproduced by niariya.com](https://www.niariya.com/ev_hev_vcm_-341.html#p15fe_16_charge_port_lock). Exact section: P15fe-16 Charge Port Lock.

Nissan Ariya FE0 factory-manual EV control / VCM procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.
