---
id: "cc_slot_module:BetHistoryModule:director_writer:pipeline_orchestration"
title: "BetHistoryModule Pipeline Orchestration"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎻 BetHistoryModule Pipeline Orchestration

<!-- convention-summary-start -->
### BetHistoryModule Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryModule Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Orchestration Architecture

`BetHistoryModule` operates asynchronously outside the core spin script pipeline (`ScriptExecutor`), but interacts with the system via `GameLogicUIEvents`:
- It dispatches `INIT_BET_HISTORY`, `BET_HISTORY_NEXT_PAGE`, and `CLOSE_BET_HISTORY_PANEL` to the main logic handler.
- The logic handler queries the backend server history API, transforms response structures, and mutates properties on `BetHistoryData`.
- Reactive observers trigger atomic UI updates without coupling UI views directly to network transports.
