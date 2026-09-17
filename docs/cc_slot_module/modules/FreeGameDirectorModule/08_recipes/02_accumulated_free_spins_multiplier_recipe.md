---
id: "cc_slot_module:FreeGameDirectorModule:recipe:accumulated_free_spins_multiplier"
title: "Recipe: Showing Cumulative Win Updates with Rising Multipliers"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "recipe", "cumulative_win"]
---

# 🍳 Recipe: Showing Cumulative Win Updates with Rising Multipliers

<!-- convention-summary-start -->
### Recipe: Showing Cumulative Win Updates with Rising Multipliers Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Showing Cumulative Win Updates with Rising Multipliers.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Problem Statement
Display the escalating total win amount while scaling up the floating win multiplier label on each consecutive winning free spin.

---

## 2. Implementation

```typescript
@ccclass
export class MultiplierFreeGameDirector extends FreeGameDirectorModule {
    override async _showWinPayline(data: any): Promise<void> {
        const { currentMultiplier } = this.dataStore.playSession;
        this.moduleEvent.emit("UPDATE_MULTIPLIER_LABEL", currentMultiplier);
        return super._showWinPayline(data);
    }
}
```
