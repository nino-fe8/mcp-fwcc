---
id: "cc_slot_module:BetHistoryDetailModule:methods:initDetailView"
title: "BetHistoryDetailModule.initDetailView Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "initDetailView"]
---

# 📖 `BetHistoryDetailModule.initDetailView()`

<!-- convention-summary-start -->
### BetHistoryDetailModule.initDetailView Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule.initDetailView Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Resets existing views and emits INIT_BET_DETAIL.

```typescript
public initDetailView(data: any): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered by INIT_DETAIL_VIEW node event from parent.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
initDetailView(data: any): void {
	this._reset();
	this.gameLogic.emit(GameLogicUIEvents.INIT_BET_DETAIL, data);
}
```
