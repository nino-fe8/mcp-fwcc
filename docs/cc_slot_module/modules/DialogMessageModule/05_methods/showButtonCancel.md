---
id: "cc_slot_module:DialogMessageModule:methods:showButtonCancel"
title: "DialogMessageModule.showButtonCancel Method"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "methods", "showButtonCancel"]
---

# 📖 `DialogMessageModule.showButtonCancel()`

<!-- convention-summary-start -->
### DialogMessageModule.showButtonCancel Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for DialogMessageModule.showButtonCancel Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public showButtonCancel(active: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
showButtonCancel(active: boolean): void {
	this.buttonCancel.node.active = active;
}
```
