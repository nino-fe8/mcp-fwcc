---
id: "cc_slot_module:ToastInfoModule:methods:hideMessage"
title: "ToastInfoModule.hideMessage Method"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "methods", "hideMessage"]
---

# 📖 `ToastInfoModule.hideMessage()`

<!-- convention-summary-start -->
### ToastInfoModule.hideMessage Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ToastInfoModule.hideMessage Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Instantly deactivates the toast notification node.

```typescript
public hideMessage(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hideMessage(): void {
    this.node.active = false;
}
```
