---
id: "cc_slot_module:TrialModeManager:methods:playOption"
title: "TrialModeManager.playOption Method"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "methods", "playOption"]
---

# 📖 `TrialModeManager.playOption()`

<!-- convention-summary-start -->
### TrialModeManager.playOption Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TrialModeManager.playOption Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Dispatches `GameLogicUIEvents.PLAY_TUTORIAL_OPTION` to trigger the selected demo script.

```typescript
public playOption(_event: any, option: any): void
```

---

## 2. Complete Source Code Implementation

```typescript
playOption(_event, option): void {
    this.gameLogic.emit(GameLogicUIEvents.PLAY_TUTORIAL_OPTION, Number(option));
}
```
