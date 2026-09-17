---
id: "cc_slot_module:SlotObjectPool:game_flow:timing_execution_matrix"
title: "SlotObjectPool Timing & Execution Matrix"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ SlotObjectPool Timing & Execution Matrix

<!-- convention-summary-start -->
### SlotObjectPool Timing & Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SlotObjectPool Timing & Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Execution Matrix

| Trigger | Caller | Method | State Mutation | Failure Impact |
| :--- | :--- | :--- | :--- | :--- |
| **onLoad** | Cocos Engine | `onLoad()` | Pre-populates pool with `initCount` nodes | Pool empty, runtime allocations on first spin |
| **Win Highlight** | PaylineSymbolModule | `get()` | Appends to `usingObjects`, sets parent & active | If prefab invalid, logs error & returns null |
| **Hide Highlight** | PaylineSymbolModule | `put(node)` | Removes from `usingObjects`, sets active=false | Un-recycled node stays visible |
| **FTR / Round Reset** | GameDirector | `clear()` | Recycles all `usingObjects` back into pool | Stale frames remain visible on reels |
