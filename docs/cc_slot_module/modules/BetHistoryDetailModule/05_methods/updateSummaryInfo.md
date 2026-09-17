---
id: "cc_slot_module:BetHistoryDetailModule:methods:updateSummaryInfo"
title: "BetHistoryDetailModule.updateSummaryInfo Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "updateSummaryInfo"]
---

# 📖 `BetHistoryDetailModule.updateSummaryInfo()`

<!-- convention-summary-start -->
### BetHistoryDetailModule.updateSummaryInfo Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule.updateSummaryInfo Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Clears infoLabel text during summary view.

```typescript
public updateSummaryInfo(_data: any): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Called in onRenderDataView when isActiveSummary is true.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
updateSummaryInfo(_data: any): void {
	this.infoLabel.string = "";
}
```
