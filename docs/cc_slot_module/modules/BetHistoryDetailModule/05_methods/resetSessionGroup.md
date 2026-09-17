---
id: "cc_slot_module:BetHistoryDetailModule:methods:resetSessionGroup"
title: "BetHistoryDetailModule.resetSessionGroup Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "methods", "resetSessionGroup"]
---

# 📖 `BetHistoryDetailModule.resetSessionGroup()`

<!-- convention-summary-start -->
### BetHistoryDetailModule.resetSessionGroup Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule.resetSessionGroup Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Emits RESET_SESSION_ID to sessionGroup node.

```typescript
public resetSessionGroup(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Called by _reset().
- **Lifecycle Phase**: Round detail replay & tab bar interaction.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and state references.
2. Updates node hierarchies, node pool items, or label string formatters.
3. Dispatches synchronization events to child replay viewports.

---

## 4. Complete Source Code Implementation

```typescript
resetSessionGroup(): void {
	if (this.sessionGroup) {
		this.sessionGroup.emit("RESET_SESSION_ID");
	}
}
```
