---
id: "cc_slot_module:BetHistoryModule:methods:showContent"
title: "BetHistoryModule.showContent Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "showContent"]
---

# 📖 `BetHistoryModule.showContent()`

<!-- convention-summary-start -->
### BetHistoryModule.showContent Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryModule.showContent Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Handles modal opening depending on whether the module is embedded in history scene or in-game.

```typescript
public showContent(isActive: boolean): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered when modelData.isShowing mutates.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
showContent(isActive: boolean): void {
	if (this.modelData.isFromHistoryScene) {
		this.activePopup(true);
		this.showRecordView(true);
	} else {
		this.showBetHistory(isActive);
	}
}
```
