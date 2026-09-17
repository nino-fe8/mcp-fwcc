---
id: "cc_slot_module:CoinsEffect:methods:showCoinsEffect"
title: "CoinsEffect.showCoinsEffect Method"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "methods", "showCoinsEffect", "particle_fading"]
---

# 📖 `CoinsEffect.showCoinsEffect()`

<!-- convention-summary-start -->
### CoinsEffect.showCoinsEffect Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CoinsEffect.showCoinsEffect Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Activates particle nodes, calls `resetSystem()`, and smoothly fades opacity from 1 to 255 after a $0.1\text{s}$ delay.

```typescript
public showCoinsEffect(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showCoinsEffect(): void {
    this.coinParticles.forEach(particle => {
        if (!particle.node.active) {
            particle.node.active = true;
            eno.setOpacity(particle.node, 1);
            particle.resetSystem();
            this.scheduleOnce(() => {
                eno.setOpacity(particle.node, 255);
            }, 0.1);
        }
    });
}
```

---

## 3. Deep Architectural Insight: Anti-Flash Opacity Delay

In Cocos Creator:
- Calling `particle.resetSystem()` immediately on a particle system that was previously stopped can cause a single-frame visual artifact where the last position of old particles flashes on screen before the simulation buffer resets.
- By first setting `eno.setOpacity(particle.node, 1)` (effectively invisible to the human eye), triggering `resetSystem()`, and waiting $0.1\text{s}$ before transitioning to full `opacity = 255`, `CoinsEffect` completely eliminates visual particle flashing artifacts.
