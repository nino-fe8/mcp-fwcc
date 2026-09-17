---
id: "transfer-ark:discrepancy:item_035_row_hover_highlight_and_feature_dots"
title: "Item #35 & #36: Row Hover Highlight & Feature Indicator Dots in Bet History"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["BetHistoryPopup", "BetHistoryItem"]
tags: ["discrepancy_item_35", "discrepancy_item_36", "hover", "feature_dots", "free_game_dot", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #35 & #36: Row Hover Highlight & Feature Indicator Dots in Bet History

<!-- convention-summary-start -->
### Item #35 & #36: Row Hover Highlight & Feature Indicator Dots in Bet History Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #35 & #36: Row Hover Highlight & Feature Indicator Dots in Bet History.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Rows**: `#35`, `#36` in `Compare Cocos vs Pixijs.xlsx` (Section 3: LSC & LSH)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Row Hover Effect & Feature Flagging** | Highlights entire row background on mouse hover. Does not visually flag special feature rounds in list view. | No row background highlight (only `>>` detail button hovers). When a round triggered Free Game / Jackpot / Max Win, renders a colored indicator dot below the `>>` button. | **Theo Ref**: Render colored indicator dots below detail button for rounds containing Free Spins or Jackpot hits. |
