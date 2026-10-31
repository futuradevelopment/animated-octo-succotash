---
{"entryId": "generic-p27ac", "code": "P27AC", "title": "P27AC: Solenoid F stored characterization does not pass startup validation", "description": "P27AC identifies rejected characterization data for pressure-control solenoid F in the reviewed GM monitor.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 25OBDG03A monitor and stated transmission mappings only; vehicle and calibration applicability require confirmation.", "sourceIds": ["gm-2025-03a"], "sourcePages": [{"sourceId": "gm-2025-03a", "pages": [1208, 1209]}], "authoringBatch": "batch-04"}
---

# P27AC: Solenoid F stored characterization does not pass startup validation

P27AC identifies rejected characterization data for pressure-control solenoid F in the reviewed GM monitor. The data-check row names GF9 C4 clutch, GR10 C6 C45678910R clutch, or CVT binary-pump control. Exact mapping must come from the relevant transmission information.

## Stored characteristics must match the device

The controller verifies that its EEPROM characterization corresponds to the electrical characteristics of the installed valve-body component. The programming-complete status is false if data is missing or incomplete, the solenoid class is incompatible, the checksum differs, or axis values decrease instead of remaining nondecreasing.

These findings concern stored control information. They do not directly measure binary-pump pressure, clutch holding capacity or whether the circuit is open. That distinction is especially useful when calibration and performance codes appear together.

## Initialization supplies the verification opportunity

The test occurs once at normal power-up before regular controller operation. It is not dependent on waiting for a particular shift or pump mode during driving. A successful operational observation and a successful startup data check answer different questions.

The source ties characterization to the valve-body assembly part number and calls for associated data programming when the assembly is serviced. Verify that identity and the applicable programming result before deciding on hardware replacement.

After correction, accepted data and no returning initialization fault provide the relevant verification. The source lists Type A, one-trip behavior but does not establish that solenoid F or the transmission controller is physically defective.

## Source and applicability

Confirm the vehicle, transmission variant and relevant module before applying this monitor description. [GM diagnostic table, PDF page 1208](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=1208). [GM diagnostic table, PDF page 1209](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=1209).
