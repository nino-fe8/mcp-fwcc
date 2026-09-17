---
id: "cc_core_lib:GameStateWrap:api:properties"
title: "GameStateWrap Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["GameStateWrap", "game_state_wrap", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `GameStateWrap` Detailed Properties & Schema

<!-- convention-summary-start -->
### GameStateWrap Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameStateWrap Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`_gameState`** | `any` | Operational field tracking state in `GameStateWrap`. |
| **`gameData`** | `any)` | Operational field tracking state in `GameStateWrap`. |
| **`networkBridge`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`tutorialData`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`tutorialData`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`data`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`data`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`data`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`data`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`data`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`data`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`data`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`data`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`data`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`data`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`event`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`eventName`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`betId`** | `any, betLines?: any): void` | Operational field tracking state in `GameStateWrap`. |
| **`currentBetValue`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`option`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`option`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`openCell`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`openCell`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`openCell`** | `any, totalBet: any): void` | Operational field tracking state in `GameStateWrap`. |
| **`metaData`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`callbackJP`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`event`** | `any): void` | Operational field tracking state in `GameStateWrap`. |
| **`isOn`** | `any): void` | Boolean flag indicating whether on is enabled or active in `GameStateWrap`. |
| **`data`** | `any): void` | Operational field tracking state in `GameStateWrap`. |

---

## 2. State Mutation Guardrails

All state fields in `GameStateWrap` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
