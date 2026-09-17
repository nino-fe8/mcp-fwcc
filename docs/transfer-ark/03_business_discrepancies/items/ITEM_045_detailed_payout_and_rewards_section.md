---
id: "transfer-ark:discrepancy:item_045_detailed_payout_and_rewards_section"
title: "Item #45 & #46: Detailed Payout and Rewards Section In History Detail"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["BetHistoryDetailManagerBase"]
tags: ["discrepancy_item_45", "discrepancy_item_46", "payout", "rewards_section", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #45 & #46: Detailed Payout and Rewards Section In History Detail

<!-- convention-summary-start -->
### Item #45 & #46: Detailed Payout and Rewards Section In History Detail Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #45 & #46: Detailed Payout and Rewards Section In History Detail.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Rows**: `#45`, `#46` in `Compare Cocos vs Pixijs.xlsx` (Section 3: LSC & LSH)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Payout Breakdown vs Rewards** | Section titled "Payout", displaying individual symbol combine counts or text "There is no winning combination". | Section titled "Rewards" recording round rewards formatted as `Normal : $XX.XX` or `Respin Z : $XX.XX`. | **Theo Ref**: Standardize detail panel section header to "Rewards". |
