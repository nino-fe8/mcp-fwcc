---
id: "cc_slot_mechanics:TumblingReelModule:methods:help"
title: "TumblingReelModule.help Method Implementation"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "help"]
---

# 📖 `TumblingReelModule.help()`

<!-- convention-summary-start -->
### TumblingReelModule.help Method Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TumblingReelModule.help Method Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
help(HelpDocuments.TUMBLING_REEL_MODULE) export class TumblingReelModule extends SlotReelModule { protected isSpinningCompleted: boolean = false; protected isFastStopped: boolean = false; spinAction(): void
```

- **Scope**: `TumblingReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
help(HelpDocuments.TUMBLING_REEL_MODULE)
export class TumblingReelModule extends SlotReelModule {

    protected isSpinningCompleted: boolean = false;
    protected isFastStopped: boolean = false;

    spinAction(): void {
        this.isSpinningCompleted = false;
        this.isFastStopped = false;

        const reverseSymbols = [...this.listSymbols].reverse();
        reverseSymbols.forEach((symbol, index) => {
            const position: cc.Vec2 = symbol.getPosition();
            symbol.setSiblingIndex(this.reelManager.totalSymbol - index - 1);

            const delayByReelIndex = index * this.config.DELAY_BETWEEN_SYMBOLS_SPINNING + this.reelIndex * this.config.DELAY_BETWEEN_REELS;
            let delayTime = (this.currentMode == this.config.MODES.TURBO) ? 0 : delayByReelIndex;
            
            tween(symbol)
                .delay(delayTime)
                .call(() => {
                    this.changeToBlurSymbol(symbol)
                })
                .to(this.reelManager.speed, { position: new Vec2(0, position.y - this.reelManager.totalSymbol * this.SYMBOL_HEIGHT - this.config.BUFFER_BOTTOM_Y) })
                .call(() => {
                    if (index == this.reelManager.totalSymbol - 1) {
                        this.isSpinningCompleted = true;
                        this.recycleSymbol();
                    }
                })
                .start();
        });
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
