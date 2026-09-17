---
id: "cc_slot_module:PoolFactoryModule:overview:scene_and_prefabs"
title: "PoolFactoryModule Scene Placement & Prefab Configuration"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "overview", "scene", "prefabs"]
---

# 🌲 PoolFactoryModule Scene Placement & Prefab Configuration

<!-- convention-summary-start -->
### PoolFactoryModule Scene Placement & Prefab Configuration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PoolFactoryModule Scene Placement & Prefab Configuration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Canonical Scene Node Anchor

`PoolFactoryModule` is mounted on VFX containers, table layers, or particle managers across slot game scenes:

```text
Canvas/Director/GameMode/MainGamePrefab
├── VFXContainer (PoolFactoryModule - e.g. Coin Blast VFX)
├── FlyingCoinLayer (PoolFactoryModule - Win coin fly items)
└── CellHighlightLayer (PoolFactoryModule - Grid highlight frames)
```

---

## 2. Inspector Properties Schema

| Property | Type | Default | Description |
| :--- | :--- | :---: | :--- |
| **`template`** | `cc.Prefab` | `null` | Prefab asset template used to instantiate pooled node items. |
| **`initCount`** | `cc.Integer` | `5` | Number of prefab clones to pre-instantiate during `onLoad()`. |
