---
id: "cc_slot_module:JackpotWinNoticePopup:methods:showNextWinner"
title: "JackpotWinNoticePopup.showNextWinner Method"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "methods", "showNextWinner"]
---

# 📖 `JackpotWinNoticePopup.showNextWinner()`

<!-- convention-summary-start -->
### JackpotWinNoticePopup.showNextWinner Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinNoticePopup.showNextWinner Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public showNextWinner(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showNextWinner(): void {
	this.scheduleOnce(this.showCurrentWinner, this.delayNextWinner);
}
```
