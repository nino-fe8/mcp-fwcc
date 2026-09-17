---
id: "cc_slot_module:BetModule:recipes:custom_rapid_bet_stepper_repeat"
title: "Recipe: Implementing Continuous Rapid Bet Stepping on Long-Press"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "recipes", "stepper_repeat"]
---

# 💡 Recipe: Implementing Continuous Rapid Bet Stepping on Long-Press

<!-- convention-summary-start -->
### Recipe: Implementing Continuous Rapid Bet Stepping on Long-Press Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Implementing Continuous Rapid Bet Stepping on Long-Press.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation

```typescript
@ccclass
export class CustomRapidBetModule extends BetModule {
    private repeatTimer: any = null;

    start(): void {
        super.start();
        this.increaseBet.node.on(cc.Node.EventType.TOUCH_START, this.startRapidIncrease, this);
        this.increaseBet.node.on(cc.Node.EventType.TOUCH_END, this.stopRapidIncrease, this);
        this.increaseBet.node.on(cc.Node.EventType.TOUCH_CANCEL, this.stopRapidIncrease, this);
    }

    startRapidIncrease(): void {
        this.onIncreaseBet();
        this.schedule(this.onIncreaseBet, 0.15, cc.macro.REPEAT_FOREVER, 0.5);
    }

    stopRapidIncrease(): void {
        this.unschedule(this.onIncreaseBet);
    }
}
```
