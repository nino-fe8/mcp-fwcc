---
id: "cc_slot_module:DialogMessageModule:methods:showDialog"
title: "DialogMessageModule.showDialog Method"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "methods", "showDialog"]
---

# 📖 `DialogMessageModule.showDialog()`

<!-- convention-summary-start -->
### DialogMessageModule.showDialog Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for DialogMessageModule.showDialog Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public showDialog(active: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
showDialog(active: boolean): void {
	this.node.active = active;
	eno.setOpacity(this.node, active ? 255 : 0);
	if (this.buttonHolder) {
		const isActive = active && (this.dialogData.isOkBtnActive || this.dialogData.isCancelBtnActive);
		this.buttonHolder.active = isActive;
	}
}
```
