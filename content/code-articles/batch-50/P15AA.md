---
{"entryId": "nissan-p15aa", "code": "P15AA", "title": "P15AA: Charging permission must be evaluated while charging is withheld", "description": "Nissan P15AA-73 diagnosis compares EVSE behavior in a connected but deliberately non-charging state.", "status": "draft", "sourceReview": "checked", "scope": "Nissan Ariya FE0 factory-manual EV control / VCM procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.", "sourceIds": ["nissan-ariya-fe0-vcm-20261102"], "sourceLocators": [{"sourceId": "nissan-ariya-fe0-vcm-20261102", "locator": "P15aa-73 Charging System > DTC Description, Confirmation Procedure and DTC Diagnosis Procedure"}], "authoringBatch": "batch-50"}
---

# P15AA: Charging permission must be evaluated while charging is withheld

## The test state is part of the diagnosis

The Ariya P15AA-73 table describes a normal-charge permission signal staying off for more than six seconds outside the normal connection and charging event. Its confirmation deliberately connects the EVSE while a charging timer prevents charging from beginning. Allowing an immediate charge would change the state the procedure intends to examine.

Nissan lists the VCM and EVSE as possible causes. It also cautions against an older-standard EVSE, without identifying a universal version boundary in this entry. That wording should not be expanded into a claim that every older charging product is incompatible.

## Compare a known-working unit before a controller decision

The flow uses charging equipment already checked for correct operation, then compares the equipment associated with the user's complaint when appropriate. Repeating the fault with different verified equipment supports a different diagnostic branch from a problem that follows only one EVSE.

This makes the charging-device identity and timer setting useful service information. Record both instead of repeatedly clearing the code or replacing the VCM from the short label alone. The prescribed comparison assumes safe, undamaged charging hardware; unusual heating, exposed wiring or a damaged connector must be assessed before any further charging-system test.

Both normal and quick charging are prohibited by the listed response. A failure to start quick charging can therefore be a consequence of this permission fault rather than independent evidence of a second defective charging interface.

## Source and scope

[Nissan factory procedure, reproduced by niariya.com](https://www.niariya.com/ev_hev_vcm_-341.html#p15aa_73_charging_system). Exact section: P15aa-73 Charging System.

Nissan Ariya FE0 factory-manual EV control / VCM procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.
