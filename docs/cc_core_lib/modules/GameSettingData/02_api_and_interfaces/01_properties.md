---
id: "cc_core_lib:GameSettingData:api:properties"
title: "GameSettingData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["GameSettingData", "game_setting_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `GameSettingData` Detailed Properties & Schema

<!-- convention-summary-start -->
### GameSettingData Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameSettingData Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`isEnableBGM`** | `boolean` | Boolean flag indicating whether enablebgm is enabled or active in `GameSettingData`. |
| **`isEnableSFX`** | `boolean` | Boolean flag indicating whether enablesfx is enabled or active in `GameSettingData`. |
| **`isEnable`** | `boolean): void` | Boolean flag indicating whether enable is enabled or active in `GameSettingData`. |
| **`isEnable`** | `boolean): void` | Boolean flag indicating whether enable is enabled or active in `GameSettingData`. |

---

## 2. State Mutation Guardrails

All state fields in `GameSettingData` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
