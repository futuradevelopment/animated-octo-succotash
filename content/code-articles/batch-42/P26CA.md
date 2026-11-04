---
{"entryId": "generic-p26ca", "code": "P26CA", "title": "P26CA: Ford's coolant-pump emergency input disagrees with ignition state", "description": "Ford compares the coolant pump's reported emergency-run input with the ignition-linked state expected by the PCM.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [106, 107]}], "authoringBatch": "batch-42"}
---

# P26CA: Ford's coolant-pump emergency input disagrees with ignition state

Ford's electric engine-coolant pump has both a normal LIN control link and an emergency-run input. In the documented hybrid system, that emergency input is wired to ignition power so the pump can be commanded to run when normal communication is unavailable. P26CA concerns a disagreement in that input's reported state.

## The monitor needs communication to assess the backup input

The pump controller reports its emergency-input status over LIN. The PCM compares that report with the expected ignition-linked state. Ford specifies five seconds to register a mismatch and requires the absence of the U019F LIN communication fault.

That prerequisite is important. A controller cannot confidently evaluate the returned input state when the reporting link itself is invalid. P26CA should therefore be interpreted as a comparison problem under usable communication conditions, rather than treated as another name for complete loss of pump communication.

## Distinguish command-path faults from stalled operation

The summary gives mechanical pump problems their own monitoring logic. For example, P26CB uses current and speed evidence associated with repeated restart attempts. P26CA instead focuses on whether the emergency-run input's state is consistent with the vehicle's commanded electrical state.

A technician can use that distinction to organize the evidence: which module reported the fault, whether LIN was functioning, and what ignition and emergency-input states were recorded. A pump that happens to run during a later observation has not necessarily demonstrated that this comparison fault has disappeared.

The monitor description does not supply connector pinouts or authorize bypassing the emergency input. Verification should follow the exact vehicle's wiring and diagnostic procedure and confirm correct state reporting through the relevant ignition transitions.

## Source and applicability

Ford Motor Company, [physical page 106](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=106); [physical page 107](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=107). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
