---
id: "cc_slot_module:BetHistoryDetailModule:methods:initScrollItem"
title: "BetHistoryDetailModule.initScrollItem Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "initScrollItem"]
---

# 📖 `BetHistoryDetailModule.initScrollItem()`

<!-- convention-summary-start -->
### BetHistoryDetailModule.initScrollItem Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule.initScrollItem Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Clears and populates tab items from NodePool for each mode step.

```typescript
public initScrollItem(scrollData: any[]): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered by gameModeData observer.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
initScrollItem(scrollData: any[]): void {
	if (!this.hasScrollView()) {
		return;
	}
	if (!scrollData) {
		this.scrollContent.active = false;
		return;
	}
	this.scrollContent.active = true;
	this._clearScrollItem();
	scrollData.forEach((data, index) => {
		const item = this._getScrollItem();
		item.parent = this.scrollContent;
		item.active = true;
		item.emit('SET_DATA_SCROLL', index, data);
		this.usingScrollItem.push(item);
	});
	this.enableTabHighlight(this.betHistoryDetailData.currentIndex);
}
```
