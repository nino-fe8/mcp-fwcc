---
id: "cc_slot_module:GameDirector:gotcha:mode_stack_underflow_crash"
title: "Gotcha: Mode Stack Underflow Crash on EXIT_GAME_MODE"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "gotchas", "mode_stack", "stack_underflow"]
---

# ⚠️ Gotcha: Mode Stack Underflow Crash on EXIT_GAME_MODE

<!-- convention-summary-start -->
### Gotcha: Mode Stack Underflow Crash on EXIT_GAME_MODE Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Mode Stack Underflow Crash on EXIT_GAME_MODE.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Defect Symptom
When a Free Game or Bonus Game completes and emits `EXIT_GAME_MODE`, the game freezes on a black or blank screen with the warning `[GameView] [Director] Do not have last game mode to resume`.

---

## 2. Root Cause Analysis
If `NORMAL_GAME` was never pushed onto `currentModes` during boot (or if `currentModes` was cleared unexpectedly), `this.currentModes.length - 2` evaluates to negative index `-1`, yielding `undefined`.

---

## 3. Recommended Resolution
Always ensure `start()` or `setUpGameMode()` calls `this.onSwitchGameMode(GAME_MODE_ENUM.NORMAL_GAME)` to guarantee `NORMAL_GAME` resides at base index `0` of the stack.
