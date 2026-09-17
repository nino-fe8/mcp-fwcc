---
id: "cc_slot_module:CoinsEffect:recipes:custom_gem_and_coin_particle_multi_emitter"
title: "Recipe: Combining Multiple Gem and Coin Particle Emitters"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "recipes", "multi_emitter"]
---

# 💡 Recipe: Combining Multiple Gem and Coin Particle Emitters

<!-- convention-summary-start -->
### Recipe: Combining Multiple Gem and Coin Particle Emitters Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Combining Multiple Gem and Coin Particle Emitters.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Multi-Emitter Setup

Assign multiple `cc.ParticleSystem` instances into `coinParticles` in Inspector:
- `coinParticles[0]`: Large tumbling gold coins.
- `coinParticles[1]`: Sparkling diamond dust sparks.
- `coinParticles[2]`: Explosive upward blast particles.
