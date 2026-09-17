---
id: "cc_slot_module:SlotSymbolResourceManager:method:onLoad"
title: "SlotSymbolResourceManager.onLoad() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "method", "onLoad"]
---

# `SlotSymbolResourceManager.onLoad(): void`

<!-- convention-summary-start -->
### SlotSymbolResourceManager.onLoad() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolResourceManager.onLoad() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public onLoad(): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Cocos Creator lifecycle hook when `SymbolPrefab` is loaded.

---

## 3. Detailed Algorithmic Execution Logic
1. Invokes `this.initAssets()` to populate internal fast lookup dictionaries.

---

## 4. Un-truncated Source Code Implementation
```typescript
onLoad(): void {
	this.initAssets();
}
```
