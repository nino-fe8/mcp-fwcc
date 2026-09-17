---
id: "cc_slot_module:BaseDataModule:method:clearData"
title: "BaseDataModule.clearData() Method Specification"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "method", "clearData"]
---

# `BaseDataModule.clearData(): void`

<!-- convention-summary-start -->
### BaseDataModule.clearData() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseDataModule.clearData() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
clearData(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Iterates through all keys in `this.registeredKeys` and sets `this[key] = null`.

---

## 3. Un-truncated Source Code Implementation
```typescript
clearData(): void {
    this.registeredKeys.forEach(key => {
        this[key] = null;
    });
}
```
