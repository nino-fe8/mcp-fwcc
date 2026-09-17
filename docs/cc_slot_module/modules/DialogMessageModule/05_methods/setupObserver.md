---
id: "cc_slot_module:DialogMessageModule:methods:setupObserver"
title: "DialogMessageModule.setupObserver Method"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `DialogMessageModule.setupObserver()`

<!-- convention-summary-start -->
### DialogMessageModule.setupObserver Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for DialogMessageModule.setupObserver Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
	this.observer.watch(this.dialogData, "active", this.showDialog.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
	this.observer.watch(this.dialogData, "message", this.updateMessage.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
	this.observer.watch(this.dialogData, "isOkBtnActive", this.showButtonOK.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
	this.observer.watch(this.dialogData, "isCancelBtnActive", this.showButtonCancel.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
}
```
