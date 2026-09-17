---
id: "cc_slot_module:BetHistoryModule:methods:onRecordDataChange"
title: "BetHistoryModule.onRecordDataChange Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "onRecordDataChange"]
---

# 📖 `BetHistoryModule.onRecordDataChange()`

<!-- convention-summary-start -->
### BetHistoryModule.onRecordDataChange Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryModule.onRecordDataChange Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Broadcasts UPDATE_DATA or CLEAR_DATA to recordView child node.

```typescript
public onRecordDataChange(value: any): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered when modelData.recordData is updated.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
onRecordDataChange(value: any): void {
	if (!this.modelData || !value) {
		this.recordView.emit("CLEAR_DATA");
		return;
	}
	if (!this.modelData.isShowingRecord) {
		return;
	}
	this.recordView.active = true;
	this.recordView.emit("UPDATE_DATA", value, this.itemPerPage);
}
```
