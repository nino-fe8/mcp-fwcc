---
id: "cc_slot_module:JackpotModule:gotchas:index"
title: "JackpotModule Gotchas Index"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ JackpotModule Gotchas Index

<!-- convention-summary-start -->
### JackpotModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_missing_nested_jackpot_observer_cleanup.md`, `./02_jackpot_frozen_during_active_spins.md`
- **Related Docs**: [`01_missing_nested_jackpot_observer_cleanup`](./01_missing_nested_jackpot_observer_cleanup.md), [`02_jackpot_frozen_during_active_spins`](./02_jackpot_frozen_during_active_spins.md)
<!-- convention-summary-end -->


---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_missing_nested_jackpot_observer_cleanup`](./01_missing_nested_jackpot_observer_cleanup.md)** | Memory Leak from Nested Index Observers | HIGH | Failing to cancel `this.observerJPIndex()` before creating a new watch on `jackpots.${index}` leads to duplicate ticker animations. |
| **[`02_jackpot_frozen_during_active_spins`](./02_jackpot_frozen_during_active_spins.md)** | Accidental Jackpot Freeze State | HIGH | If `pauseUpdateJackpot` is set to true and not cleared via `resumeJackpot()`, progressive pools freeze permanently. |
