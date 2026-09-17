---
id: "cc_slot_module:BetHistoryDetailPortrait:director_writer:pipeline_orchestration"
title: "BetHistoryDetailPortrait Pipeline Orchestration"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎻 BetHistoryDetailPortrait Pipeline Orchestration

<!-- convention-summary-start -->
### BetHistoryDetailPortrait Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailPortrait Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Event Routing

Emits `BET_DETAIL_RESPIN_NEXT_PAGE` and `BET_DETAIL_RESPIN_PREVIOUS_PAGE` to `GameLogicUIEvents`.
