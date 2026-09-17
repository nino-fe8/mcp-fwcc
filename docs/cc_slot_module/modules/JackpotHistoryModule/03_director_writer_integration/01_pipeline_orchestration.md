---
id: "cc_slot_module:JackpotHistoryModule:director_writer:pipeline_orchestration"
title: "JackpotHistoryModule Pipeline Orchestration"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎻 JackpotHistoryModule Pipeline Orchestration

<!-- convention-summary-start -->
### JackpotHistoryModule Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotHistoryModule Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Logic & UI Interaction

`JackpotHistoryModule` emits `INIT_JACKPOT_HISTORY`, `REQUEST_JACKPOT_NEXT_PAGE`, `REQUEST_JACKPOT_PREVIOUS_PAGE`, and `CLOSE_JACKPOT_HISTORY_PANEL` to `GameLogicUIEvents`.
