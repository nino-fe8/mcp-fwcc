---
id: "cc_slot_module:SlotTableModule:method:resetAllEffectAndTasks"
title: "SlotTableModule.resetAllEffectAndTasks() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "resetAllEffectAndTasks"]
---

# `SlotTableModule.resetAllEffectAndTasks(): void`

<!-- convention-summary-start -->
### SlotTableModule.resetAllEffectAndTasks() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule.resetAllEffectAndTasks() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
protected resetAllEffectAndTasks(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Delegates directly to `this.stopSpinWithRandomMatrix()` to abort active spins upon game mode changes.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected resetAllEffectAndTasks(): void {
    this.stopSpinWithRandomMatrix();
}
```
