---
id: "cc_slot_module:CascadeModuleData:methods:onloadExtend"
title: "CascadeModuleData.onloadExtend Method"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "methods", "onloadExtend"]
---

# 📖 `CascadeModuleData.onloadExtend()`

<!-- convention-summary-start -->
### CascadeModuleData.onloadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CascadeModuleData.onloadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Initializes `this.config` by fetching `CascadeModuleConfig` from the current node.

```typescript
public onloadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onloadExtend(): void {
    this.config = this.getComponent(CascadeModuleConfig);
}
```
