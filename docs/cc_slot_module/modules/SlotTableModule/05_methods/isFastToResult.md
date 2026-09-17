---
id: "cc_slot_module:SlotTableModule:method:isFastToResult"
title: "SlotTableModule.isFastToResult() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "isFastToResult"]
---

# `SlotTableModule.isFastToResult(): boolean`

<!-- convention-summary-start -->
### SlotTableModule.isFastToResult() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule.isFastToResult() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
isFastToResult(): boolean
```

---

## 2. Detailed Algorithmic Execution Logic
Returns `true` if `this.state === TableSpinState.STOPPING_IMMEDIATELY`.

---

## 3. Un-truncated Source Code Implementation
```typescript
isFastToResult(): boolean {
    return this.state === TableSpinState.STOPPING_IMMEDIATELY;
}
```
