---
id: "cc_slot_module:BetHistoryDetailModule:methods:onLoadExtend"
title: "BetHistoryDetailModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `BetHistoryDetailModule.onLoadExtend()`

<!-- convention-summary-start -->
### BetHistoryDetailModule.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule.onLoadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Initializes event listeners, NodePool, and default view visibilities.

```typescript
public onLoadExtend(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Invoked on node initialization.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
	this.node.on("INIT_DETAIL_VIEW", this.initDetailView, this);
	this.eventManager.on(GameUIEvents.BET_HISTORY.ON_SCROLL_CLICK, this.onScrollClick, this);
	this.scrollPool = new NodePool("ScrollHistoryPool");
	this.usingScrollItem = [];
	this.summaryView.active = false;
	this.gameModeView.active = false;
}
```
