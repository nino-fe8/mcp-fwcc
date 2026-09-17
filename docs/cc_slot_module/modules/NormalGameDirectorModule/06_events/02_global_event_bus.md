---
id: "cc_slot_module:NormalGameDirectorModule:events:global_event_bus"
title: "NormalGameDirectorModule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 NormalGameDirectorModule Global Event Bus Integration

<!-- convention-summary-start -->
### NormalGameDirectorModule Global Event Bus Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameDirectorModule Global Event Bus Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Global Events (`this.eventManager`)

| Event Topic | Direction | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| **`GameUIEvents.GAME_MODE.JOIN_GAME_SUCCESS`** | Listens To | `data: any` | Triggers `onJoinGameSuccess()` to unlock spin button. |
| **`GameUIEvents.GAME_MODE.SWITCH_GAME_MODE`** | Emits | `mode: number` | Requests transition to Free Game or Bonus Game. |
| **`GameUIEvents.WALLET.PAUSE_WALLET`** | Emits | None | Freezes wallet during spin to prevent balance desync. |
| **`GameUIEvents.WALLET.RESUME_WALLET`** | Emits | None | Restores wallet update listeners upon round completion. |
