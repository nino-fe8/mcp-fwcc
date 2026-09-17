---
id: "cc_slot_module:BetHistoryDetailModule:methods:onScrollClick"
title: "BetHistoryDetailModule.onScrollClick Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "onScrollClick"]
---

# 📖 `BetHistoryDetailModule.onScrollClick()`

<!-- convention-summary-start -->
### BetHistoryDetailModule.onScrollClick Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule.onScrollClick Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Emits REQUEST_BET_DETAIL_DATA_PAGE for selected tab index.

```typescript
public onScrollClick(index: number): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered by ON_SCROLL_CLICK event from tab item.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
onScrollClick(index: number): void {
	if (index === this.betHistoryDetailData.currentIndex) {
		return;
	}
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this._resetBetDetailView();
	this.gameLogic.emit(GameLogicUIEvents.REQUEST_BET_DETAIL_DATA_PAGE, index);
}
```
