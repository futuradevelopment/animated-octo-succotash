---
{"entryId": "nissan-p15ba", "code": "P15BA", "title": "P15BA: A prolonged charging-permission disagreement must recur", "description": "Nissan P15BA-72 detects an AC charging permission switch stuck off during normal charging and requires repeat confirmation.", "status": "draft", "sourceReview": "checked", "scope": "Nissan Ariya FE0 factory-manual EV control / VCM procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.", "sourceIds": ["nissan-ariya-fe0-vcm-20261102"], "sourceLocators": [{"sourceId": "nissan-ariya-fe0-vcm-20261102", "locator": "P15ba-72 Charging System > DTC Description, Confirmation Procedure and DTC Diagnosis Procedure"}], "authoringBatch": "batch-50"}
---

# P15BA: A prolonged charging-permission disagreement must recur

## A delayed permission-switch fault

P15BA-72 in the Ariya VCM concerns the vehicle's AC charging permission switch being detected as stuck off during normal charging. The listed condition must last more than 120 seconds. Nissan then prohibits both normal and quick charging, even though the diagnostic condition is described in the normal-charge state.

The duration is a useful distinction from a momentary connection event. A fault occurring after a sustained charging attempt is more relevant to this monitor than a dashboard message appearing before the connector is engaged. The code alone still does not measure the switch electrically or establish why its state is wrong.

## Repeat the defined charging observation

The confirmation procedure observes normal charging for at least three minutes before reading the VCM result. The diagnostic branch erases the fault and repeats that confirmation; replacement of the VCM is conditional on recurrence in that sequence.

Document the elapsed charging time and whether the session actually began, because a quick power cycle cannot substitute for the required observation. Charging should not be forced when equipment is damaged or another safety concern is present. A qualified technician must verify the exact Ariya equipment and complete the relevant diagnostic steps before interpreting this controller-specific replacement branch.

The possible-cause list names the VCM, but the repeat-confirmation requirement still matters. That concise list does not remove the need to verify the actual charging state and the duration that defines the fault.

## Source and scope

[Nissan factory procedure, reproduced by niariya.com](https://www.niariya.com/ev_hev_vcm_-341.html#p15ba_72_charging_system). Exact section: P15ba-72 Charging System.

Nissan Ariya FE0 factory-manual EV control / VCM procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.
