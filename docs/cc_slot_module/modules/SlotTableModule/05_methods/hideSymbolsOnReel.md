---
id: "cc_slot_module:SlotTableModule:method:hideSymbolsOnReel"
title: "SlotTableModule.hideSymbolsOnReel() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "method", "hideSymbolsOnReel"]
---

# `SlotTableModule.hideSymbolsOnReel(col: number): void`

<!-- convention-summary-start -->
### SlotTableModule.hideSymbolsOnReel() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule.hideSymbolsOnReel() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
hideSymbolsOnReel(col: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
Sets `this.reels[col].node.active = false` to hide specific columns during special overlay animations or expanding reel transitions.

---

## 3. Un-truncated Source Code Implementation
```typescript
hideSymbolsOnReel(col: number): void {
    this.reels[col].node.active = false;
}
```
