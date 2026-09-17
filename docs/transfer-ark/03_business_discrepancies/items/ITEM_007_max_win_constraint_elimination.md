---
id: "transfer-ark:discrepancy:item_007_max_win_constraint_elimination"
title: "Item #07: Max Win Constraint Elimination & Cap Removal"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["WinEffectModule", "TotalWinModule", "SlotGameLogic"]
tags: ["discrepancy_item_07", "max_win", "cap", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #07: Max Win Constraint Elimination & Cap Removal

<!-- convention-summary-start -->
### Max Win Constraint Elimination & Cap Removal Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #07: Max Win Constraint Elimination & Cap Removal.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `GameConfig9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#7` in `Compare Cocos vs Pixijs.xlsx` (Section 1: Base Game & Action Panel)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Max Win Cap Evaluation** | Base SDK enforces a hardcoded Max Win cap (e.g. 5,000x bet). When reached, forces round termination and displays a Max Win celebration modal. | No Max Win limit exists. All scatter cascades, multipliers, and wins continue accumulating naturally. | **Theo Ref**: Remove hardcoded Max Win client caps. Payout is determined solely by server-calculated matrix results. |

---

## 2. 🛠️ Implementation Recipe
In `GameConfig9666.ts`, omit or set `MAX_WIN_MULTIPLIER = 0` (unconstrained).
