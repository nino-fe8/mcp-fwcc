---
id: "cc_slot_module:GameDataStore:game_flow:timing_execution_matrix"
title: "GameDataStore Execution Performance & Timings Matrix"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ GameDataStore Execution Performance & Timings Matrix

<!-- convention-summary-start -->
### GameDataStore Execution Performance & Timings Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for GameDataStore Execution Performance & Timings Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Timing Benchmarks

| Method Name | Operation Performed | Benchmark | Synchronicity |
| :--- | :--- | :--- | :--- |
| **`parseDataPS(data)`** | Ingests payload and outputs warning log | < 0.05ms | Synchronous |
| **`mapNewKeys(ps, map)`**| In-place key renaming | < 0.02ms for 20 keys | Synchronous |
| **`updateDataModules()`** | Deep-clones objects and updates 10+ modules | < 0.15ms | Synchronous |
| **`getWinLevel(win)`** | Accurate floating division & threshold search | < 0.01ms | Synchronous |
| **`getJackpotInfo()`** | String parsing of jackpot array tokens | < 0.02ms | Synchronous |
