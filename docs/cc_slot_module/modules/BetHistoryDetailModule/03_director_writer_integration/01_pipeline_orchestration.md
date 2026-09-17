---
id: "cc_slot_module:BetHistoryDetailModule:director_writer:pipeline_orchestration"
title: "BetHistoryDetailModule Pipeline Orchestration"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎻 BetHistoryDetailModule Pipeline Orchestration

<!-- convention-summary-start -->
### BetHistoryDetailModule Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Command Routing

`BetHistoryDetailModule` communicates via `GameLogicUIEvents`:
- `INIT_BET_DETAIL`: Dispatched when entering a specific round replay.
- `BET_DETAIL_NEXT_PAGE` / `BET_DETAIL_PREVIOUS_PAGE`: Traverses sequential spin step array.
- `REQUEST_BET_DETAIL_DATA_PAGE`: Direct index jumping from tab selection.
- `CLOSE_BET_HISTORY_DETAIL_PANEL`: Closes detail panel and restores session list.
