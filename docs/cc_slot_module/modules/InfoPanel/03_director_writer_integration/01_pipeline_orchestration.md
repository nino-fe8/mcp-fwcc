---
id: "cc_slot_module:InfoPanel:director_writer:pipeline_orchestration"
title: "InfoPanel Pipeline Orchestration"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎻 InfoPanel Pipeline Orchestration

<!-- convention-summary-start -->
### InfoPanel Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfoPanel Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Pipeline Integration

`InfoPanel` receives `isInfoOpen` from `UIManagerData` and dispatches `CLOSE_INFO_PANEL` when dismissed.
