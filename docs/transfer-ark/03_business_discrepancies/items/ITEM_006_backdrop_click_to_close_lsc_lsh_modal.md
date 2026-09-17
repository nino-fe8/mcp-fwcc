---
id: "transfer-ark:discrepancy:item_006_backdrop_click_to_close_lsc_lsh_modal"
title: "Item #06: Backdrop Click To Close LSC & LSH Popup Modal"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["BetHistoryPopup", "JackpotHistoryPopup", "BaseUIPopup"]
tags: ["discrepancy_item_06", "lsc", "lsh", "backdrop_click", "popup_close", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #06: Backdrop Click To Close LSC & LSH Popup Modal

<!-- convention-summary-start -->
### Backdrop Click To Close LSC & LSH Popup Modal Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #06: Backdrop Click To Close LSC & LSH Popup Modal.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#6` in `Compare Cocos vs Pixijs.xlsx` (Section 3: LSC & LSH)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **LSC / LSH Modal Frame & Backdrop Tap** | Fullscreen modal that swallows all backdrop taps; user must explicitly tap the top `Close` button. | Non-fullscreen modal centered on screen. Clicking anywhere outside the popup content window automatically dismisses the modal. | **Theo Ref**: Attach backdrop touch listener to background blocker node to close LSC / LSH upon outside click. |
