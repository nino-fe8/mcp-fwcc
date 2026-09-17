---
id: "transfer-ark:discrepancy:item_065_bet_info_display_in_free_game"
title: "Item #65: Bet Information Display In Free Game Mode"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["BetManager", "ActionPanel", "FreeGameHUD"]
tags: ["discrepancy_item_65", "bet_info", "free_game", "denom", "credit", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #65: Bet Information Display In Free Game Mode

<!-- convention-summary-start -->
### Bet Information Display In Free Game Mode Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #65: Bet Information Display In Free Game Mode.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#65` in `Compare Cocos vs Pixijs.xlsx` (Section 2: Big Win & Free Game)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Bet Values Shown in Free Game** | Only shows user bet amount for that single spin. | Renders identical bet structure as Normal Action Panel: Coin Value, Bet Level, and Total Bet. | **Theo Ref**: Keep all 3 bet parameters (Coin Value, Bet Level, Total Bet) visible on the Free Game Action Panel in locked state. |
