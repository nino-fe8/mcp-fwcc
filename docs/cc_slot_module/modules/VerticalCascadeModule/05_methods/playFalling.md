---
id: "cc_slot_module:VerticalCascadeModule:methods:playFalling"
title: "VerticalCascadeModule.playFalling Method"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "methods", "playFalling", "tween_physics"]
---

# 📖 `VerticalCascadeModule.playFalling()`

<!-- convention-summary-start -->
### VerticalCascadeModule.playFalling Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for VerticalCascadeModule.playFalling Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Drives the physical gravity drop tween for a symbol node with `cubicIn` acceleration and bounce easing.

```typescript
protected playFalling(symbol: cc.Node): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected playFalling(symbol: cc.Node): void {
    //support back to real
    if (!symbol["droppedPosition"]) {
        return;
    }

    const { fallingTime, deltaTimeCubicIn, timeBouncing } = this.getFallingTime();
    const { targetPos, targetBouncePos } = symbol["droppedPosition"];
    symbol.emit("SHOW_STATIC");

    symbol["tweenDroppedSymbol"] = tween(symbol)
        .to(fallingTime - deltaTimeCubicIn, { position: targetPos }, { easing: 'cubicIn' })
        .call(() => {
            symbol.emit("PLAY_ANIMATION_APPEAR");
        })
        .to(timeBouncing * 0.3, { position: targetBouncePos })
        .delay(timeBouncing * 0.3)
        .to(timeBouncing * 0.3, { position: targetPos })
        .call(() => {
            symbol['tweenDroppedSymbol'] = null;
            symbol["droppedPosition"] = null;
            symbol["colIndex"] = null;
        })
        .start();
}
```
