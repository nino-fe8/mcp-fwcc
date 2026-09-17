---
id: "cc_slot_module:SlotBaseModule:game_flow:spin_phase_breakdown"
title: "SlotBaseModule Spin Phase Lifecycle"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 SlotBaseModule Spin Phase Lifecycle

<!-- convention-summary-start -->
### SlotBaseModule Spin Phase Lifecycle Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SlotBaseModule Spin Phase Lifecycle.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Spin Flow Coordination

| Phase | SlotBaseModule Mechanism |
| :--- | :--- |
| **Engine Boot (`onLoad`)** | DI container injects singletons; invokes `onLoadExtend()`. |
| **Mode Registration (`setupModule`)** | Director passes `moduleEvent` and `gameMode`. |
| **Spin Start (`RESET_ALL_EFFECT_AND_TASKS`)** | Automatically receives reset trigger from `gameLogic` and clears effects. |
| **Destruction (`onDestroy`)** | Subclasses must call `observer.releaseAll()` and `eventManager.targetOff(this)`. |
