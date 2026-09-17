---
id: "cc_slot_module:BetHistoryDetailPortrait:methods:onPreviousRespinBtnClick"
title: "BetHistoryDetailPortrait.onPreviousRespinBtnClick Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "methods", "onPreviousRespinBtnClick"]
---

# 📖 `BetHistoryDetailPortrait.onPreviousRespinBtnClick()`

<!-- convention-summary-start -->
### BetHistoryDetailPortrait.onPreviousRespinBtnClick Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailPortrait.onPreviousRespinBtnClick Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onPreviousRespinBtnClick(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onPreviousRespinBtnClick(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this.resetGameModeRespin();
	this.gameLogic.emit(GameLogicUIEvents.BET_DETAIL_RESPIN_PREVIOUS_PAGE);
}
```
