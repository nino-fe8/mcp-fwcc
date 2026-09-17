---
id: "cc_slot_module:DialogMessageModule:methods:showButtonOK"
title: "DialogMessageModule.showButtonOK Method"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "methods", "showButtonOK"]
---

# 📖 `DialogMessageModule.showButtonOK()`

<!-- convention-summary-start -->
### DialogMessageModule.showButtonOK Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for DialogMessageModule.showButtonOK Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public showButtonOK(active: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
showButtonOK(active: boolean): void {
	this.buttonOK.node.active = active;
}
```
