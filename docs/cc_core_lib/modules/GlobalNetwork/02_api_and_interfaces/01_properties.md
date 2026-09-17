---
id: "cc_core_lib:GlobalNetwork:api:properties"
title: "GlobalNetwork Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["GlobalNetwork", "global_network", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `GlobalNetwork` Detailed Properties & Schema

<!-- convention-summary-start -->
### GlobalNetwork Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GlobalNetwork Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`gamesData`** | `object` | Operational field tracking state in `GlobalNetwork`. |
| **`token`** | `any` | Authenticated session JWT or bearer token used for backend REST API requests. |
| **`refreshToken`** | `any` | Operational field tracking state in `GlobalNetwork`. |
| **`socket`** | `any` | Operational field tracking state in `GlobalNetwork`. |
| **`expectedEvent`** | `string` | Operational field tracking state in `GlobalNetwork`. |
| **`expectedCommandId`** | `string` | Operational field tracking state in `GlobalNetwork`. |
| **`network`** | `any): void` | Operational field tracking state in `GlobalNetwork`. |
| **`init`** | `(token: any, refreshToken?: string, envId?: string, gameIdSocket?: string) => void` | Operational field tracking state in `GlobalNetwork`. |
| **`getToken`** | `() => any` | Operational field tracking state in `GlobalNetwork`. |
| **`setToken`** | `(token: any) => void` | Operational field tracking state in `GlobalNetwork`. |
| **`registerGame`** | `(gameData: any) => any` | Operational field tracking state in `GlobalNetwork`. |
| **`initGame`** | `(gameData?: any) => any` | Operational field tracking state in `GlobalNetwork`. |
| **`triggerUserLogout`** | `() => void` | Operational field tracking state in `GlobalNetwork`. |
| **`outGame`** | `() => void` | Operational field tracking state in `GlobalNetwork`. |

---

## 2. State Mutation Guardrails

All state fields in `GlobalNetwork` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
