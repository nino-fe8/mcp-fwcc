---
id: "transfer-ark:discrepancy:item_072_resume_popup_space_and_click_dismiss"
title: "Item #72: Resume Session Popup Interaction Via Space & Click"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["DialogMessageModule", "SlotGameLogic"]
tags: ["discrepancy_item_72", "resume_popup", "space_key", "click_dismiss", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #72: Resume Session Popup Interaction Via Space & Click

<!-- convention-summary-start -->
### Resume Session Popup Interaction Via Space & Click Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #72: Resume Session Popup Interaction Via Space & Click.
- **Key Mechanisms & Design**: Adopts Theo Ref (Space Key & Click to Dismiss). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#72` in `Compare Cocos vs Pixijs.xlsx` (Section 7: Viewport & Resume)
- **QA Bug Tracking Link**: [ClickUp Task 86d4230c9](https://app.clickup.com/t/9008199668/86d4230c9)
- **Final Decision**: **Theo Ref (Space Key & Click to Dismiss)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Dismissing Reconnect / Resume Modal** | Requires precise tap on modal "Confirm" button. | Pressing `Spacebar` or tapping anywhere dismisses the resume session dialog. | **Theo Ref**: Bind global `Spacebar` keyboard event and screen tap to dismiss session resume dialogs. |
