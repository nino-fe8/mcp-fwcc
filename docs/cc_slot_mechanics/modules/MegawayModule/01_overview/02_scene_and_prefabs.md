---
id: "cc_slot_mechanics:MegawayModule:overview:scene_and_prefabs"
title: "MegawayModule Scene Placement & Prefab Configuration"
category: "cc_slot_mechanics"
tags: ["MegawayModule", "megaway_module", "cc_slot_mechanics", "overview", "scene", "prefabs"]
---

# 🌲 MegawayModule Scene Placement & Prefab Configuration

<!-- convention-summary-start -->
### MegawayModule Scene Placement & Prefab Configuration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MegawayModule Scene Placement & Prefab Configuration.
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
- **`lbMegaway`** (`cc.Label`): default `null`
- **`defaultString`** (`string`): default `"..."`
