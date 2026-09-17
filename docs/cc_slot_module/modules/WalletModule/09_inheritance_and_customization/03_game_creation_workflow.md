---
id: "cc_slot_module:WalletModule:inheritance:game_creation_workflow"
title: "WalletModule Game Creation Setup Workflow"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 WalletModule Game Creation Setup Workflow

<!-- convention-summary-start -->
### WalletModule Game Creation Setup Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WalletModule Game Creation Setup Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Setup

1. Create a node under `Canvas/Director/UIManager/Wallet`.
2. Attach `WalletModule`.
3. Create child nodes `RealWallet` and `TrialWallet`.
4. Link `realWallet` and `trialWallet` references in Cocos Inspector.
