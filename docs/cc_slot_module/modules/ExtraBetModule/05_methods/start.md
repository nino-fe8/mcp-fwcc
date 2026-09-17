---
id: "cc_slot_module:ExtraBetModule:methods:start"
title: "ExtraBetModule.start Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "start"]
---

# 📖 `ExtraBetModule.start()`

<!-- convention-summary-start -->
### ExtraBetModule.start Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule.start Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Disables steppers initially, locates `BetData`, and initializes observers.

```typescript
public start(): void
```

---

## 2. Complete Source Code Implementation

```typescript
start(): void {
    this.disableExtraBet();
    this.betModel = this.gameLogic.getDataModel().BetData;
    this.setupObserver();
}
```
