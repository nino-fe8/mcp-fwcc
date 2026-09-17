---
id: "cc_slot_module:JackpotWinModule:gotchas:index"
title: "JackpotWinModule Gotchas Index"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ JackpotWinModule Gotchas Index

<!-- convention-summary-start -->
### JackpotWinModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_missing_fast_skip_tween_cleanup.md`
- **Related Docs**: [`01_missing_fast_skip_tween_cleanup`](./01_missing_fast_skip_tween_cleanup.md)
<!-- convention-summary-end -->


---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_missing_fast_skip_tween_cleanup`](./01_missing_fast_skip_tween_cleanup.md)** | Stale Tween Override on Accelerated Skip | MEDIUM | Failing to stop the initial 10s `_tweenMoney` before creating the 1s skip tween creates overlapping number increments. |
