---
id: "cc_slot_module:CoinsEffect:methods:onLoad"
title: "CoinsEffect.onLoad Method"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "methods", "onLoad"]
---

# 📖 `CoinsEffect.onLoad()`

<!-- convention-summary-start -->
### CoinsEffect.onLoad Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CoinsEffect.onLoad Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Registers node event listeners `SHOW_COINS_EFFECT` and `HIDE_COINS_EFFECT`, and resets initial opacity to 0.

```typescript
protected onLoad(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected onLoad(): void {
    this.node.on("SHOW_COINS_EFFECT", this.showCoinsEffect, this);
    this.node.on("HIDE_COINS_EFFECT", this.hideCoinsEffect, this);
    this.coinParticles.forEach(particle => {
        eno.setOpacity(particle.node, 0);
        particle.node.active = false;
    });
}
```
