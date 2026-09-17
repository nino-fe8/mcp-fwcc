---
id: "cc_slot_module:UIManagerModule:methods:setupObserver"
title: "UIManagerModule.setupObserver Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `UIManagerModule.setupObserver()`

<!-- convention-summary-start -->
### UIManagerModule.setupObserver Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule.setupObserver Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Subscribes to `isTrialModeActive` property changes on `UIManagerData` with `fireImmediately: true`.

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
    this.observer.watch(this.uiManagerData, "isTrialModeActive", (isTrialModeActive) => {
        this.onSwitchMode(isTrialModeActive);
    }, this, { fireImmediately: true });
}
```
