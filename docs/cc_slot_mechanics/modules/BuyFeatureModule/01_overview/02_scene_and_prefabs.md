---
id: "cc_slot_mechanics:BuyFeatureModule:overview:scene_and_prefabs"
title: "BuyFeatureModule Scene Placement & Prefab Configuration"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "overview", "scene", "prefabs"]
---

# 🌲 BuyFeatureModule Scene Placement & Prefab Configuration

<!-- convention-summary-start -->
### BuyFeatureModule Scene Placement & Prefab Configuration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BuyFeatureModule Scene Placement & Prefab Configuration.
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
Declared properties count: 8
- **`lbContent`** (`cc.Label`): default `null`
- **`lbBetValue`** (`cc.Label`): default `null`
- **`lbTotalBet`** (`cc.Label`): default `null`
- **`btnIncreaseBet`** (`cc.Button`): default `null`
- **`btnDecreaseBet`** (`cc.Button`): default `null`
- **`btnBuyFeature`** (`cc.Button`): default `null`
- **`sfxIncreaseBetId`** (`string`): default `"BTN_BET_INCREASE"`
- **`sfxDecreaseBetId`** (`string`): default `"BTN_BET_DECREASE"`
