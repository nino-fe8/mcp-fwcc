---
id: "cc_slot_module:DialogMessageModule:methods:onCancelPressed"
title: "DialogMessageModule.onCancelPressed Method"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "methods", "onCancelPressed"]
---

# 📖 `DialogMessageModule.onCancelPressed()`

<!-- convention-summary-start -->
### DialogMessageModule.onCancelPressed Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for DialogMessageModule.onCancelPressed Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onCancelPressed(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onCancelPressed(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.gameLogic.emit(GameLogicUIEvents.ON_ACTION_CANCEL);
}
```
