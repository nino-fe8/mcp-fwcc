---
id: "cc_slot_module:BetSelectionPanel:events:global_event_bus"
title: "BetSelectionPanel Global Event Bus"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "events", "global"]
---

# 🌐 BetSelectionPanel Global Event Bus

<!-- convention-summary-start -->
### BetSelectionPanel Global Event Bus Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetSelectionPanel Global Event Bus.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Events Emitted

| Event | Payload | Purpose |
| :--- | :--- | :--- |
| `UPDATE_BET_ID` | `fullBetId: string` | Commits selected bet to GameLogic. |
| `CLOSE_BET_SELECTION_PANEL`| None | Notifies manager of modal closure. |
