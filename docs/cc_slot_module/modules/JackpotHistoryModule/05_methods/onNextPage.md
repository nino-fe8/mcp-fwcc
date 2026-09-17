---
id: "cc_slot_module:JackpotHistoryModule:methods:onNextPage"
title: "JackpotHistoryModule.onNextPage Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "onNextPage"]
---

# 📖 `JackpotHistoryModule.onNextPage()`

<!-- convention-summary-start -->
### JackpotHistoryModule.onNextPage Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotHistoryModule.onNextPage Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onNextPage(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onNextPage(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.gameLogic.emit(GameLogicUIEvents.REQUEST_JACKPOT_NEXT_PAGE);
}
```
