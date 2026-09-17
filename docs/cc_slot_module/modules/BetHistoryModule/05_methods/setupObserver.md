---
id: "cc_slot_module:BetHistoryModule:methods:setupObserver"
title: "BetHistoryModule.setupObserver Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `BetHistoryModule.setupObserver()`

<!-- convention-summary-start -->
### BetHistoryModule.setupObserver Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryModule.setupObserver Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Binds observers to all reactive fields of BetHistoryData.

```typescript
public setupObserver(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Called in onLoadExtend during initialization.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
setupObserver(): void {
	this.modelData = this.gameLogic.getDataModel().BetHistoryData;
	this.observer.watch(this.modelData,"isShowing", this.showContent.bind(this), this);
	this.observer.watch(this.modelData,"isShowingRecord", this.showRecordView.bind(this), this);
	this.observer.watch(this.modelData,"isEnableNext", this.enableNextBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
	this.observer.watch(this.modelData,"isEnablePrev", this.enablePreviousBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });

	this.observer.watch(this.modelData,"isEnableLoading", this.onEnableLoading.bind(this), this);
	this.observer.watch(this.modelData,"messageText", this.onUpdateMessage.bind(this), this);
	this.observer.watch(this.modelData,"recordData", this.onRecordDataChange.bind(this), this);
	this.observer.watch(this.modelData,"isShowingDetail", this.onShowingDetail.bind(this), this, { fireImmediately: true });
	this.observer.watch(this.modelData,"isEnableMessage", this.onShowMessage.bind(this), this);
	this.observer.watch(this.modelData,"pageIndex", this.onPageIndexChange.bind(this), this);
	this.observer.watch(this.modelData, "isFromHistoryScene", this.hideCloseButton.bind(this), this, { fireImmediately: true });
}
```
