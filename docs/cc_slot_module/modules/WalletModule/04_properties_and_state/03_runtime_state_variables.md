---
id: "cc_slot_module:WalletModule:properties_and_state:runtime_state_variables"
title: "WalletModule Runtime State Variables"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 WalletModule Runtime State Variables

<!-- convention-summary-start -->
### WalletModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WalletModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Runtime State

| Variable | Type | Initial | Description |
| :--- | :--- | :--- | :--- |
| `walletModel` | `eno.WalletData` | `null` | Observed reactive wallet data model. |
| `uiManagerData`| `eno.UIManagerData`| `null`| Observed UI visibility data model. |
