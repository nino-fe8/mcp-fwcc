---
id: "cc_slot_module:CoinsEffect:methods:hideCoinsEffect"
title: "CoinsEffect.hideCoinsEffect Method"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "methods", "hideCoinsEffect"]
---

# 📖 `CoinsEffect.hideCoinsEffect()`

<!-- convention-summary-start -->
### CoinsEffect.hideCoinsEffect Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CoinsEffect.hideCoinsEffect Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Iterates through all managed `cc.ParticleSystem` components and calls `stopSystem()` to halt new particle emissions.

```typescript
public hideCoinsEffect(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hideCoinsEffect(): void {
    this.coinParticles.forEach(particle => {
        particle.stopSystem();
    });
}
```
