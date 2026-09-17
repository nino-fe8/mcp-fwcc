---
id: "cc_slot_module:BetHistoryDetailModule:methods:onRenderDataView"
title: "BetHistoryDetailModule.onRenderDataView Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "onRenderDataView"]
---

# 📖 `BetHistoryDetailModule.onRenderDataView()`

<!-- convention-summary-start -->
### BetHistoryDetailModule.onRenderDataView Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule.onRenderDataView Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Renders either summaryView or gameModeView depending on isShowSummaryView flag.

```typescript
public onRenderDataView(data: any): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered by currentData observer.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
onRenderDataView(data: any): void {
	if (!data || !Object.keys(data).length) {
		return;
	}
	const isActiveSummary = this.betHistoryDetailData.isShowSummaryView;
	this.summaryView.active = isActiveSummary;
	this.gameModeView.active = !isActiveSummary;
	if (isActiveSummary) {
		this.updateSummaryInfo(data);
		this.updateSessionGroup(data);
		this.summaryView.emit('SET_SUMMARY_DATA', data);
	} else {
		this.updateGameModeInfo(data);
		this.gameModeView.emit('RENDER_GAME_MODE_VIEW', data);
		if (this.payableView) {
			this.payableView.emit("UPDATE_PAYABLE_VIEW", data);
		}
	}
	this.updateCurrentModeLabel(data);
}
```
