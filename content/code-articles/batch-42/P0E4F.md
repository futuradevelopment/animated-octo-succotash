---
{"entryId": "generic-p0e4f", "code": "P0E4F", "title": "P0E4F: Ford receives coolant-pump feedback with unexpected timing", "description": "Ford's motor-electronics coolant-pump intermittent code concerns the frequency or duty cycle of received communication.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [186]}], "authoringBatch": "batch-42"}
---

# P0E4F: Ford receives coolant-pump feedback with unexpected timing

Ford's P0E4F example concerns feedback from the motor-electronics coolant pump. The source describes communication that is received but lies outside the expected frequency or duty-cycle pattern. That is a different observation from receiving no pump communication at all.

## The received signal must have the right format

Ford gives an out-of-pattern condition lasting more than one second for P0E4F. Its entry conditions include more than 500 milliseconds after power-up and a low-voltage supply between 6 and 19 volts. The document does not publish the actual acceptable frequency or duty-cycle window for this individual row, so those limits should not be guessed.

The distinction from P0A05 is useful: that neighboring code covers no communication for a longer stated interval. Ford also identifies a separate performance condition when the pump reports a confirmed internal fault. A missing signal, malformed feedback and an explicit pump fault are therefore different categories.

## Feedback validity does not directly measure cooling flow

P0E4F does not establish the amount of coolant moving through the power electronics or prove that the pump is physically stalled. It identifies an unreliable communication pattern in the control-and-feedback relationship. Other operating and fault information is needed to determine the cause and its effect.

The appropriate professional procedure should retain the received-signal behavior, supply conditions and associated pump faults. The summary is not a connector-level instruction to substitute a PWM source or operate the pump externally. Verification confirms the correct feedback pattern through the applicable checks and assesses the cooling system as required. A brief pump sound, one plausible status value or a cleared code cannot demonstrate that the intermittent timing problem is resolved.

## Source and applicability

Ford Motor Company, [physical page 186](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=186). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
