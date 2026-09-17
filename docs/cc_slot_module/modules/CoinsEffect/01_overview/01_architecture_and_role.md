---
id: "cc_slot_module:CoinsEffect:overview:architecture_and_role"
title: "CoinsEffect Architectural Role & Particle Subsystem"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "overview", "architecture", "particles", "coin_shower"]
---

# 🏛️ CoinsEffect Architectural Role & Particle Subsystem

<!-- convention-summary-start -->
### CoinsEffect Architectural Role & Particle Subsystem Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CoinsEffect Architectural Role & Particle Subsystem.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Architectural Mission

`CoinsEffect` manages the activation, opacity fading, and lifecycle of celebratory particle systems (e.g. falling gold coins, diamond sparks) during win celebrations in `WinEffectModule`, `TotalWinModule`, and `JackpotWinModule`.

```mermaid
graph TD
    Parent[WinEffectModule / TotalWinModule] -->|emit: SHOW_COINS_EFFECT| CE[CoinsEffect]
    CE -->|resetSystem() & fade in opacity| P[cc.ParticleSystem[]]
    Parent -->|emit: HIDE_COINS_EFFECT| CE
    CE -->|stopSystem()| P
```

---

## 2. Key Responsibilities

1. **Multi-Particle Management**:
   - Holds an array `coinParticles: cc.ParticleSystem[]` supporting multi-emitter particle effects.
2. **Smooth Fade-In Transition**:
   - Initial opacity set to $1$ upon activation, fading to $255$ after $0.1\text{s}$ to prevent visual pop-in artifacts.
3. **Event-Driven Coupling**:
   - Listens to node events `SHOW_COINS_EFFECT` and `HIDE_COINS_EFFECT`.
