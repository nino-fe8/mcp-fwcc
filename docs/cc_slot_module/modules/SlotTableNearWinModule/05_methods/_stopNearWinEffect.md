---
id: "cc_slot_module:SlotTableNearWinModule:method:_stopNearWinEffect"
title: "SlotTableNearWinModule._stopNearWinEffect Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_stopNearWinEffect"]
---

# 🚀 `SlotTableNearWinModule._stopNearWinEffect(): void`

<!-- convention-summary-start -->
### SlotTableNearWinModule._stopNearWinEffect Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule._stopNearWinEffect Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
private _stopNearWinEffect(): void
```

---

## 2. Algorithmic Steps

1. If `!this._nearWinAnim`, exits.
2. If `!this.useSpine`, stops `cc.Animation`.
3. Hides overlay node via `this.nearWinEffect.active = false`.

---

## 3. Full Source Code

```typescript
_stopNearWinEffect(): void {
    if (!this._nearWinAnim) {
        return;
    }
    if (!this.useSpine) {
        this._nearWinAnim.stop();
    }
    this.nearWinEffect.active = false;
}
```
