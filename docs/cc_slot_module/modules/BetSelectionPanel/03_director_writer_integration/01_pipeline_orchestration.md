---
id: "cc_slot_module:BetSelectionPanel:director_writer:pipeline_orchestration"
title: "BetSelectionPanel Pipeline Orchestration"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎻 BetSelectionPanel Pipeline Orchestration

<!-- convention-summary-start -->
### BetSelectionPanel Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetSelectionPanel Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Event Orchestration

Emits `UPDATE_BET_ID` and `CLOSE_BET_SELECTION_PANEL` to `GameLogicUIEvents`.
