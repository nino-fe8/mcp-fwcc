---
id: "cc_slot_module:JackpotWinModule:recipes:custom_four_tier_jackpot_presentation"
title: "Recipe: Dynamic Spine Animations for 4-Tier Jackpots"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "recipes", "spine", "4_tier_jackpot"]
---

# 💡 Recipe: Dynamic Spine Animations for 4-Tier Jackpots

<!-- convention-summary-start -->
### Recipe: Dynamic Spine Animations for 4-Tier Jackpots Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Dynamic Spine Animations for 4-Tier Jackpots.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Multi-Tier Spine Setup

```typescript
@ccclass
export class FourTierJackpotWinModule extends JackpotWinModule {
    @property(sp.Skeleton) spineTitle: sp.Skeleton = null;

    enter(): void {
        super.enter();
        const animName = `JACKPOT_${this.jackpotType.toUpperCase()}`;
        if (this.spineTitle) {
            this.spineTitle.setAnimation(0, animName, true);
        }
    }
}
```
