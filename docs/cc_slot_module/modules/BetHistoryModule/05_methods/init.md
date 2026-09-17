---
id: "cc_slot_module:BetHistoryModule:methods:init"
title: "BetHistoryModule.init Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "init"]
---

# 📖 `BetHistoryModule.init()`

<!-- convention-summary-start -->
### BetHistoryModule.init Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryModule.init Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Hides page index node and subscribes to OPEN_BET_DETAIL event.

```typescript
public init(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Called by onLoadExtend during startup.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
init(): void {
	this.pageIndexNode.active = false;
	this.eventManager.on(GameUIEvents.BET_HISTORY.OPEN_BET_DETAIL, this.openBetDetail, this);
}
```
