---
id: "cc_slot_module:FreeOptionDirectorModule:recipe:mystery_choice_roulette"
title: "Recipe: Implementing Mystery Roulette Animation"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "recipe", "roulette"]
---

# 🍳 Recipe: Implementing Mystery Roulette Animation

<!-- convention-summary-start -->
### Recipe: Implementing Mystery Roulette Animation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Implementing Mystery Roulette Animation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Problem Statement
When selecting the Mystery option card (Option ID 4), spin a mini wheel to reveal the randomized free spin count and multiplier.

---

## 2. Implementation

```typescript
@ccclass
export class MysteryFreeOptionDirector extends FreeOptionDirectorModule {
    async onMysterySelected(optionId: number): Promise<void> {
        this.stopCountDown();
        if (optionId === 4) {
            await this.playRouletteAnimation();
        }
        this.gameLogic.emit(GameLogicUIEvents.SEND_FREE_OPTION_REQUEST, optionId);
    }
}
```
