---
id: "cc_slot_module:JackpotModule:gotchas:jackpot_frozen_during_active_spins"
title: "Gotcha: Accidental Jackpot Freeze State"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "gotchas", "pause_state"]
---

# ⚠️ Gotcha: Accidental Jackpot Freeze State

<!-- convention-summary-start -->
### Gotcha: Accidental Jackpot Freeze State Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Accidental Jackpot Freeze State.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

If a Jackpot Win celebration throws an unhandled exception before reaching `resumeJackpot()`, `pauseUpdateJackpot` remains true in `JackpotData`, causing all future websocket pool ticks to be ignored in `renderAllJackpot()`.

---

## 2. Prevention

Always wrap jackpot celebrations in `try / finally` blocks that guarantee `resumeJackpot()` or `setPauseJackpot(false)` execution.
