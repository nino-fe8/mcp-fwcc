---
id: "cc_slot_module:BetHistoryDetailModule:methods:_getScrollItem"
title: "BetHistoryDetailModule._getScrollItem Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "_getScrollItem"]
---

# 📖 `BetHistoryDetailModule._getScrollItem()`

<!-- convention-summary-start -->
### BetHistoryDetailModule._getScrollItem Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule._getScrollItem Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Checks out node from scrollPool or instantiates scrollItem prefab.

```typescript
public _getScrollItem(): cc.Node
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Internal pool checkout helper.
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
_getScrollItem(): cc.Node {
	let result = this.scrollPool && this.scrollPool.get();
	if (!result) {
		result = instantiate(this.scrollItem);
	}
	return result;
}
```
