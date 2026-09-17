---
id: "cc_slot_module:BetHistoryDetailModule:methods:setupObserver"
title: "BetHistoryDetailModule.setupObserver Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `BetHistoryDetailModule.setupObserver()`

<!-- convention-summary-start -->
### BetHistoryDetailModule.setupObserver Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule.setupObserver Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Watches BetHistoryDetailData and BetHistoryData fields.

```typescript
public setupObserver(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Called by start().
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
setupObserver(): void {
	this.betHistoryDetailData = this.gameLogic.getDataModel().BetHistoryDetailData;
	this.betHistoryData = this.gameLogic.getDataModel().BetHistoryData;
	this.observer.watch(this.betHistoryDetailData, 'gameModeData', this.initScrollItem.bind(this), this);
	this.observer.watch(this.betHistoryDetailData, 'currentData', this.onRenderDataView.bind(this), this, { fireImmediately: true });
	this.observer.watch(this.betHistoryDetailData, 'isEnableNext', this.enableNextBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
	this.observer.watch(this.betHistoryDetailData, 'isEnablePrev', this.enablePreviousBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
	this.observer.watch(this.betHistoryDetailData, 'currentIndex', this.enableTabHighlight.bind(this), this, { fireImmediately: true });
	this.observer.watch(this.betHistoryData, "isFromHistoryScene", this.hideCloseButton.bind(this), this, { fireImmediately: true });
}
```
