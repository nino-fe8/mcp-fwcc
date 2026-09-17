---
id: "cc_slot_module:TotalWinModule:methods:bindQuickShow"
title: "TotalWinModule.bindQuickShow Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "bindQuickShow"]
---

# 📖 `TotalWinModule.bindQuickShow()`

<!-- convention-summary-start -->
### TotalWinModule.bindQuickShow Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TotalWinModule.bindQuickShow Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Enforces a 1-second interaction lock to prevent accidental instant skip clicks.

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
