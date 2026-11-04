---
{"entryId": "generic-p0aa5", "code": "P0AA5", "title": "P0AA5: Ford's negative battery contactor fails the closed-state check", "description": "Ford determines the negative battery-contactor state from its voltage relationship after a powered close command.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [160]}], "authoringBatch": "batch-42"}
---

# P0AA5: Ford's negative battery contactor fails the closed-state check

Ford's P0AA5 example is an inferred negative battery-contactor stuck-open condition. The controller commands the contactor closed, establishes that power is available to it, and checks whether the voltage relationship indicates closure. This is different from a direct open-circuit diagnosis of the control driver.

## Open is defined as failing the closed-state conditions

The source defines a closed negative contactor using three simultaneous conditions: its voltage measurement is above 90 percent and below 110 percent of the negative half-pack voltage, and the measurement is greater than 30 volts. For P0AA5, the powered contactor remains classified open for 2.4 seconds after the close request.

That definition means open does not necessarily mean an observed zero-voltage reading. Failure of the complete closed-state relationship is the relevant condition. The half-pack reference and its validity therefore matter when interpreting the controller's conclusion.

## Separate switching evidence from control-circuit evidence

Ford provides different codes for control-circuit opens, current-limited drivers and other contactor behavior. Their results can help distinguish why the commanded sequence did not complete, but P0AA5 alone does not prove a specific coil, main contact or internal connection is defective.

A useful record includes the command, power state, relative voltage information and accompanying sensor or driver findings. The OBD summary does not supply an internal-pack test procedure or authorize manually forcing a contactor closed.

Professional verification needs the applicable high-voltage procedure and a correctly completed switching sequence. Deleting the code while the contactor is not being commanded closed does not exercise the original condition, and one plausible pack-voltage reading cannot establish that the negative contactor's state was correctly confirmed.

## Source and applicability

Ford Motor Company, [physical page 160](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=160). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
