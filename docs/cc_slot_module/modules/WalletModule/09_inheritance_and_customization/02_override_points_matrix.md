---
id: "cc_slot_module:WalletModule:inheritance:override_points_matrix"
title: "WalletModule Override Points Matrix"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 WalletModule Override Points Matrix

<!-- convention-summary-start -->
### WalletModule Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WalletModule Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Matrix

| Method | Scope | Super Required | Purpose |
| :--- | :--- | :--- | :--- |
| `start` | `public` | Recommended | Model resolution. |
| `setupObserver` | `public` | Optional | Custom balance stream subscriptions. |
| `pauseWallet` / `resumeWallet` | `public` | Recommended | Balance rolling state management. |
| `onSwitchMode` | `public` | Recommended | Currency switch event routing. |
