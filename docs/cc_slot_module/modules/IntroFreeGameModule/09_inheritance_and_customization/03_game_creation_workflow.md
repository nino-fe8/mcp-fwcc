---
id: "cc_slot_module:IntroFreeGameModule:inheritance:game_creation_workflow"
title: "IntroFreeGameModule Game Creation Setup Workflow"
category: "cc_slot_module"
tags: ["IntroFreeGameModule", "intro_free_game_module", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 IntroFreeGameModule Game Creation Setup Workflow

<!-- convention-summary-start -->
### IntroFreeGameModule Game Creation Setup Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroFreeGameModule Game Creation Setup Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Setup Steps

1. Create `IntroFreeGame` under `Canvas/Director/CutsceneControl`.
2. Attach `IntroFreeGameModule`.
3. Set `cutsceneType = CUTSCENE_TYPE_ENUM.INTRO_FREE_GAME`.
4. Configure `timeShow = 2.0` in Inspector.
