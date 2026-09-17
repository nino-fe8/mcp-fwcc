---
id: "cc_slot_module:TrialModeManager:methods:updateOptions"
title: "TrialModeManager.updateOptions Method"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "methods", "updateOptions"]
---

# 📖 `TrialModeManager.updateOptions()`

<!-- convention-summary-start -->
### TrialModeManager.updateOptions Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TrialModeManager.updateOptions Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Emits `SET_INTERACTABLE` to child option buttons based on active/inactive scenario list.

```typescript
public updateOptions(options: number[]): void
```

---

## 2. Complete Source Code Implementation

```typescript
updateOptions(options): void {
    if (!this.optionHolder || !this.optionHolder.children) {
        return;
    }
    this.optionHolder.children.forEach((option, index) => {
        let interactable = !options.includes(index);
        option.emit("SET_INTERACTABLE", interactable);
    });
}
```
