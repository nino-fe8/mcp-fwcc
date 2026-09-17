---
id: "cc_slot_module:MenuPanel:director_writer:pipeline_orchestration"
title: "MenuPanel Pipeline Orchestration"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎻 MenuPanel Pipeline Orchestration

<!-- convention-summary-start -->
### MenuPanel Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MenuPanel Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Event Orchestration

`MenuPanel` acts as a central router emitting `TOGGLE_BGM`, `TOGGLE_SFX`, `OPEN_PAY_TABLE_PANEL`, `OPEN_INFO_PANEL`, `OPEN_BET_HISTORY_PANEL`, and `CLOSE_MENU_PANEL`.
