---
{"entryId": "generic-p2ceb", "code": "P2CEB", "title": "P2CEB: Ford evaluates sensor D pressure against offset and flow expectations", "description": "Ford's particulate-pressure sensor D performance monitor checks more than an electrical signal remaining inside its voltage range.", "status": "draft", "sourceReview": "checked", "scope": "Ford gasoline engines, model years 2024–2025. Engine/calibration applicability differs by section; individual vehicles and engines have not been mapped.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [8, 9]}], "authoringBatch": "batch-42"}
---

# P2CEB: Ford evaluates sensor D pressure against offset and flow expectations

P2CEB is Ford's particulate-filter pressure sensor D range/performance category. Its functional checks follow successful electrical checks and evaluate whether pressure behaves credibly under specific engine and exhaust conditions. A signal can remain electrically in range while failing one of those plausibility tests.

## Different operating states support different comparisons

The offset check uses an engine-not-turning condition and a calibrated average-pressure limit in the stated 16 to 32 hPa range. Ford also describes a post-run version with additional exhaust-temperature and shutdown-time conditions. An arbitrary reading during active exhaust flow is not equivalent to that offset test.

The running rationality check compares average measured pressure with expected pressure as a function of flow, accumulating 20 seconds of the stated discrepancy. A separate derivative check evaluates the pressure response to a positive or negative change in inferred exhaust flow over two seconds. The direction of the flow change changes which pressure response is considered insufficient or inconsistent.

## Do not equate a sensor-performance result with filter blockage

These tests assess the credibility of pressure information. Ford's filter restriction and substrate-condition monitors are separate, and they depend on valid supporting sensor data. P2CEB alone does not prove which physical filter, pressure connection or sensing component caused the mismatch.

Useful diagnosis retains the failed functional branch, exhaust conditions and electrical-check status. The source's values are calibration examples, not instructions to create exhaust pressure or perform an improvised load test. Verification uses the exact vehicle's procedure and a qualifying functional check; one normal sensor voltage or a code clear does not establish that its offset and flow-response behavior are credible.

## Source and applicability

Ford Motor Company, [physical page 8](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=8); [physical page 9](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=9). Ford gasoline engines, model years 2024–2025. Engine/calibration applicability differs by section; individual vehicles and engines have not been mapped.
