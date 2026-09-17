---
id: "cc_slot_module:BetModule:gotchas:index"
title: "BetModule Gotchas Index"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ BetModule Gotchas Index

<!-- convention-summary-start -->
### BetModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_stale_bet_label_null_leak.md`, `./02_unhandled_min_max_interactable_lock.md`
- **Related Docs**: [`01_stale_bet_label_null_leak`](./01_stale_bet_label_null_leak.md), [`02_unhandled_min_max_interactable_lock`](./02_unhandled_min_max_interactable_lock.md)
<!-- convention-summary-end -->


---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_stale_bet_label_null_leak`](./01_stale_bet_label_null_leak.md)** | Null Pointer Crash on Unassigned Labels | MEDIUM | If `betDenomLabel` or `totalBetLabel` is unassigned in Inspector, `node.emit` crashes during startup. |
| **[`02_unhandled_min_max_interactable_lock`](./02_unhandled_min_max_interactable_lock.md)** | Button Lockout Without `canTriggerSameValue` | HIGH | Omitting `{ canTriggerSameValue: true }` in observer setup prevents button re-enabling after balance refills. |
