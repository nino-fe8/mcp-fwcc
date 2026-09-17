---
id: "cc_slot_module:BetSelectionPanel:methods:onDestroy"
title: "BetSelectionPanel.onDestroy Method"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "methods", "onDestroy", "cleanup", "memory_leak"]
---

# 📖 `BetSelectionPanel.onDestroy()`

<!-- convention-summary-start -->
### BetSelectionPanel.onDestroy Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetSelectionPanel.onDestroy Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Performs essential teardown by stopping active scrolling tweens and releasing all observer bindings on `BetData` and `UIManagerData`.

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
	this._tweenScrollingDenom && this._tweenScrollingDenom.stop();
	this._tweenScrollingTotal && this._tweenScrollingTotal.stop();
	this.observer.releaseAll(this.betModel, this);
	this.observer.releaseAll(this.uiManagerData, this);
}
```
