---
id: "cc_slot_mechanics:MegaReelSceneTest:api:properties"
title: "MegaReelSceneTest Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["MegaReelSceneTest", "mega_reel_scene_test", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `MegaReelSceneTest` Properties & State Schema

<!-- convention-summary-start -->
### MegaReelSceneTest Inspector Properties & State Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MegaReelSceneTest Inspector Properties & State Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`table`** | `SlotTableMegaModule` | Inspector property in `MegaReelSceneTest` managing runtime table. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
