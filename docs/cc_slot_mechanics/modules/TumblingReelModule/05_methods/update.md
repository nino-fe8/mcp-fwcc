---
id: "cc_slot_mechanics:TumblingReelModule:methods:update"
title: "TumblingReelModule.update Method Implementation"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "update"]
---

# 📖 `TumblingReelModule.update()`

<!-- convention-summary-start -->
### TumblingReelModule.update Method Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TumblingReelModule.update Method Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
update(dt: number): void
```

- **Scope**: `TumblingReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
protected update(dt: number): void {
        if (this.reelManager.state === ReelSpinState.SHOWING_RESULT && this.isSpinningCompleted && !this.isFastStopped) {
            for (let i = 0; i < this.reelManager.totalSymbol; i++) {
                const newSymbol = this.spawnReelSymbol();
                this.customizeNewSymbol(newSymbol);
            }
            this.reelManager.changeState(ReelSpinState.STOPPED);
            this.playStopAnimation();
        } 
    }

    protected playStopAnimation(): void {
        this.listSymbols.forEach((symbol, index) => {
            const symbolSize = SlotSymbolModule.getModuleComponent(symbol).getSize();
            const reverseIndex = this.reelManager.totalSymbol - index - 1;
            const position = this.initPositionByType(index, symbolSize);
            const delayTime = (this.currentMode == this.config.MODES.TURBO) ? 0 : this.getDelayTimeStopping(reverseIndex);
            const isLastSymbol = (index == this.reelManager.totalSymbol - 1);
            
            symbol.setSiblingIndex(index);
            this.fallingSymbol(symbol, delayTime, new cc.Vec2(position.x, position.y), isLastSymbol);
        });
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
