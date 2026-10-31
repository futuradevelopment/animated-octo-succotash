---
{"entryId":"generic-p02ab","code":"P02AB","title":"P02AB: Ford cylinder 5 minimum fuel-trim correction","description":"Ford's P02AB monitor reports cylinder 5 at the minimum fuel-trim boundary during an enabled balancing check.","status":"draft","sourceReview":"checked","scope":"Ford 2015 model-year diesel OBD system operation summary, revision December 22, 2014; the cited monitor only, without blanket model or engine applicability.","sourceIds":["ford-diesel-2015"],"authoringBatch":"batch-32","sourcePages":[{"sourceId":"ford-diesel-2015","pages":[35]}]}
---

# P02AB: Ford cylinder 5 minimum fuel-trim correction

P02AB identifies the minimum fuel-trim limit for cylinder 5 in Ford's documented diesel fuel-balancing monitor. It records a lower correction boundary. The code does not establish that the injector circuit is low in voltage or that cylinder 5 is physically located on a particular bank.

## Read the result with the test conditions

Ford requires completed FBC wheel learning, an acceptable crankshaft-position sensor and operation outside regeneration. Engine speed and injection quantity must fall within the monitor's stated ranges, with a typical evaluation lasting 7.5 seconds. A later scan reading taken in a different mode may not reproduce the limit that triggered the code.

The paired P02AA entry is the maximum-limit result for cylinder 5. Keeping that directional distinction helps a technician interpret the controller's correction instead of treating all balance codes as identical.

## Confirm the underlying reason

The summary uses an internal cylinder-balance criterion, with no universal conversion into injector flow or resistance. The engine-specific balance procedure must determine why the controller needed the limiting correction. Retain electrical injector codes as separate evidence and confirm physical cylinder identification from service information. P02AB alone does not prove that an injector replacement will resolve the imbalance.

## Source and applicability

Ford 2015 model-year diesel OBD system operation summary, revision December 22, 2014; the cited monitor only, without blanket model or engine applicability. Ford source, physical PDF page [35](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/DOBDSM1501.pdf#page=35). The documented monitor explains the fault decision; vehicle-specific service information is still needed for connector identification and a complete repair procedure.
