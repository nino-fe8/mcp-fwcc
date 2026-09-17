---
id: "cc_slot_module:overview:pooling_and_memory_optimization"
title: "Pooling & Memory Optimization Architecture"
category: "cc_slot_module"
tags: ["cc_slot_module", "overview", "pooling", "memory_optimization", "zero_gc", "node_pool"]
---

# 🏊 Pooling & Memory Optimization Architecture

<!-- convention-summary-start -->
### Pooling & Memory Optimization Architecture Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Pooling & Memory Optimization Architecture.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, over_view
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Zero-Allocation Spin Loop Philosophy
During high-speed Turbo spins (10+ spins per second in Fast-To-Result mode), dynamic node creation (`cc.instantiate`) and destruction (`node.destroy`) leads to severe memory fragmentation and Garbage Collection frame drops.

## 2. Framework Pooling Architecture
The framework enforces object reuse across 3 specialized pooling layers:
1. **Symbol Pool (`SlotCustomNodePool` / `SlotSymbolManager`)**: Reuses reel symbol instances and Spine skeleton nodes across column rolls.
2. **VFX & Particle Factory (`PoolFactoryModule`)**: Reuses flying coin animations, blast particles, and floating text items.
3. **UI Item Pool (`SlotObjectPool`)**: Reuses glowing payline win frames, connection lines, and cell markers.
