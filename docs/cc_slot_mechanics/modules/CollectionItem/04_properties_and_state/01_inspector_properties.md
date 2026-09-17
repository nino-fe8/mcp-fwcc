---
id: "cc_slot_mechanics:CollectionItem:api:properties"
title: "CollectionItem Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["CollectionItem", "collection_item", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `CollectionItem` Properties & State Schema

<!-- convention-summary-start -->
### CollectionItem Inspector Properties & State Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CollectionItem Inspector Properties & State Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`sprItem`** | `cc.Sprite` | Inspector property in `CollectionItem` managing runtime sprItem. |
| **`lbItemName`** | `cc.Label` | Inspector property in `CollectionItem` managing runtime lbItemName. |
| **`lbCollection`** | `cc.Label` | Inspector property in `CollectionItem` managing runtime lbCollection. |
| **`itemFrames`** | `cc.SpriteFrame[]` | Inspector property in `CollectionItem` managing runtime itemFrames. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
