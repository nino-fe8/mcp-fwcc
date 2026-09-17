---
id: "transfer-ark:discrepancy:item_066_win_display_and_accumulation_in_free_game"
title: "Item #66: Win Display Box & Win Accumulation In Free Game"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["PaylineInfoModule", "PaylineInfoModule9666", "TotalWinModule"]
tags: ["discrepancy_item_66", "win_box", "free_game", "win_accumulation", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #66: Win Display Box & Win Accumulation In Free Game

<!-- convention-summary-start -->
### Win Display Box & Win Accumulation In Free Game Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #66: Win Display Box & Win Accumulation In Free Game.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#66` in `Compare Cocos vs Pixijs.xlsx` (Section 2: Big Win & Free Game)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Win Box Presentation in Free Game** | Win box shows `$0.00` when entering Free Game, and incrementally tallies subsequent spin wins. | No separate Win Box exists on the board; accumulated win is streamed directly into the primary bottom Win Bar. | **Theo Ref**: Stream accumulated Free Spin winnings into the primary bottom paybar. |
