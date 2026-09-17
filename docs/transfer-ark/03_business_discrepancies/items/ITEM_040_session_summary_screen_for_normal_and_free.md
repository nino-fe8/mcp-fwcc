---
id: "transfer-ark:discrepancy:item_040_session_summary_screen_for_normal_and_free"
title: "Item #40 & #41: Session Summary Screen For Normal & Free Game Details"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["BetHistoryDetailManagerBase", "BetHistoryPopup"]
tags: ["discrepancy_item_40", "discrepancy_item_41", "summary_screen", "freespin_count", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #40 & #41: Session Summary Screen For Normal & Free Game Details

<!-- convention-summary-start -->
### Item #40 & #41: Session Summary Screen For Normal & Free Game Details Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #40 & #41: Session Summary Screen For Normal & Free Game Details.
- **Key Mechanisms & Design**: Adopts Theo Ref (Summary with Free Spins count). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Rows**: `#40`, `#41` in `Compare Cocos vs Pixijs.xlsx` (Section 3: LSC & LSH)
- **Final Decision**: **Theo Ref (Summary with Free Spins count)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Session Summary Display Trigger** | Only displays summary page when round included Free Game triggers. | Displays summary page on all detail queries (both pure Normal Game and Free Game spins), displaying total freespins count when applicable. | **Theo Ref**: Always render summary recap screen displaying total round payout and awarded freespins. |
