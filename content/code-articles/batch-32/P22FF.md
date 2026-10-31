---
{"entryId":"generic-p22ff","code":"P22FF","title":"P22FF: Ford SCR inlet temperature stays below its target","description":"Ford's P22FF monitor compares measured SCR inlet temperature with a requested temperature over a sustained operating window.","status":"draft","sourceReview":"checked","scope":"Ford 2015 model-year diesel OBD system operation summary, revision December 22, 2014; the cited monitor only, without blanket model or engine applicability.","sourceIds":["ford-diesel-2015"],"authoringBatch":"batch-32","sourcePages":[{"sourceId":"ford-diesel-2015","pages":[18]}]}
---

# P22FF: Ford SCR inlet temperature stays below its target

P22FF means the SCR catalyst inlet temperature is too low in the documented Ford 2015 diesel monitor. The controller compares measured temperature with its setpoint. A measured value more than 80°C below target for 300 seconds is the listed failure condition. The relevant evidence is therefore a sustained target error, not simply a cold exhaust reading.

## Conditions behind the comparison

Ford places the example in normal engine operation, with engine speed between 800 and 1,600 rpm and requested torque between 50 and 600 Nm. The monitor also depends on acceptable temperature, pressure, engine-position and fuel/EGR system inputs. Those prerequisites matter when a temperature-control complaint appears alongside another system fault.

The monitoring period depends on driving conditions. A brief idle check or one temperature sample cannot establish that the controller completed the documented assessment.

## Interpret the control error

Retain both desired and actual SCR inlet temperature with the qualifying operating history. The code does not independently prove a failed temperature sensor or ineffective catalyst. Investigate why the requested heat was not achieved, using the applicable exhaust-temperature control procedure and validated sensor information.

## Source and applicability

Ford 2015 model-year diesel OBD system operation summary, revision December 22, 2014; the cited monitor only, without blanket model or engine applicability. Ford source, physical PDF page [18](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/DOBDSM1501.pdf#page=18). The documented monitor explains the fault decision; vehicle-specific service information is still needed for connector identification and a complete repair procedure.
