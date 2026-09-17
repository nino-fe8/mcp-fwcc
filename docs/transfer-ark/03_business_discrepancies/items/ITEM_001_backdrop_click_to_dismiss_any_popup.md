---
id: "transfer-ark:discrepancy:item_001_backdrop_click_to_dismiss_any_popup"
title: "Item #01: Backdrop Click To Dismiss Any Active Popup Modal"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["BaseUIPopup", "SettingPanel", "InfoDialog"]
tags: ["discrepancy_item_01", "backdrop_click", "popup_dismiss", "touch_blocker", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #01: Backdrop Click To Dismiss Any Active Popup Modal

<!-- convention-summary-start -->
### Backdrop Click To Dismiss Any Active Popup Modal Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #01: Backdrop Click To Dismiss Any Active Popup Modal.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `BaseUIPopup9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#1` in `Compare Cocos vs Pixijs.xlsx` (Section 4: Popups, Settings, Audio & Network)
- **QA Bug Tracking Link**: [ClickUp Task 86d418xb5](https://app.clickup.com/t/9008199668/86d418xb5)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Backdrop Tap on Setting & Modals** | Clicking the dimmed background area outside modal does not close the popup. | Clicking the dark background outside of ANY popup immediately closes the modal. | **Theo Ref**: Bind click on popup background overlay node to invoke `this.closePopup()`. |

---

## 2. 🛠️ Implementation Recipe
In `BaseUIPopup9666.ts`:
```typescript
protected onLoadExtend(): void {
    if (this.nodeBackgroundBlocker) {
        this.nodeBackgroundBlocker.on(cc.Node.EventType.TOUCH_END, () => {
            this.closePopup();
        }, this);
    }
}
```
