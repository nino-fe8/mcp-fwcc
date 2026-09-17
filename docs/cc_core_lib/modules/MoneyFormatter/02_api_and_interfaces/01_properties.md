---
id: "cc_core_lib:MoneyFormatter:api:properties"
title: "MoneyFormatter Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["MoneyFormatter", "money_formatter", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `MoneyFormatter` Detailed Properties & Schema

<!-- convention-summary-start -->
### MoneyFormatter Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MoneyFormatter Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`currency`** | `string` | Operational field tracking state in `MoneyFormatter`. |
| **`config`** | `any` | Operational field tracking state in `MoneyFormatter`. |
| **`config`** | `any): void` | Operational field tracking state in `MoneyFormatter`. |
| **`amount`** | `number, decimalCount?: number, decimal?: string, thousands?: string): string` | Operational field tracking state in `MoneyFormatter`. |
| **`amount`** | `number, decimalCount?: number, decimal?: string, thousands?: string): string` | Operational field tracking state in `MoneyFormatter`. |
| **`num`** | `number, digits?: number): string` | Operational field tracking state in `MoneyFormatter`. |
| **`amount`** | `number, decimalCount?: number, decimal?: string, thousands?: string): string` | Operational field tracking state in `MoneyFormatter`. |
| **`amount`** | `number, decimalCount?: number, decimal?: string, thousands?: string): string` | Operational field tracking state in `MoneyFormatter`. |
| **`formatCredit`** | `(amount: number, decimalCount?: number, decimal?: string, thousands?: string) => string` | Operational field tracking state in `MoneyFormatter`. |

---

## 2. State Mutation Guardrails

All state fields in `MoneyFormatter` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
