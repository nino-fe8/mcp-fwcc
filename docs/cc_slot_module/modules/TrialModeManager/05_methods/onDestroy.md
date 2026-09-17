---
id: "cc_slot_module:TrialModeManager:methods:onDestroy"
title: "TrialModeManager.onDestroy Method"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `TrialModeManager.onDestroy()`

<!-- convention-summary-start -->
### TrialModeManager.onDestroy Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TrialModeManager.onDestroy Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Releases reactive observers registered on `trialModel` and `uiManagerData`.

```typescript
protected onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected onDestroy(): void {
    this.observer.releaseAll(this.trialModel, this);
    this.observer.releaseAll(this.uiManagerData, this);
}
```
