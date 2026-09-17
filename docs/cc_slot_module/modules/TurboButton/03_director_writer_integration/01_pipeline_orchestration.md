---
id: "cc_slot_module:TurboButton:director_writer:pipeline_orchestration"
title: "TurboButton Pipeline & System Integration"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 TurboButton Pipeline & System Integration

<!-- convention-summary-start -->
### TurboButton Pipeline & System Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TurboButton Pipeline & System Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Event Orchestration

Listens to `GameUIEvents.TURBO.LOAD_CACHE_TURBO` on startup to rehydrate settings.
Dispatches UI interactions to `GameLogic`:
- `GameLogicUIEvents.TURBO_BUTTON_CLICK`
- `GameLogicUIEvents.TURBO_BUTTON_HOVER`
- `GameLogicUIEvents.TURBO_BUTTON_EXIT_HOVER`
- `GameLogicUIEvents.TURBO_BUTTON_PRESSED`
- `GameLogicUIEvents.TURBO_BUTTON_CANCEL`
