---
id: "cc_slot_module:JackpotWinNoticePopup:methods:showWinNotice"
title: "JackpotWinNoticePopup.showWinNotice Method"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "methods", "showWinNotice"]
---

# 📖 `JackpotWinNoticePopup.showWinNotice()`

<!-- convention-summary-start -->
### JackpotWinNoticePopup.showWinNotice Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinNoticePopup.showWinNotice Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public showWinNotice({ jpInfo, isMe }: { jpInfo: NotifyJackpotWinInfo[], isMe: boolean }): void
```

---

## 2. Complete Source Code Implementation

```typescript
showWinNotice({ jpInfo, isMe }: { jpInfo: NotifyJackpotWinInfo[], isMe: boolean }): void {
	if (!jpInfo || !jpInfo.length) {
		return;
	}
	this._listWinJP = jpInfo.filter((user) => user.dn !== this.gameLogic.getUserDisplayName());
	if (this._currentState === STATE.CLOSED && this._listWinJP.length > 0) {
		this.showCurrentWinner();
	}
}
```
