---
id: "cc_slot_module:WalletModule:director_writer:pipeline_orchestration"
title: "WalletModule Pipeline & Director Orchestration"
category: "cc_slot_module"
tags: ["WalletModule", "wallet_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 WalletModule Pipeline & Director Orchestration

<!-- convention-summary-start -->
### WalletModule Pipeline & Director Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WalletModule Pipeline & Director Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Event Orchestration

Listens to `GameUIEvents.WALLET` event channels:
- `PAUSE_WALLET`: Broadcast when big win or celebratory cutscenes begin.
- `RESUME_WALLET`: Broadcast when big win count-up concludes.
- `SYNC_WALLET`: Broadcast during reconnect hydration.
