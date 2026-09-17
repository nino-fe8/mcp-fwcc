---
id: "cc_slot_module:WalletModule:overview:lifecycle_flowchart"
title: "WalletModule Lifecycle Sequence Flowchart"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 WalletModule Lifecycle Sequence Flowchart

<!-- convention-summary-start -->
### WalletModule Lifecycle Sequence Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WalletModule Lifecycle Sequence Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Sequence Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant GL as GameLogic / Director
    participant WM as WalletModule
    participant Model as eno.WalletData
    participant ActiveWallet as realWallet / trialWallet Node

    GL->>WM: GameUIEvents.WALLET.PAUSE_WALLET
    WM->>ActiveWallet: emit("PAUSE_WALLET")
    Note over ActiveWallet: Balance rolling paused during win animation
    
    Model-->>WM: Reactive watch on wallets.NORMAL fires
    WM->>ActiveWallet: emit("ON_UPDATE_VALUE", newBalance)
    
    GL->>WM: GameUIEvents.WALLET.RESUME_WALLET
    WM->>ActiveWallet: emit("RESUME_WALLET")
    Note over ActiveWallet: Balance updates to final total
```
