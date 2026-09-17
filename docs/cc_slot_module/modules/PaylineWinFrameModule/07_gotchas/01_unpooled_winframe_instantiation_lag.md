---
id: "cc_slot_module:PaylineWinFrameModule:gotchas:unpooled_winframe_instantiation_lag"
title: "Gotcha: Repeated Instantiation on Fast Spins"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "gotchas", "node_pool", "lag"]
---

# 🛑 Gotcha: Repeated Instantiation on Fast Spins

<!-- convention-summary-start -->
### Gotcha: Repeated Instantiation on Fast Spins Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Repeated Instantiation on Fast Spins.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Symptom & Performance Defect

Hiccups and frame-rate drops occur on mobile devices during consecutive rapid wins.

---

## 2. Root Cause

If `clearAll()` is not called upon fast-stopping or resetting the table, frames are not placed back into `winFramePool`, forcing subsequent spins to re-instantiate new prefabs via `cc.instantiate(this.template)`.

---

## 3. Standard Code Fix

Ensure `clearAll()` runs upon `PAYLINE_CLEAR` so `this.winFramePool.put(frame)` warms up the pool for subsequent spins.
