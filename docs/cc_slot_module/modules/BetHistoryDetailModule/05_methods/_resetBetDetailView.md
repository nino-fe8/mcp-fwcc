---
id: "cc_slot_module:BetHistoryDetailModule:methods:_resetBetDetailView"
title: "BetHistoryDetailModule._resetBetDetailView Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "_resetBetDetailView"]
---

# 📖 `BetHistoryDetailModule._resetBetDetailView()`

<!-- convention-summary-start -->
### BetHistoryDetailModule._resetBetDetailView Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule._resetBetDetailView Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Hides summaryView and gameModeView and emits reset events.

```typescript
public _resetBetDetailView(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Called prior to rendering new step data.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
_resetBetDetailView(): void {
	this.summaryView.active = false;
	this.gameModeView.active = false;
	this.gameModeView.emit('RESET_GAME_MODE_VIEW');
	this.summaryView.emit('RESET_SUMMARY_DATA');
	if (this.payableView) {
		this.payableView.emit("RESET_PAYABLE_VIEW");
	}
	this.infoLabel.string = "";
}
```
