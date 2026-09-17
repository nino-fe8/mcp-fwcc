---
id: "cc_slot_module:WinAmountModule:recipes:custom_win_level_particles_recipe"
title: "Recipe: Implementing Tier-Based Particle Halos on Win Counts"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "recipes", "win_particles"]
---

# 💡 Recipe: Implementing Tier-Based Particle Halos on Win Counts

<!-- convention-summary-start -->
### Recipe: Implementing Tier-Based Particle Halos on Win Counts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Implementing Tier-Based Particle Halos on Win Counts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation

```typescript
@ccclass
export class CustomWinAmountModule extends WinAmountModule {
    @property(cc.ParticleSystem) smallWinParticle: cc.ParticleSystem = null;
    @property(cc.ParticleSystem) bigWinParticle: cc.ParticleSystem = null;

    playWinEffect(winLevel: number): void {
        this.stopWinEffect();
        if (winLevel >= 3 && this.bigWinParticle) {
            this.bigWinParticle.resetSystem();
        } else if (winLevel > 0 && this.smallWinParticle) {
            this.smallWinParticle.resetSystem();
        }
    }

    stopWinEffect(): void {
        if (this.smallWinParticle) this.smallWinParticle.stopSystem();
        if (this.bigWinParticle) this.bigWinParticle.stopSystem();
    }
}
```
