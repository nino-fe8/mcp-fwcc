---
id: "cc_slot_module:SlotSymbolResourceManager:method:getColorDim"
title: "SlotSymbolResourceManager.getColorDim() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "method", "getColorDim"]
---

# `SlotSymbolResourceManager.getColorDim(): cc.Color`

<!-- convention-summary-start -->
### SlotSymbolResourceManager.getColorDim() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolResourceManager.getColorDim() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public getColorDim(): cc.Color
```

---

## 2. Detailed Algorithmic Execution Logic
1. Returns `this.colorDim` (default `(100, 100, 100, 255)`).

---

## 3. Un-truncated Source Code Implementation
```typescript
getColorDim(): cc.Color {
	return this.colorDim;
}
```
