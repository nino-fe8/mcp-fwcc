---
id: "cc_slot_module:WalletModule:recipes:custom_dual_currency_hud_setup"
title: "Recipe: Configuring Dual Real/Demo Balance Displays with MoneyTween"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "recipes", "dual_currency"]
---

# 💡 Recipe: Configuring Dual Real/Demo Balance Displays with MoneyTween

<!-- convention-summary-start -->
### Recipe: Configuring Dual Real/Demo Balance Displays with MoneyTween Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Configuring Dual Real/Demo Balance Displays with MoneyTween.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Scene Assembly & Scripting

1. Attach `WalletModule` to `Canvas/Director/UIManager/Wallet`.
2. Attach a child script to `realWallet` and `trialWallet` listening to `ON_UPDATE_VALUE`, `PAUSE_WALLET`, and `RESUME_WALLET`.
3. Use `eno.MoneyTween.runNumber(label.node, 0.5, targetValue)` to count up balances smoothly.
