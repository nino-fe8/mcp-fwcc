---
id: "cc_slot_module:BetHistoryDetailPortrait:methods:setupObserver"
title: "BetHistoryDetailPortrait.setupObserver Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `BetHistoryDetailPortrait.setupObserver()`

<!-- convention-summary-start -->
### BetHistoryDetailPortrait.setupObserver Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailPortrait.setupObserver Method.
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
	super.setupObserver();
	if (this.hasRespin) {
		this.observer.watch(this.betHistoryDetailData, 'isEnableNextRespin', this.enableNextRespinBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
		this.observer.watch(this.betHistoryDetailData, 'isEnablePrevRespin', this.enablePreviousRespinBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
		this.observer.watch(this.betHistoryDetailData, 'isActiveNextRespin', this.activeNextRespinBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
		this.observer.watch(this.betHistoryDetailData, 'isActivePrevRespin', this.activePreviousRespinBtn.bind(this), this, { fireImmediately: true, canTriggerSameValue: true });
	}
}
```
