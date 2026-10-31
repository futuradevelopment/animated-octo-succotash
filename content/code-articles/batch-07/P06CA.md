---
{"entryId":"generic-p06ca","code":"P06CA","title":"P06CA: cylinder 6 glow-plug rationality and inconsistent source wording","description":"P06CA concerns cylinder 6 glow-plug rationality, with a cylinder reference conflict in the reviewed GM table.","status":"draft","sourceReview":"needs-review","scope":"Documented 2025 GM diagnostic parameter monitor in 25OBDG04B.pdf; model, engine and calibration applicability require vehicle-specific confirmation.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[1255]}],"authoringBatch":"batch-07"}
---

# P06CA: cylinder 6 glow-plug rationality and inconsistent source wording

The P06CA dictionary definition and the system label in GM's table both point to cylinder 6. The same row's malfunction text unexpectedly names glow plug 4. This article retains that discrepancy rather than silently turning the table into a definitive cylinder-location instruction.

## Supported operation of the monitor

GM describes an electrical-resistance check based on measured voltage divided by measured current. It is intended to detect a glow plug operating outside its specified range. The displayed parameter limits are 0.23 and 2.00, with no explicit unit attached to the expression on this page. The generic word “incorrect” therefore should not be taken as proof of an incorrect part number.

The plug must be commanded on for a calibrated interval. There must be no individual plug electrical fault or glow-plug voltage-feedback fault, and the glow system must be enabled. Engine operation excludes cranking; battery voltage and diagnostic enablement must also be acceptable.

## Verification without overreading the row

The diagnostic uses 15 failing samples within 25, evaluated on a 100-millisecond task, and lists Type B reporting over two trips. A valid retest must exercise the powered resistance check after its prerequisites are met. A no-code result while feedback faults inhibit it is inconclusive.

Before using P06CA to select a physical plug or circuit, resolve the cylinder-label conflict through vehicle-specific service information. The row supports the resistance-monitor explanation but does not establish the cause, replacement requirement, or exact vehicle application. This documented limitation is why the article remains flagged for source review.

Source: [GM monitor, PDF page 1255](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1255).
