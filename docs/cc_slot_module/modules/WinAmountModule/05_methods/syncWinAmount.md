---
id: "cc_slot_module:WinAmountModule:methods:syncWinAmount"
title: "WinAmountModule.syncWinAmount Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "syncWinAmount", "hydration"]
---

# 📖 `WinAmountModule.syncWinAmount()`

<!-- convention-summary-start -->
### WinAmountModule.syncWinAmount Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountModule.syncWinAmount Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Instantly recovers and displays last round win value during session reconnection.

```typescript
public syncWinAmount(value?: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
syncWinAmount(value): void {
    this._tweenValue && this._tweenValue.stop();
    this._tweenValue = null;
    this._winValue = value || this.dataStore.getWinAmountPS();
    this.currentValue = this._winValue;
    this._callBackOnComplete = null;
    this.stopWinEffect();
    log("sync last win amount");
}
```
