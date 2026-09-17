---
id: "transfer-ark:discrepancy:item_004_hold_spin_button_to_auto_spin"
title: "Item #04: Hold Spin Button to Trigger Auto Spin vs Popup Selector"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["AutoSpinPanelv3", "SlotButtonNormal", "GameDirector"]
tags: ["discrepancy_item_04", "auto_spin", "long_press", "hold_to_spin", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #04: Hold Spin Button to Trigger Auto Spin vs Popup Selector

<!-- convention-summary-start -->
### Hold Spin Button to Trigger Auto Spin vs Popup Selector Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #04: Hold Spin Button to Trigger Auto Spin vs Popup Selector.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/GUI/AutoSpin/AutoSpinPanelv3.ts`, `SlotButtonNormal9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#4` in `Compare Cocos vs Pixijs.xlsx` (Section 1: Base Game & Action Panel)
- **QA Bug Tracking Link**: [ClickUp Task 86d41af10](https://app.clickup.com/t/9008199668/86d41af10)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Auto Spin Initiation Flow** | Clicking Auto Spin opens a full modal (`AutoSpinPanelv3`) where the player picks spin counts (10, 25, 50, 100, $\infty$) and sets loss limits. | No Auto Spin popup exists. Long-pressing / holding the Spin button (0.8s - 1.0s) automatically engages continuous Auto Spin mode. | **Theo Ref**: Implement long-press gesture on Spin button to directly trigger auto-spin mode without presenting a popup selector. |

---

## 2. 🔍 Root Cause Analysis in Base Framework

In `assets/cc-common/cc-slot-module/GUI/AutoSpin/AutoSpinPanelv3.ts`:
The SDK requires explicit button binding `this.btnAutoSpin.on('click', () => this.showPopup())`.

---

## 3. 🛠️ Implementation & Codebase Override Recipe

In custom `SlotButtonNormal9666.ts`:

```typescript
private _longPressTimer: any = null;
private readonly LONG_PRESS_DURATION: number = 0.8; // 800ms threshold

protected setupSpinLongPress(): void {
    this.btnSpin.node.on(cc.Node.EventType.TOUCH_START, () => {
        this._longPressTimer = this.scheduleOnce(() => {
            // Long press detected: engage auto spin
            this.gameLogic.emit(GameLogicUIEvents.START_AUTO_SPIN, { count: 999 });
        }, this.LONG_PRESS_DURATION);
    }, this);

    this.btnSpin.node.on(cc.Node.EventType.TOUCH_END, () => {
        if (this._longPressTimer) {
            this.unschedule(this._longPressTimer);
            this._longPressTimer = null;
        }
    }, this);

    this.btnSpin.node.on(cc.Node.EventType.TOUCH_CANCEL, () => {
        if (this._longPressTimer) {
            this.unschedule(this._longPressTimer);
            this._longPressTimer = null;
        }
    }, this);
}
```

---

## 4. ⚠️ Gotchas & Edge Cases
- Distinguish between single tap (triggers normal single spin) and long press (triggers auto spin).
- Cancel the timer immediately if the touch moves out of button bounding box (`TOUCH_CANCEL`).
