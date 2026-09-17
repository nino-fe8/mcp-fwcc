---
id: "cc_slot_module:JackpotHistoryModule:methods:setupObserver"
title: "JackpotHistoryModule.setupObserver Method"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `JackpotHistoryModule.setupObserver()`

<!-- convention-summary-start -->
### JackpotHistoryModule.setupObserver Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotHistoryModule.setupObserver Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
	this.observer.watch(this.jackpotHistoryData, 'isShowing', this.onShowJackpotHistory.bind(this), this);
	this.observer.watch(this.jackpotHistoryData, 'recordData', this.onShowRecordView.bind(this), this);
	if (this.loading) {
		this.observer.watch(this.jackpotHistoryData, 'isEnableLoading', this.onShowLoading.bind(this), this);
	}
	if (this.messageNode && this.messageLabel) {
		this.observer.watch(this.jackpotHistoryData, 'isEnableMessage', this.onShowMessage.bind(this), this);
	}
	if (this.pageIndexNode && this.pageIndexLabel) {
		this.observer.watch(this.jackpotHistoryData, 'pageIndex', this.onUpdatePageIndex.bind(this), this);
	}
	this.observer.watch(this.jackpotHistoryData, 'isEnableNext', this.enableNextBtn.bind(this), this, { canTriggerSameValue: true });
	this.observer.watch(this.jackpotHistoryData, 'isEnablePrev', this.enablePreviousBtn.bind(this), this, { canTriggerSameValue: true });
}
```
