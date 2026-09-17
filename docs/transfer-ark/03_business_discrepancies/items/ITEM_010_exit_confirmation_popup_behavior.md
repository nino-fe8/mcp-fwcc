---
id: "transfer-ark:discrepancy:item_010_exit_confirmation_popup_behavior"
title: "Item #10: Exit Confirmation Popup Before Game Departure"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["BackToLobbyModule", "DialogMessageModule", "DialogManager"]
tags: ["discrepancy_item_10", "exit_confirmation", "dialog_message", "ark_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #10: Exit Confirmation Popup Before Game Departure

<!-- convention-summary-start -->
### Exit Confirmation Popup Before Game Departure Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #10: Exit Confirmation Popup Before Game Departure.
- **Key Mechanisms & Design**: Adopts Theo ARK Standard (Requires Confirmation Dialog). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#10` in `Compare Cocos vs Pixijs.xlsx` (Section 4: Popups, Settings, Audio & Network)
- **QA Bug Tracking Link**: [ClickUp Task 86d419vpn](https://app.clickup.com/t/9008199668/86d419vpn)
- **Final Decision**: **Theo ARK Standard (Requires Confirmation Dialog)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Exit Button Click Action** | Displays confirmation popup with `Cancel` (No) and `OK` (Confirm) buttons. | Exits game immediately without prompt. | **Theo ARK Standard**: Retain confirmation popup (`DialogMessage`) to prevent accidental session abandonment. |
