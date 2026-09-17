---
id: "cc_slot_module:NormalGameDirectorModule:gotchas:index"
title: "NormalGameDirectorModule Gotchas Index"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ NormalGameDirectorModule Gotchas Index

<!-- convention-summary-start -->
### NormalGameDirectorModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameDirectorModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_missing_join_game_success_locks_spin_button.md`
- **Related Docs**: [`01_missing_join_game_success_locks_spin_button`](./01_missing_join_game_success_locks_spin_button.md)
<!-- convention-summary-end -->


## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_missing_join_game_success_locks_spin_button`](./01_missing_join_game_success_locks_spin_button.md)** | Spin button remains disabled / unclickable after game loads. | `NormalGameDirectorModule` failed to receive or broadcast `JOIN_GAME_SUCCESS`. | 🔴 Critical (Game Blocked) |
