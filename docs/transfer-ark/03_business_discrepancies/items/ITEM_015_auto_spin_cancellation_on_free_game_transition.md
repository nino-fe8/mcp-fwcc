---
id: "transfer-ark:discrepancy:item_015_auto_spin_cancellation_on_free_game_transition"
title: "Item #15: Auto Spin Cancellation Upon Entering Free Game"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["AutoSpinPanelv3", "GameModeDirectorModule"]
tags: ["discrepancy_item_15", "auto_spin", "free_game_transition", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #15: Auto Spin Cancellation Upon Entering Free Game

<!-- convention-summary-start -->
### Auto Spin Cancellation Upon Entering Free Game Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #15: Auto Spin Cancellation Upon Entering Free Game.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#15` in `Compare Cocos vs Pixijs.xlsx` (Section 2: Big Win & Free Game)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Auto Spin State After Free Game** | When entering Free Game during active Auto Spin, base game Auto Spin resumes automatically when returning to Normal Game. | Free Game cancels base game Auto Spin completely. When returning to Normal Game, the game is at idle. | **Theo Ref**: Cancel base game Auto Spin upon entering Free Game. Require player to explicitly re-trigger auto spin upon returning to Normal Game. |
