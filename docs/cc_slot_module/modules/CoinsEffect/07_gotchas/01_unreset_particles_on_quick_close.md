---
id: "cc_slot_module:CoinsEffect:gotchas:unreset_particles_on_quick_close"
title: "Gotcha: Stale Particle Systems on Rapid Skip Sequences"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "gotchas", "particle_leak", "skip"]
---

# ⚠️ Gotcha: Stale Particle Systems on Rapid Skip Sequences

<!-- convention-summary-start -->
### Gotcha: Stale Particle Systems on Rapid Skip Sequences Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Stale Particle Systems on Rapid Skip Sequences.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

When `showCoinsEffect()` is called, it schedules an opacity change after $0.1\text{s}$:
```typescript
this.scheduleOnce(() => {
    eno.setOpacity(particle.node, 255);
}, 0.1);
```
If a user taps to skip within $< 100\text{ms}$ and triggers `hideCoinsEffect()`, the scheduled timer still executes, causing stopped particles to suddenly become fully opaque in a static state.

---

## 2. Solution

In `hideCoinsEffect()`, cancel scheduled tasks and set opacity immediately back to 0:
```typescript
hideCoinsEffect(): void {
    this.unscheduleAllCallbacks();
    this.coinParticles.forEach(particle => {
        particle.stopSystem();
        eno.setOpacity(particle.node, 0);
        particle.node.active = false;
    });
}
```
