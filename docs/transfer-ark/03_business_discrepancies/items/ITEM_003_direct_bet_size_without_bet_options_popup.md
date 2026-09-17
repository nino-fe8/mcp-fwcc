---
id: "transfer-ark:discrepancy:item_003_direct_bet_size_without_bet_options_popup"
title: "Item #03: Direct Bet Size Adjustment Without Bet Options Popup"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["BetOptionsPanel", "BetManager", "SlotButtonNormal"]
tags: ["discrepancy_item_03", "bet_options", "popup_suppression", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #03: Direct Bet Size Adjustment Without Bet Options Popup

<!-- convention-summary-start -->
### Direct Bet Size Adjustment Without Bet Options Popup Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #03: Direct Bet Size Adjustment Without Bet Options Popup.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/GUI/BetOptions/BetOptionsModule.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#3` in `Compare Cocos vs Pixijs.xlsx` (Section 1: Base Game & Action Panel)
- **QA Bug Tracking Link**: [ClickUp Task 86d419402](https://app.clickup.com/t/9008199668/86d419402)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Clicking Bet Size / Total Bet Box** | Opens a full Bet Options modal containing Bet Level, Coin Value grid, and Quick Bet selectors. | No Bet Options popup exists. Clicking Bet Size does not open any modal; player adjusts bet directly via `+` and `-` buttons. | **Theo Ref**: Remove / disable the click event on the Bet Size label. Keep all bet adjustments inline on the Action Panel. |

---

## 2. 🔍 Root Cause Analysis in Base Framework

In `assets/cc-common/cc-slot-module/GUI/BetOptions/BetOptionsModule.ts`:
```typescript
setupEvents(): void {
    // ❌ Base SDK binds click on bet label to open BetOptions popup
    this.lbBetSizeNode.on(cc.Node.EventType.TOUCH_END, this.openBetOptions, this);
}
```

---

## 3. 🛠️ Implementation & Codebase Override Recipe

In custom subclass or prefab configuration:

```typescript
// Disable touch interaction on the Bet Size container
protected onLoadExtend(): void {
    super.onLoadExtend();
    
    const betSizeBtn = this.nodeBetSize.getComponent(cc.Button);
    if (betSizeBtn) {
        betSizeBtn.interactable = false; // Prevents triggering Bet Options modal
    }
    this.nodeBetSize.off(cc.Node.EventType.TOUCH_END);
}
```

---

## 4. ⚠️ Gotchas & Edge Cases
- Ensure the `+` and `-` buttons still cycle smoothly through the configured denomination and bet multiplier array (`BET_STEPS`).
