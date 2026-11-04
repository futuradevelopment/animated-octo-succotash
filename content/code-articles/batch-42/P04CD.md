---
{"entryId": "generic-p04cd", "code": "P04CD", "title": "P04CD: a Ford refueling request that remains active", "description": "Ford distinguishes a continuously asserted cabin refuel switch from an unlock-output or tank-pressure fault.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [56]}], "authoringBatch": "batch-42"}
---

# P04CD: a Ford refueling request that remains active

An active request can be a fault even when a driver is not trying to refuel. Ford's P04CD example concerns a cabin fuel-door request switch that remains asserted. The documented causes include a short to ground in the request circuit and a button mechanically held in its depressed position.

## A stuck input can repeatedly request the sequence

With the vehicle stopped and the specified Park or Neutral and parking-brake conditions satisfied, this fault can keep requesting tank venting and door release. Ford also states that the refueling valve closes after its timeout. The request state and the valve's actual operating state can therefore differ after the sequence has timed out.

The monitor table specifies a five-second duration and includes a vehicle-speed condition above 5 mph for P04CD. That is a detail of the manufacturer's detection strategy, not a reason to drive a vehicle merely to provoke this code. The recorded speed and request status can instead help explain when the monitor recognized the persistent input.

## Separate the switch from the commanded hardware

P04CD does not by itself diagnose a stuck-open vapor valve. Nor does a released fuel door prove that its switch has returned to an inactive state. The controller's input observation needs to be compared with the physical button and the progress of the refueling sequence.

Ford describes normal operation once the door is open in this example, but that does not remove the underlying input fault. Verification should establish that the request both activates and releases appropriately under the approved service procedure. A timeout or a temporarily normal door position is not equivalent to a healthy switch circuit.

## Source and applicability

Ford Motor Company, [physical page 56](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=56). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
