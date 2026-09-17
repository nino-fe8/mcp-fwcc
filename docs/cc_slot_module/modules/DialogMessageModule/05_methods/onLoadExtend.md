---
id: "cc_slot_module:DialogMessageModule:methods:onLoadExtend"
title: "DialogMessageModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `DialogMessageModule.onLoadExtend()`

<!-- convention-summary-start -->
### DialogMessageModule.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for DialogMessageModule.onLoadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
	this.dialogData = this.gameLogic.getDataModel().DialogData;
	this.setupObserver();
}
```
