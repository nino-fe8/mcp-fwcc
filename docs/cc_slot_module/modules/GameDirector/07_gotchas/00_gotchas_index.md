---
id: "cc_slot_module:GameDirector:gotchas:index"
title: "GameDirector Gotchas Index"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ GameDirector Gotchas Index

<!-- convention-summary-start -->
### GameDirector Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDirector Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_mode_stack_underflow_crash.md`
- **Related Docs**: [`01_mode_stack_underflow_crash`](./01_mode_stack_underflow_crash.md)
<!-- convention-summary-end -->


## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_mode_stack_underflow_crash`](./01_mode_stack_underflow_crash.md)** | `EXIT_GAME_MODE` throws null exception when exiting feature mode. | `currentModes` stack was empty or missing the prior base game mode. | 🔴 Critical (Game Mode Hang) |
