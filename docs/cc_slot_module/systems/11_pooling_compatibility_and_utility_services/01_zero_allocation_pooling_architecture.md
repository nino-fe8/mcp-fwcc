---
id: "cc_slot_module:systems:pooling_compatibility:zero_allocation_pooling"
title: "Zero-Allocation Pooling Architecture"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "pooling", "node_pool", "zero_gc", "memory_optimization"]
---

# 🏊 Zero-Allocation Pooling Architecture

<!-- convention-summary-start -->
### Zero-Allocation Pooling Architecture Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Zero-Allocation Pooling Architecture.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 11_pooling_compatibility_and_utility_services
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. High-Frequency Slot Object Pooling Triad
Continuous instantiation of symbols, coins, particles, and win frames causes severe garbage collection stutter on mobile devices. The framework provides 3 tailored pooling solutions:
1. **`PoolFactoryModule`**: Generic factory for free-floating particles and VFX with checked-out tracking (`_usedObjects`) and safe bulk reclamation (`returnAllObjects()`).
2. **`SlotObjectPool`**: Component-scoped pool for payline boxes and win lines that automatically assigns parentage and manages active flags.
3. **`SlotCustomNodePool`**: Ultra high-performance pool utilized by `SlotSymbolManager` for matrix symbol reuse.
