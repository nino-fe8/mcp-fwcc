---
id: "cc_slot_mechanics:CollectionItemModule:overview:scene_and_prefabs"
title: "CollectionItemModule Scene Placement & Prefab Configuration"
category: "cc_slot_mechanics"
tags: ["CollectionItemModule", "collection_item_module", "cc_slot_mechanics", "overview", "scene", "prefabs"]
---

# 🌲 CollectionItemModule Scene Placement & Prefab Configuration

<!-- convention-summary-start -->
### CollectionItemModule Scene Placement & Prefab Configuration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CollectionItemModule Scene Placement & Prefab Configuration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 01_overview
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Scene Anchor & Placement
- Mounted under the relevant table or game mode container node (e.g. `Canvas/Director/GameMode/BoardG`).

---

## 2. Inspector Properties Overview
Declared properties count: 2
- **`item`** (`cc.Prefab`): default `null`
- **`holder`** (`cc.Node`): default `null`
