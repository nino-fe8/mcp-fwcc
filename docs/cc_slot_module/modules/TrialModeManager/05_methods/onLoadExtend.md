---
id: "cc_slot_module:TrialModeManager:methods:onLoadExtend"
title: "TrialModeManager.onLoadExtend Method"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `TrialModeManager.onLoadExtend()`

<!-- convention-summary-start -->
### TrialModeManager.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TrialModeManager.onLoadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Initializes trial mode settings, emits `INIT_TRIAL_MODE`, and configures observers.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.hideTrialModePanel();
    this.gameLogic.emit(GameLogicUIEvents.INIT_TRIAL_MODE, this.trialModeData);
    this.setupObserver();
}
```
