---
id: "cc_slot_module:JackpotWinNoticePopup:methods:hideCurrentWinner"
title: "JackpotWinNoticePopup.hideCurrentWinner Method"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "methods", "hideCurrentWinner"]
---

# 📖 `JackpotWinNoticePopup.hideCurrentWinner()`

<!-- convention-summary-start -->
### JackpotWinNoticePopup.hideCurrentWinner Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinNoticePopup.hideCurrentWinner Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public hideCurrentWinner(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hideCurrentWinner(): void {
	this._currentState = STATE.CLOSED;
	eno.fadeOut(this.node, this.fadeTime);
	this.showNextWinner();
}
```
