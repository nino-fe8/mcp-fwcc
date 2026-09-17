---
id: "cc_slot_module:TrialModeManager:methods:onSkipPressed"
title: "TrialModeManager.onSkipPressed Method"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "methods", "onSkipPressed"]
---

# 📖 `TrialModeManager.onSkipPressed()`

<!-- convention-summary-start -->
### TrialModeManager.onSkipPressed Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TrialModeManager.onSkipPressed Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Emits `GameLogicUIEvents.SKIP_TRIAL_DATA` to bypass tutorial/scenario selection.

```typescript
public onSkipPressed(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onSkipPressed(): void {
    this.gameLogic.emit(GameLogicUIEvents.SKIP_TRIAL_DATA);
}
```
