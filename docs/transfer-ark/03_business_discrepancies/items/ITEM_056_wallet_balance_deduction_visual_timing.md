---
id: "transfer-ark:discrepancy:item_056_wallet_balance_deduction_visual_timing"
title: "Item #56: Wallet Balance Deduction Visual Timing"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["PlayerInfoStateManager", "WalletManager", "SlotBaseModule"]
tags: ["discrepancy_item_56", "wallet", "balance", "deduction", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #56: Wallet Balance Deduction Visual Timing

<!-- convention-summary-start -->
### Wallet Balance Deduction Visual Timing Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #56: Wallet Balance Deduction Visual Timing.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md), [`BUG_012_win_amount_not_updated_after_win_failed_session.md`](../../01_bugs_and_gotchas/BUG_012_win_amount_not_updated_after_win_failed_session.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#56` in `Compare Cocos vs Pixijs.xlsx` (Section 1: Base Game & Action Panel)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Balance Sync on Tool Updates** | External admin tool credits/debits update the UI label immediately while spin is in-flight. | Balance updates from server tools apply strictly after the current spin session ends, preventing visual jumpiness during reel cascades. | **Theo Ref**: Queue external wallet balance updates during active spins and apply them upon `SESSION_END`. |
