---
id: "transfer-ark:discrepancy:item_019_force_return_to_real_money_during_free_game"
title: "Item #19: Force Return To Real Money Mode During Ongoing Free Game"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["GameModeDirectorModule", "SlotGameLogic", "connectNetworkV3"]
tags: ["discrepancy_item_19", "trial_mode", "free_game", "force_return", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #19: Force Return To Real Money Mode During Ongoing Free Game

<!-- convention-summary-start -->
### Force Return To Real Money Mode During Ongoing Free Game Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #19: Force Return To Real Money Mode During Ongoing Free Game.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#19` in `Compare Cocos vs Pixijs.xlsx` (Section 6: Demo Mode vs Real Mode)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Returning to Real Money Mid-Free Game** | Blocks mode switching until active Free Game finishes and session ends. | Permits forcing user back to Real Money Mode immediately, discarding demo session. | **Theo Ref**: Allow user to switch back to real money mode immediately upon confirmation. |
