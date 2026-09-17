---
id: "cc_slot_module:SlotTableNearWinModule:method:_getAnimNearWin"
title: "SlotTableNearWinModule._getAnimNearWin Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_getAnimNearWin"]
---

# 🚀 `SlotTableNearWinModule._getAnimNearWin(): void`

<!-- convention-summary-start -->
### SlotTableNearWinModule._getAnimNearWin Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule._getAnimNearWin Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
private _getAnimNearWin(): void
```

---

## 2. Algorithmic Steps

Queries `this.nearWinEffect` node and caches either `sp.Skeleton` (if `this.useSpine` is true) or `cc.Animation` (if false).

---

## 3. Full Source Code

```typescript
_getAnimNearWin(): void {
    if (this.useSpine) {
        this._nearWinAnim = this.nearWinEffect.getComponent(sp.Skeleton);
    } else {
        this._nearWinAnim = this.nearWinEffect.getComponent(Animation);
    }
}
```
