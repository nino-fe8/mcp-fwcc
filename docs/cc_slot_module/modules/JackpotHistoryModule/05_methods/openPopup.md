---
id: "cc_slot_module:JackpotHistoryModule:methods:openPopup"
title: "JackpotHistoryModule.openPopup Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "openPopup"]
---

# 📖 `JackpotHistoryModule.openPopup()`

<!-- convention-summary-start -->
### JackpotHistoryModule.openPopup Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotHistoryModule.openPopup Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public openPopup(): void
```

---

## 2. Complete Source Code Implementation

```typescript
openPopup(): void {
	const data = { itemPerPage: this.itemPerPage, jpList: this.jpList };
	this.gameLogic.emit(GameLogicUIEvents.INIT_JACKPOT_HISTORY, data);
}
```
