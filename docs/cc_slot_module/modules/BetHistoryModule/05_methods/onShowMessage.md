---
id: "cc_slot_module:BetHistoryModule:methods:onShowMessage"
title: "BetHistoryModule.onShowMessage Method"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "methods", "onShowMessage"]
---

# 📖 `BetHistoryModule.onShowMessage()`

<!-- convention-summary-start -->
### BetHistoryModule.onShowMessage Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryModule.onShowMessage Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Toggles messageNode active state and populates messageLabel text.

```typescript
public onShowMessage(isActive: boolean): void
```

---

## 2. Trigger Source & Execution Lifecycle

- **Caller / Trigger**: Triggered by modelData.isEnableMessage observer.
- **Lifecycle Phase**: UI event dispatch / Data model observer notification.

---

## 3. Algorithmic Logic Breakdown

1. Inspects active guards and dependencies.
2. Performs UI state synchronization or emits game logic events.
3. Propagates data changes down to child nodes.

---

## 4. Complete Source Code Implementation

```typescript
onShowMessage(isActive: boolean): void {
	this.messageNode.active = isActive;
	this.messageLabel.string = isActive ? this.modelData.messageText : "";
}
```
