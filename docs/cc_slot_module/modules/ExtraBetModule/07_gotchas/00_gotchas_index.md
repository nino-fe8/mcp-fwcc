---
id: "cc_slot_module:ExtraBetModule:gotchas:index"
title: "ExtraBetModule Gotchas Index"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ ExtraBetModule Gotchas Index

<!-- convention-summary-start -->
### ExtraBetModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_stale_extra_bet_label_sync.md`, `./02_unhandled_extra_bet_min_max_lock.md`
- **Related Docs**: [`01_stale_extra_bet_label_sync`](./01_stale_extra_bet_label_sync.md), [`02_unhandled_extra_bet_min_max_lock`](./02_unhandled_extra_bet_min_max_lock.md)
<!-- convention-summary-end -->


---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_stale_extra_bet_label_sync`](./01_stale_extra_bet_label_sync.md)** | Null Reference on Unassigned `extraBetLabel` | MEDIUM | Unassigned label crashes `onUpdateTotalBet()` on state sync. |
| **[`02_unhandled_extra_bet_min_max_lock`](./02_unhandled_extra_bet_min_max_lock.md)** | Button Lockout from Missing State Reset | HIGH | Failure to clear disabled state on mode return locks player out of Ante-Bet. |
