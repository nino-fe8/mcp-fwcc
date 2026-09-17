---
id: "cc_slot_module:DialogMessageModule:methods:onConfirmPressed"
title: "DialogMessageModule.onConfirmPressed Method"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "methods", "onConfirmPressed"]
---

# 📖 `DialogMessageModule.onConfirmPressed()`

<!-- convention-summary-start -->
### DialogMessageModule.onConfirmPressed Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for DialogMessageModule.onConfirmPressed Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onConfirmPressed(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onConfirmPressed(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.gameLogic.emit(GameLogicUIEvents.ON_ACTION_OK);
}
```
