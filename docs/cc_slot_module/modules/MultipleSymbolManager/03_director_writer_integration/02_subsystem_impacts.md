---
id: "cc_slot_module:MultipleSymbolManager:director_writer:subsystem_impacts"
title: "MultipleSymbolManager Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "director_writer", "subsystems", "impact_matrix"]
---

# 🌐 MultipleSymbolManager Subsystem Impact Matrix

<!-- convention-summary-start -->
### MultipleSymbolManager Subsystem Impact Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MultipleSymbolManager Subsystem Impact Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subsystems Cross-Reference

| Action | `SlotReelModule` | `SlotCustomNodePool` | `SlotSymbolModule` | `SlotTablePaylineModule` |
| :--- | :--- | :--- | :--- | :--- |
| **`getSymbolFromPool(code)`** | Mounts specialized symbol node to reel column | Pops node from specific pool matching `code` | Initializes symbol component and attaches code | Binds symbol to payline calculation grid |
| **`removeAllSymbols()`** | Clears active reel cells | Puts nodes back into respective custom or normal pool | Resets Spine/animation state to idle | Clears active line highlight references |
| **`updateSymbolSiblingIndex()`** | Maintains column layout hierarchy | None | Reads `isHighlight` and `priority` properties | Reorders winning line symbols on top |
| **`resetAllEffectAndTasks()`** | Cancels reel scroll animations | Preserves pool integrity | Immediately aborts active Spine/Particle effects | Resets line blinking tweens |

---

## 2. Invariant Subsystem Guarantees

1. **Seamless Reel Abstraction**: `SlotReelModule` interacts identically with `MultipleSymbolManager` as it does with `SlotSymbolManager`, abstracting multi-prefab complexity.
2. **Deterministic Pool Routing**: `SlotCustomNodePool` guarantees every checked-out node is recycled to its original pool bucket upon `returnSymbol()`.
