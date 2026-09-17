---
id: "cc_slot_module:PoolFactoryModule:game_flow:timing_execution_matrix"
title: "PoolFactoryModule Timing & Execution Matrix"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ PoolFactoryModule Timing & Execution Matrix

<!-- convention-summary-start -->
### PoolFactoryModule Timing & Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for PoolFactoryModule Timing & Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Execution Matrix

| Phase / Trigger | Caller | Method | State Mutation | Failure Impact |
| :--- | :--- | :--- | :--- | :--- |
| **Scene Bootstrap** | Cocos Engine | `onLoad()` | Initializes `_pool`, pre-warms `initCount` nodes | Pool uninitialized, subsequent `getObject()` errors |
| **VFX Trigger** | WinEffect / Table | `getObject()` | Appends node to `_usedObjects`, reduces pool size | If template null, returns null / crash |
| **VFX Complete** | Tween onComplete | `returnObject(obj)` | Splices `_usedObjects`, calls `_pool.put(obj)` | Node left orphaned in scene hierarchy |
| **FTR / Round Reset** | GameDirector | `returnAllObjects()` | Iterates `_usedObjects`, recycles all active nodes | Visual artifacts remain on screen during fast play |
