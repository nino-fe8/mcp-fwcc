---
id: "cc_slot_module:SpinTimesModule:methods:setupObserver"
title: "SpinTimesModule.setupObserver Method"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `SpinTimesModule.setupObserver()`

<!-- convention-summary-start -->
### SpinTimesModule.setupObserver Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SpinTimesModule.setupObserver Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Subscribes to `autoSpinCount` and `state` on `SpinButtonNormal`.

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
    this.buttonNormalData = this.gameLogic.getDataModel().SpinButtonNormal;
    this.observer.watch(this.buttonNormalData, "autoSpinCount", this.updateSpinTimes.bind(this), this, { fireImmediately: true });
    this.observer.watch(this.buttonNormalData, "state", this.updateState.bind(this), this, { fireImmediately: true });
}
```
