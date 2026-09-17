---
id: "cc_slot_module:WalletModule:properties_and_state:inspector_properties"
title: "WalletModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ WalletModule Inspector Properties Specification

<!-- convention-summary-start -->
### WalletModule Inspector Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WalletModule Inspector Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `realWallet` | `cc.Node` | `null` | Real money balance display node. |
| `trialWallet` | `cc.Node` | `null` | Demo trial credit display node. |
