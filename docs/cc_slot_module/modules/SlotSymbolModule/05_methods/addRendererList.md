---
id: "cc_slot_module:SlotSymbolModule:method:addRendererList"
title: "SlotSymbolModule.addRendererList() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "addRendererList", "renderer_cache"]
---

# `SlotSymbolModule.addRendererList(): void`

<!-- convention-summary-start -->
### SlotSymbolModule.addRendererList() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule.addRendererList() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public addRendererList(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Caches all immediate children of `this.node` into array `this._rendererList` during `onLoad()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
addRendererList(): void {
	if (this.node.children.length > 0) {
		this._rendererList = [...this.node.children];
	}
}
```
