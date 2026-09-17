---
id: "transfer-ark:discrepancy:item_012_session_id_copy_button_removal"
title: "Item #12 & #39: Session ID Copy Button Removal in Bet History"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["BetHistoryPopup", "BetHistoryDetailManagerBase"]
tags: ["discrepancy_item_12", "discrepancy_item_39", "session_id", "copy_button", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #12 & #39: Session ID Copy Button Removal in Bet History

<!-- convention-summary-start -->
### Item #12 & #39: Session ID Copy Button Removal in Bet History Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #12 & #39: Session ID Copy Button Removal in Bet History.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Rows**: `#12`, `#39` in `Compare Cocos vs Pixijs.xlsx` (Section 3: LSC & LSH)
- **QA Bug Tracking Link**: [ClickUp Task 86d419xxe](https://app.clickup.com/t/9008199668/86d419xxe)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Session ID Copy Action** | Renders a "Copy Session ID" icon button next to the session code on every detail page. | No copy button exists. Session ID is displayed as a simple static string on the summary page only. | **Theo Ref**: Remove redundant copy icon button from Bet History item rows and detail views. |
