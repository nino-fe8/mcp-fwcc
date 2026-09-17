---
id: "cc_slot_module:SlotTableModule:method:onChangeState"
title: "SlotTableModule.onChangeState() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "onChangeState"]
---

# `SlotTableModule.onChangeState(state: TableSpinState): void`

<!-- convention-summary-start -->
### SlotTableModule.onChangeState() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule.onChangeState() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
protected onChangeState(state: TableSpinState): void
```

---

## 2. Detailed Algorithmic Execution Logic
Sets `this.state = state` and forwards to `this.onChangeStateExtend(state)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected onChangeState(state: TableSpinState): void {
    this.state = state;
    this.onChangeStateExtend(state);
}
```
