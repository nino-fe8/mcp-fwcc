---
id: "cc_slot_mechanics:TumblingReelModule:methods:playFastStopAnimation"
title: "TumblingReelModule.playFastStopAnimation Method Implementation"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "playFastStopAnimation"]
---

# 📖 `TumblingReelModule.playFastStopAnimation()`

<!-- convention-summary-start -->
### TumblingReelModule.playFastStopAnimation Method Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TumblingReelModule.playFastStopAnimation Method Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
playFastStopAnimation(): void
```

- **Scope**: `TumblingReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
protected playFastStopAnimation(): void {
        this.listSymbols.forEach((symbol, index) => {
            const symbolSize = SlotSymbolModule.getModuleComponent(symbol).getSize();
            const position = this.initPositionByType(index, symbolSize);
            const isLastSymbol = index === 0;
            
            symbol.stopAllActions();
            symbol.setSiblingIndex(index);
            this.fallingSymbol(symbol, 0, new Vec2(position.x, position.y), isLastSymbol);
        });
    }

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

    playSymbolAppearAnimation(symbol?: cc.Node): void {
        symbol.emit("PLAY_ANIMATION_APPEAR");
    }

    protected getDelayTimeStopping(index: number): number {
        return index * this.config.DELAY_BETWEEN_SYMBOLS_STOPPING + this.reelIndex * this.config.DELAY_BETWEEN_REELS;
    }

    protected onStopFallingSymbol(_isLastSymbol: boolean): void {
        
    }
}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
