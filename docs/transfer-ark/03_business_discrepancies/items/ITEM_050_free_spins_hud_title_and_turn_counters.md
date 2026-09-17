---
id: "transfer-ark:discrepancy:item_050_free_spins_hud_title_and_turn_counters"
title: "Item #50 & #51: Free Spins HUD Title and Turn/Round Counters"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["FreeGameHUD", "GameModeDirectorModule"]
tags: ["discrepancy_item_50", "free_spins", "hud", "counters", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #50 & #51: Free Spins HUD Title and Turn/Round Counters

<!-- convention-summary-start -->
### Item #50 & #51: Free Spins HUD Title and Turn/Round Counters Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #50 & #51: Free Spins HUD Title and Turn/Round Counters.
- **Key Mechanisms & Design**: Adopts Theo Ref (Using "Free Spins" nomenclature). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Rows**: `#50`, `#51` in `Compare Cocos vs Pixijs.xlsx` (Section 2: Big Win & Free Game)
- **Final Decision**: **Theo Ref (Using "Free Spins" nomenclature)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Free Game HUD Title & Counter** | Uses text "Free Game" with spin index and win amount per turn. | Uses title "Free Spins", displays Turn X/Y and accumulated feature total win. | **Theo Ref**: Standardize HUD title string to "Free Spins" and render counter formatted as `Turn X/Y`. |
