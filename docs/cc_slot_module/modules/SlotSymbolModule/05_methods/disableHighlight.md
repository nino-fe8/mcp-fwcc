---
id: "cc_slot_module:SlotSymbolModule:method:disableHighlight"
title: "SlotSymbolModule.disableHighlight() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "disableHighlight", "dimming"]
---

# `SlotSymbolModule.disableHighlight(): void`

<!-- convention-summary-start -->
### SlotSymbolModule.disableHighlight() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule.disableHighlight() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public disableHighlight(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Obtains dimmed vertex color from `this.resourceManager.getColorDim()` (`#7F7F7F`).
2. Applies color to all child renderer nodes via `this.changeColor(colorDim)`.
3. Annotates node: `node["isHighlight"] = false`.

---

## 3. Un-truncated Source Code Implementation
```typescript
disableHighlight(): void {
	const colorDim = this.resourceManager.getColorDim();
	this.changeColor(colorDim);
	this.node["isHighlight"] = false;
}
```
