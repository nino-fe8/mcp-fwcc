---
id: "cc_slot_mechanics:BuyFeatureModule:api:properties"
title: "BuyFeatureModule Inspector Properties & State Schema"
category: "cc_slot_mechanics"
tags: ["BuyFeatureModule", "buy_feature_module", "cc_slot_mechanics", "properties", "schema"]
---

# 📋 `BuyFeatureModule` Properties & State Schema

<!-- convention-summary-start -->
### BuyFeatureModule Inspector Properties & State Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BuyFeatureModule Inspector Properties & State Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspector Properties

| Property Name | Type | Description |
| :--- | :--- | :--- |
| **`lbContent`** | `cc.Label` | Inspector property in `BuyFeatureModule` managing runtime lbContent. |
| **`lbBetValue`** | `cc.Label` | Inspector property in `BuyFeatureModule` managing runtime lbBetValue. |
| **`lbTotalBet`** | `cc.Label` | Inspector property in `BuyFeatureModule` managing runtime lbTotalBet. |
| **`btnIncreaseBet`** | `cc.Button` | Inspector property in `BuyFeatureModule` managing runtime btnIncreaseBet. |
| **`btnDecreaseBet`** | `cc.Button` | Inspector property in `BuyFeatureModule` managing runtime btnDecreaseBet. |
| **`btnBuyFeature`** | `cc.Button` | Inspector property in `BuyFeatureModule` managing runtime btnBuyFeature. |

---

## 2. State Invariants

- Properties are wired via Cocos Creator Inspector prefabs.
- Must not be mutated directly while the table state is in active spin or cascade mode.
