---
id: "transfer-ark:discrepancy:item_054_network_disconnect_popup_and_retry_with_ru"
title: "Item #54: Network Disconnect Popup & Retry Handling With Return URL"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["MessageManager", "DialogMessageModule", "DialogManager"]
tags: ["discrepancy_item_54", "network_disconnect", "retry_popup", "ru_param", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #54: Network Disconnect Popup & Retry Handling With Return URL

<!-- convention-summary-start -->
### Network Disconnect Popup & Retry Handling With Return URL Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #54: Network Disconnect Popup & Retry Handling With Return URL.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#54` in `Compare Cocos vs Pixijs.xlsx` (Section 4: Popups, Settings, Audio & Network)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Disconnection Modal Flow** | Shows "No internet connection, loading again..." during retry attempts; after 10 failed retries, presents popup. | Displays connection lost modal: if no `&ru`, modal has no exit button; if `&ru` exists, shows "Confirm" button to redirect user to lobby return URL. | **Theo Ref**: In disconnection modal, show Confirm button to redirect to `&ru` when present; otherwise omit exit button. |
