---
id: "cc_slot_module:JackpotWinModule:methods:bindQuickShow"
title: "JackpotWinModule.bindQuickShow Method"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "methods", "bindQuickShow"]
---

# 📖 `JackpotWinModule.bindQuickShow()`

<!-- convention-summary-start -->
### JackpotWinModule.bindQuickShow Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinModule.bindQuickShow Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Enforces a 2-second interaction lock to prevent accidental instant skip clicks.

```typescript
public bindQuickShow(): void
```

---

## 2. Complete Source Code Implementation

```typescript
bindQuickShow(): void {
    this._skippable = false;
    tween(this.node).delay(this.delayShowTime).call(() => {
        this._skippable = true;
    }).start();
}
```
