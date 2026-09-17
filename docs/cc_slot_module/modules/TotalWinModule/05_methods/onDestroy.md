---
id: "cc_slot_module:TotalWinModule:methods:onDestroy"
title: "TotalWinModule.onDestroy Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `TotalWinModule.onDestroy()`

<!-- convention-summary-start -->
### TotalWinModule.onDestroy Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TotalWinModule.onDestroy Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Stops active money tween and cancels all scheduled node actions.

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
    if (this._tweenMoney) {
        this._tweenMoney.stop();
        this._tweenMoney = null;
    }
    this.node.stopAllActions();
}
```
