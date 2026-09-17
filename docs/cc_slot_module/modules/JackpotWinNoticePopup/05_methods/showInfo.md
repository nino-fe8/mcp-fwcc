---
id: "cc_slot_module:JackpotWinNoticePopup:methods:showInfo"
title: "JackpotWinNoticePopup.showInfo Method"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "methods", "showInfo"]
---

# 📖 `JackpotWinNoticePopup.showInfo()`

<!-- convention-summary-start -->
### JackpotWinNoticePopup.showInfo Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinNoticePopup.showInfo Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public showInfo(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showInfo(): void {
	this.displayNameLb.string = this._currentAward.dn;
	this.textWin.string = this.gameLogic.getGameText("NOTIFY_JP_WON");
	this.winAmountLb.string = this.moneyFormatter.formatMoney(this._currentAward.amt);
}
```
