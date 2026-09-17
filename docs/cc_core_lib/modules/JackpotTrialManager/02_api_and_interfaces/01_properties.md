---
id: "cc_core_lib:JackpotTrialManager:api:properties"
title: "JackpotTrialManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["JackpotTrialManager", "jackpot_trial_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `JackpotTrialManager` Detailed Properties & Schema

<!-- convention-summary-start -->
### JackpotTrialManager Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotTrialManager Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`game`** | `Game)` | Operational field tracking state in `JackpotTrialManager`. |
| **`data`** | `any): void` | Operational field tracking state in `JackpotTrialManager`. |

---

## 2. State Mutation Guardrails

All state fields in `JackpotTrialManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
