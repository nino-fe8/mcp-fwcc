---
id: "cc_slot_module:FreeGameDirectorModule:recipe:custom_free_spins_retrigger_badge"
title: "Recipe: Retriggering Free Spins with Floating Badge Animation"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "recipe", "retrigger_badge"]
---

# 🍳 Recipe: Retriggering Free Spins with Floating Badge Animation

<!-- convention-summary-start -->
### Recipe: Retriggering Free Spins with Floating Badge Animation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Retriggering Free Spins with Floating Badge Animation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `FreeGameDirector[GameId].ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Problem Statement
When 3 Scatters land during Free Spins, show a floating `+5 SPINS` badge animation before incrementing the counter.

---

## 2. Implementation

In `FreeGameDirector[GameId].ts`:
```typescript
@ccclass
export class FreeGameDirector9666 extends FreeGameDirectorModule {
    async onRetrigger(addedSpins: number): Promise<void> {
        this.spinTimes.emit("PLAY_RETRIGGER_ANIMATION", addedSpins);
        this.dataStore.freeSpinTimes += addedSpins;
        this.spinTimes.emit("UPDATE_SPINTIMES", this.dataStore.freeSpinTimes);
        await this.delayAction(1.5);
    }
}
```
