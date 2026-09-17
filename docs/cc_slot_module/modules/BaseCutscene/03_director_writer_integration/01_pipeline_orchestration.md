---
id: "cc_slot_module:BaseCutscene:director_writer:pipeline_orchestration"
title: "BaseCutscene Director & Script Pipeline Integration"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 BaseCutscene Director & Script Pipeline Integration

<!-- convention-summary-start -->
### BaseCutscene Director & Script Pipeline Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseCutscene Director & Script Pipeline Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. 3-Tier Pipeline Role

```text
GameModeDirectorModule / Writer (Dispatches PLAY_CUTSCENE command)
       │
       ▼
CutsceneController (Resolves target BaseCutscene instance & awaits completion)
       │
       ▼
BaseCutscene Subclass (Renders modal & calls exit() when finished)
```
