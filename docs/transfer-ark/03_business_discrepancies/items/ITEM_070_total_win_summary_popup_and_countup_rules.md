---
id: "transfer-ark:discrepancy:item_070_total_win_summary_popup_and_countup_rules"
title: "Item #70: Total Win Summary Popup and Coin Count-up Rules"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["TotalWinModule", "WinEffectModule", "GameModeDirectorModule"]
tags: ["discrepancy_item_70", "total_win", "countup", "bug_009", "celebration", "ark_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #70: Total Win Summary Popup and Coin Count-up Rules

<!-- convention-summary-start -->
### Total Win Summary Popup and Coin Count-up Rules Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #70: Total Win Summary Popup and Coin Count-up Rules.
- **Key Mechanisms & Design**: Adopts Theo ARK / Theo Ref Hybrid Standard. Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `../01_bugs_and_gotchas/BUG_009_bypass_total_win_popup_when_free_game_total_win_is_zero.md`
- **Related Docs**: [`BUG_009_bypass_total_win_popup_when_free_game_total_win_is_zero.md`](../01_bugs_and_gotchas/BUG_009_bypass_total_win_popup_when_free_game_total_win_is_zero.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#70` in `Compare Cocos vs Pixijs.xlsx` (Section 2: Big Win & Free Game)
- **Related Bug Documentation**: [`BUG_009_bypass_total_win_popup_when_free_game_total_win_is_zero.md`](../01_bugs_and_gotchas/BUG_009_bypass_total_win_popup_when_free_game_total_win_is_zero.md)
- **Final Decision**: **Theo ARK / Theo Ref Hybrid Standard**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Total Win Popup & Count-up Animation** | When Free Game ends, always displays Total Win popup and executes a multi-phase coin count-up tally animation, even if total win is $0.00. | End of Free Game displays summary popup with final static amount without long count-up delay. | **Theo ARK Standard (`BUG_009`)**: If total win > $0.00, show Total Win popup with smooth coin count-up tally; if total win == $0.00, bypass the celebration modal completely. |
