---
id: "cc_slot_module:SlotTableModule:method:onChangeStateExtend"
title: "SlotTableModule.onChangeStateExtend() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "onChangeStateExtend", "virtual_hook"]
---

# `SlotTableModule.onChangeStateExtend(_state: TableSpinState): void`

<!-- convention-summary-start -->
### SlotTableModule.onChangeStateExtend() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule.onChangeStateExtend() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
protected onChangeStateExtend(_state: TableSpinState): void
```

---

## 2. Detailed Algorithmic Execution Logic
Virtual hook for downstream game projects to synchronize UI buttons, Turbo HUD markers, or ambient lights when table transitions state.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected onChangeStateExtend(_state: TableSpinState): void {
    // override this method to handle table event.
}
```
