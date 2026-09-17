---
id: "transfer-ark:discrepancy:item_074_idle_timeout_popup_suppression"
title: "Item #74: Idle 30-Minute Timeout Popup Suppression"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["IdleTimeoutManager", "DialogMessageModule", "SlotGameLogic"]
tags: ["discrepancy_item_74", "idle_timeout", "popup_suppression", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #74: Idle 30-Minute Timeout Popup Suppression

<!-- convention-summary-start -->
### Idle 30-Minute Timeout Popup Suppression Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #74: Idle 30-Minute Timeout Popup Suppression.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#74` / Unnumbered row in `Compare Cocos vs Pixijs.xlsx` (Section 1: Base Game & Action Panel)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **30-Minute Idle Inactivity** | Automatically pops up an "Idle Timeout Warning" modal forcing the player to click Confirm. | No Idle popup appears. The game remains quietly at idle in the browser tab. | **Theo Ref**: Disable the 30-minute client idle timer popup entirely. |
