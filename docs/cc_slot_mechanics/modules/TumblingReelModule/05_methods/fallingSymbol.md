---
id: "cc_slot_mechanics:TumblingReelModule:methods:fallingSymbol"
title: "TumblingReelModule.fallingSymbol Method"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "fallingSymbol"]
---

# 📖 `TumblingReelModule.fallingSymbol()`

<!-- convention-summary-start -->
### TumblingReelModule.fallingSymbol Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TumblingReelModule.fallingSymbol Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
fallingSymbol(symbol: cc.Node, delayTime: number, position: cc.Vec2, isLastSymbol: boolean): void
```

- **Primary Role**: Implements fallingSymbol within the TumblingReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected fallingSymbol(symbol: cc.Node, delayTime: number, position: cc.Vec2, isLastSymbol: boolean): void {
        const spinSpeed = this.currentMode.easingTimeStop;
        const { positionStep1, positionStep2 } = this.getPositionStopStep();

        tween(symbol)
            .delay(delayTime)
            .to(this.reelManager.speed, { position })
            .call(() => {
                this.playSymbolAppearAnimation(symbol);
                this.onStopFallingSymbol(isLastSymbol);
                if (isLastSymbol) {
                    this.reelPreStopCB && this.reelPreStopCB(this.reelIndex);
                    this.reelPreStopCB = null;
                }
            })
            .by(spinSpeed, { position: positionStep2 })
            .by(spinSpeed, { position: positionStep1 })
            .call(() => {
                if (isLastSymbol) {
                    this.reelStopCB && this.reelStopCB(this.reelIndex);
                    this.reelStopCB = null;
                }
            })
            .start();
    }
```
