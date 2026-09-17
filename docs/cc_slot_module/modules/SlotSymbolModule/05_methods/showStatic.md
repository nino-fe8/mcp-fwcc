---
id: "cc_slot_module:SlotSymbolModule:method:showStatic"
title: "SlotSymbolModule.showStatic() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "showStatic"]
---

# `SlotSymbolModule.showStatic(): void`

<!-- convention-summary-start -->
### SlotSymbolModule.showStatic() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule.showStatic() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public showStatic(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Flags `this.isPlaying = false`.
2. Invokes `this.switchToStatic(true)`, setting `sprite.node.active = true` and `spine.node.active = false`.

---

## 3. Un-truncated Source Code Implementation
```typescript
showStatic(): void {
	this.isPlaying = false;
	this.switchToStatic(true);
}
```
