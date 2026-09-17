---
id: "cc_slot_module:TurboModeSuggestionPopup:director_writer:pipeline_orchestration"
title: "TurboModeSuggestionPopup Pipeline Orchestration"
category: "cc_slot_module"
tags: ["TurboModeSuggestionPopup", "turbomodesuggestionpopup", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎻 TurboModeSuggestionPopup Pipeline Orchestration

<!-- convention-summary-start -->
### TurboModeSuggestionPopup Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TurboModeSuggestionPopup Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Event Orchestration

Emits `CHECK_TURBO_MODE_SUGGESTION_POPUP` and `ON_ACTIVE_FROM_TURBO_INTRO` to `GameLogicUIEvents`.
