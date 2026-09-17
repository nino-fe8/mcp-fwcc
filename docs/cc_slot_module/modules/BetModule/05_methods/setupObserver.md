---
id: "cc_slot_module:BetModule:methods:setupObserver"
title: "BetModule.setupObserver Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "setupObserver"]
---

# 📖 `BetModule.setupObserver()`

<!-- convention-summary-start -->
### BetModule.setupObserver Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule.setupObserver Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Registers observers on `betDenom`, `totalBet`, `betLineNumber`, `totalCredit`, `minBetEnable`, and `maxBetEnable`.

```typescript
public setupObserver(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setupObserver(): void {
    this.observer.watch(this.betModel, "betDenom", this.onUpdateBetDenom.bind(this), this);
    this.observer.watch(this.betModel, "totalBet", this.onUpdateTotalBet.bind(this), this);
    this.observer.watch(this.betModel, "betLineNumber", this.onUpdateBetLineNumber.bind(this), this);
    this.observer.watch(this.betModel, "totalCredit", this.onUpdateTotalCredit.bind(this), this);
    this.observer.watch(this.betModel, "minBetEnable", this.onMinBetEnable.bind(this), this, { canTriggerSameValue: true });
    this.observer.watch(this.betModel, "maxBetEnable", this.onMaxBetEnable.bind(this), this, { canTriggerSameValue: true });
}
```
