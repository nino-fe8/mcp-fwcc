---
id: "cc_slot_module:BetModule:events:scoped_module_events"
title: "BetModule Scoped Events"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 BetModule Scoped Events

<!-- convention-summary-start -->
### BetModule Scoped Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule Scoped Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Local Scoped Events Emitted

| Event Name | Target Node | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| `ON_UPDATE_VALUE` | `betDenomLabel.node` | `betDenom: number` | Instructs `DenomLabel` to format and display coin denomination. |
| `ON_UPDATE_VALUE` | `totalBetLabel.node` | `totalBet: number` | Instructs `TotalBetLabel` to format and display total cash bet. |
