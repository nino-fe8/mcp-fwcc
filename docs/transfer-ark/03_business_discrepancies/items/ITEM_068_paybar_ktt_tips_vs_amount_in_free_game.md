---
id: "transfer-ark:discrepancy:item_068_paybar_ktt_tips_vs_amount_in_free_game"
title: "Item #68: Paybar Tips vs Win Amount Presentation In Free Game"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["PaylineInfoModule", "PaylineInfoModule9666"]
tags: ["discrepancy_item_68", "paybar", "ktt", "tips", "free_game", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #68: Paybar Tips vs Win Amount Presentation In Free Game

<!-- convention-summary-start -->
### Paybar Tips vs Win Amount Presentation In Free Game Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #68: Paybar Tips vs Win Amount Presentation In Free Game.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#68` in `Compare Cocos vs Pixijs.xlsx` (Section 2: Big Win & Free Game)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Paybar State During Non-Winning Spins** | Displays rotating gameplay hint/tips text when a spin yields no win. | Renders completely blank when no win occurs; displays the exact win amount on winning spins and accumulates across refill cascades. | **Theo Ref**: Suppress gameplay tips in Paybar during Free Game; leave blank on loss and display formatted `$XXX.XX` on win. |
