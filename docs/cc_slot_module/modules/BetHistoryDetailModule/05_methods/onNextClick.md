---
id: "cc_slot_module:BetHistoryDetailModule:methods:onNextClick"
title: "BetHistoryDetailModule.onNextClick Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "onNextClick"]
---

# 📖 `BetHistoryDetailModule.onNextClick()`

<!-- convention-summary-start -->
### BetHistoryDetailModule.onNextClick Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule.onNextClick Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Plays click SFX and emits BET_DETAIL_NEXT_PAGE.

```typescript
public onNextClick(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: User click on btnNext.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
onNextClick(): void {
	if (this.soundPlayer) {
		this.soundPlayer.playSFXClick();
	}
	this._resetBetDetailView();
	this.gameLogic.emit(GameLogicUIEvents.BET_DETAIL_NEXT_PAGE);
}
```
