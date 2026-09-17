---
id: "cc_slot_module:SlotSymbolModule:method:getModuleComponent"
title: "SlotSymbolModule.getModuleComponent() Static Helper Method"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "method", "getModuleComponent", "static_cache"]
---

# `SlotSymbolModule.getModuleComponent(node: cc.Node): SlotSymbolModule`

<!-- convention-summary-start -->
### SlotSymbolModule.getModuleComponent() Static Helper Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule.getModuleComponent() Static Helper Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public static getModuleComponent(node: cc.Node): SlotSymbolModule
```

---

## 2. Performance Architecture
* Instead of incurring expensive engine component searches via `node.getComponent(SlotSymbolModule)`, this static method first checks the cached property:
  `node['__SymbolModule__']`
* Falls back to `node.getComponent()` only if the direct memory pointer is absent.

---

## 3. Un-truncated Source Code Implementation
```typescript
static getModuleComponent(node: cc.Node): SlotSymbolModule {
	return node['__SymbolModule__'] || node.getComponent(SlotSymbolModule);
}
```
