---
id: "transfer-ark:discrepancy:item_031_spin_button_three_states_standardization"
title: "Item #31: Spin Button Three States Standardization"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["SlotButtonNormal", "SlotButtonNormal9666"]
tags: ["discrepancy_item_31", "spin_button", "states", "idle", "spin", "lock", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #31: Spin Button Three States Standardization

<!-- convention-summary-start -->
### Spin Button Three States Standardization Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #31: Spin Button Three States Standardization.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#31` in `Compare Cocos vs Pixijs.xlsx` (Section 1: Base Game & Action Panel)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Spin Button Visual States** | 5 distinct states:<br>1. Idle<br>2. Active<br>3. Disable<br>4. F2R / Quick Stop effect<br>5. Lock during Auto Spin | Only 3 streamlined states:<br>1. **Idle** (Waiting for player tap)<br>2. **Spin** (Reels in motion)<br>3. **Lock** (Auto Spin active / Win celebration) | **Theo Ref**: Simplify button state machine to 3 core states. Remove visual clutter from intermediate active/F2R overlays. |

---

## 2. 🛠️ Implementation & State Enum

```typescript
export enum SpinButtonState {
    IDLE = "IDLE",
    SPIN = "SPIN",
    LOCK = "LOCK"
}

public setSpinButtonState(state: SpinButtonState): void {
    switch (state) {
        case SpinButtonState.IDLE:
            this.btnSpin.interactable = true;
            this.playAnimation("idle");
            break;
        case SpinButtonState.SPIN:
            this.btnSpin.interactable = false;
            this.playAnimation("spin");
            break;
        case SpinButtonState.LOCK:
            this.btnSpin.interactable = false;
            this.playAnimation("lock");
            break;
    }
}
```
