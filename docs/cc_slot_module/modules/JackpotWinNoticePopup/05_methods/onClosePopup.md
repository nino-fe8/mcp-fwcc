---
id: "cc_slot_module:JackpotWinNoticePopup:methods:onClosePopup"
title: "JackpotWinNoticePopup.onClosePopup Method"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "methods", "onClosePopup"]
---

# 📖 `JackpotWinNoticePopup.onClosePopup()`

<!-- convention-summary-start -->
### JackpotWinNoticePopup.onClosePopup Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinNoticePopup.onClosePopup Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onClosePopup(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onClosePopup(): void {
	if (this._currentState === STATE.IDLE) {
		this.hideCurrentWinner();
	}
}
```
