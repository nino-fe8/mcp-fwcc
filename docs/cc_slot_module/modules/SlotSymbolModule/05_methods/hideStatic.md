---
id: "cc_slot_module:SlotSymbolModule:method:hideStatic"
title: "SlotSymbolModule.hideStatic() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "hideStatic"]
---

# `SlotSymbolModule.hideStatic(): void`

<!-- convention-summary-start -->
### SlotSymbolModule.hideStatic() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule.hideStatic() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public hideStatic(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Invokes `this.switchToStatic(false)`, setting `sprite.node.active = false` and `spine.node.active = true`.

---

## 3. Un-truncated Source Code Implementation
```typescript
hideStatic(): void {
	this.switchToStatic(false);
}
```
