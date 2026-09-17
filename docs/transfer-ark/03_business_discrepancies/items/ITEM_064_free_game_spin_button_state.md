---
id: "transfer-ark:discrepancy:item_064_free_game_spin_button_state"
title: "Item #64: Spin Button Single State In Free Game"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["SlotButtonNormal", "FreeGameDirector"]
tags: ["discrepancy_item_64", "spin_button", "free_game", "states", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #64: Spin Button Single State In Free Game

<!-- convention-summary-start -->
### Spin Button Single State In Free Game Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #64: Spin Button Single State In Free Game.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#64` in `Compare Cocos vs Pixijs.xlsx` (Section 2: Big Win & Free Game)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Spin Button Behavior in Free Game** | Has 3 states (Active, Disable, F2R effect). | Has only 1 continuous spin state during Free Game, with no disabled or F2R state transitions. | **Theo Ref**: Maintain a single continuous spinning visual state on the Spin button throughout Free Game iterations. |
