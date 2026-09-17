---
id: "cc_slot_module:BaseDataModule:method:getData"
title: "BaseDataModule.getData() Method Specification"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "method", "getData"]
---

# `BaseDataModule.getData(key: string): any`

<!-- convention-summary-start -->
### BaseDataModule.getData() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseDataModule.getData() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
getData(key: string): any
```

---

## 2. Detailed Algorithmic Execution Logic
Returns stored property `this[key]`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getData(key: string): any {
    return this[key];
}
```
