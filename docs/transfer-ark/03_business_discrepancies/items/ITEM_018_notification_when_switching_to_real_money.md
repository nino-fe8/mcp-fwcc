---
id: "transfer-ark:discrepancy:item_018_notification_when_switching_to_real_money"
title: "Item #18: Confirmation Notification When Switching To Real Money"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["DialogMessageModule", "DialogManager", "SlotGameLogic"]
tags: ["discrepancy_item_18", "trial_to_real", "confirmation_modal", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #18: Confirmation Notification When Switching To Real Money

<!-- convention-summary-start -->
### Confirmation Notification When Switching To Real Money Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #18: Confirmation Notification When Switching To Real Money.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#18` in `Compare Cocos vs Pixijs.xlsx` (Section 6: Demo Mode vs Real Mode)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Switching from Demo to Real Play** | Switches modes instantly without presenting a confirmation warning. | Displays an explicit confirmation dialog informing player that Demo Mode has ended and real cash bets will apply. | **Theo Ref**: Present confirmation dialog before transitioning to Real Money Mode. |
