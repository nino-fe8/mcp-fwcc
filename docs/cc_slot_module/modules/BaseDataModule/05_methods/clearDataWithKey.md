---
id: "cc_slot_module:BaseDataModule:method:clearDataWithKey"
title: "BaseDataModule.clearDataWithKey() Method Specification"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "method", "clearDataWithKey"]
---

# `BaseDataModule.clearDataWithKey(key: string): void`

<!-- convention-summary-start -->
### BaseDataModule.clearDataWithKey() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseDataModule.clearDataWithKey() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
clearDataWithKey(key: string): void
```

---

## 2. Detailed Algorithmic Execution Logic
Sets `this[key] = null`.

---

## 3. Un-truncated Source Code Implementation
```typescript
clearDataWithKey(key: string): void {
    this[key] = null;
}
```
