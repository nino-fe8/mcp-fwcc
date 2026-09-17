---
id: "cc_slot_module:SlotTableNearWinModule:method:_playNearWinEffect"
title: "SlotTableNearWinModule._playNearWinEffect Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_playNearWinEffect"]
---

# 🚀 `SlotTableNearWinModule._playNearWinEffect(col): void`

<!-- convention-summary-start -->
### SlotTableNearWinModule._playNearWinEffect Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule._playNearWinEffect Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
private _playNearWinEffect(col: number): void
```

---

## 2. Trigger Source & Execution Lifecycle

Invoked by `reelStopNearWin()` to present the tension effect on column `col`.

---

## 3. Algorithmic Steps

1. Extracts `isNearWin` flag from `_nearWinData[col]`.
2. If `!isNearWin`, calls `_stopNearWinEffect()` and returns.
3. If `nearWinEffect` node is inactive, sets active to `true`, starts animation (`_playNearWinAnim()`), and plays audio (`_playSoundNearWin()`).
4. Repositions `nearWinEffect` along X to `_getXPosition(col)`.

---

## 4. Full Source Code

```typescript
_playNearWinEffect(col: number): void {
    const { isNearWin } = this._nearWinData[col] || {};
    if (!isNearWin) {
        return this._stopNearWinEffect();
    }

    if (!this.nearWinEffect.active) {
        this.nearWinEffect.active = true;
        this._playNearWinAnim();
        this._playSoundNearWin();
    }
    this.nearWinEffect.setPosition(this._getXPosition(col), this.nearWinEffect.position.y);
}
```
