---
id: "cc_slot_module:SlotTableModule:method:removeAllSymbols"
title: "SlotTableModule.removeAllSymbols() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "removeAllSymbols", "node_pool"]
---

# `SlotTableModule.removeAllSymbols(): void`

<!-- convention-summary-start -->
### SlotTableModule.removeAllSymbols() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule.removeAllSymbols() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public removeAllSymbols(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Invokes `this.symbolManager.removeAllSymbols()`, reclaiming active symbol nodes and resetting Spine skeleton visual tracks.

---

## 3. Un-truncated Source Code Implementation
```typescript
removeAllSymbols(): void {
    this.symbolManager.removeAllSymbols();
}
```
