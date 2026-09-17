---
id: "cc_slot_module:TotalWinModule:methods:finish"
title: "TotalWinModule.finish Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "finish"]
---

# 📖 `TotalWinModule.finish()`

<!-- convention-summary-start -->
### TotalWinModule.finish Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TotalWinModule.finish Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Formats final tally string, halts particle systems, and schedules modal exit.

```typescript
public finish(): void
```

---

## 2. Complete Source Code Implementation

```typescript
finish(): void {
    this._lbWinAmount.string = this.moneyFormatter.formatMoney(this._totalWinAmount);
    this.playSoundEnd();
    this._isUpdating = false;
    this.stopParticle();
    tween(this.node)
        .delay(this.hideTime)
        .call(() => {
            this._lbWinAmount.string = '';
            this.exit();
        }).start();
}
```
