---
id: "cc_core_lib:WalletData:api:properties"
title: "WalletData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["WalletData", "wallet_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `WalletData` Detailed Properties & Schema

<!-- convention-summary-start -->
### WalletData Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WalletData Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`floatUtils`** | `any` | Collection of elements managed by `WalletData`. |
| **`wallets`** | `number[]` | Collection of elements managed by `WalletData`. |
| **`NORMAL`** | `number` | Numeric counter or index value in `WalletData`. |
| **`TRIAL`** | `number` | Numeric counter or index value in `WalletData`. |
| **`PROMOTE`** | `number` | Numeric counter or index value in `WalletData`. |

---

## 2. State Mutation Guardrails

All state fields in `WalletData` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
