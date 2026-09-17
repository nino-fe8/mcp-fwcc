---
id: "cc_slot_module:SlotSymbolModule:method:enableHighlight"
title: "SlotSymbolModule.enableHighlight() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "enableHighlight", "vertex_color"]
---

# `SlotSymbolModule.enableHighlight(): void`

<!-- convention-summary-start -->
### SlotSymbolModule.enableHighlight() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule.enableHighlight() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public enableHighlight(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Obtains normal bright vertex color from `this.resourceManager.getColorNormal()` (`#FFFFFF`).
2. Applies color to all child renderer nodes via `this.changeColor(colorNormal)`.
3. Annotates node: `node["isHighlight"] = true`.

---

## 3. Un-truncated Source Code Implementation
```typescript
enableHighlight(): void {
	const colorNormal = this.resourceManager.getColorNormal();
	this.changeColor(colorNormal);
	this.node["isHighlight"] = true;
}
```
