---
id: "cc_slot_module:PoolFactoryModule:inheritance:game_creation_workflow"
title: "PoolFactoryModule Game Creation Workflow"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "inheritance", "workflow"]
---

# 🛠️ PoolFactoryModule Game Creation Workflow

<!-- convention-summary-start -->
### PoolFactoryModule Game Creation Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PoolFactoryModule Game Creation Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Integration Steps

1. Create a container node `VFX_Pool` under `Canvas/Director/GameMode/BoardG`.
2. Attach `PoolFactoryModule` or a game-specific subclass.
3. Assign the particle / Spine / sprite Prefab to the `template` field in the Inspector.
4. Set `initCount` to expected concurrent particle count (e.g., `15`).
5. Wire Director/Writer actions to invoke `getObject()` and `returnObject()`.
