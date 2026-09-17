---
id: "cc_slot_module:JackpotHistoryModule:methods:onClose"
title: "JackpotHistoryModule.onClose Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "onClose"]
---

# 📖 `JackpotHistoryModule.onClose()`

<!-- convention-summary-start -->
### JackpotHistoryModule.onClose Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotHistoryModule.onClose Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onClose(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onClose(): void {
	if (this.popupBehavior && this.popupBehavior.isPlaying()) {
		return;
	}
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.gameLogic.emit(GameLogicUIEvents.CLOSE_JACKPOT_HISTORY_PANEL);
}
```
