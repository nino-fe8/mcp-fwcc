---
id: "cc_slot_mechanics:CascadeWildGenerationSceneTest:api:properties"
title: "CascadeWildGenerationSceneTest Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["CascadeWildGenerationSceneTest", "cascade_wild_generation_scene_test", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `CascadeWildGenerationSceneTest` Properties & State Schema

<!-- convention-summary-start -->
### CascadeWildGenerationSceneTest Inspector Properties & State Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CascadeWildGenerationSceneTest Inspector Properties & State Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`table`** | `SlotTableModule` | Inspector property in `CascadeWildGenerationSceneTest` managing runtime table. |
| **`cascadeModule`** | `CascadeWildGenerationModule` | Inspector property in `CascadeWildGenerationSceneTest` managing runtime cascadeModule. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
