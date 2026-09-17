---
id: "cc_slot_module:BetHistoryModule:methods:resetBetHistory"
title: "BetHistoryModule.resetBetHistory Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "resetBetHistory"]
---

# 📖 `BetHistoryModule.resetBetHistory()`

<!-- convention-summary-start -->
### BetHistoryModule.resetBetHistory Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryModule.resetBetHistory Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Disables next and back buttons and hides page/message containers.

```typescript
public resetBetHistory(): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Invoked during start() and modal reset.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
resetBetHistory(): void {
	this.nextBtn.interactable = false;
	this.backBtn.interactable = false;
	this.pageIndexNode.active = false;
	this.messageNode.active = false;
}
```
