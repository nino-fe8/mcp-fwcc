---
id: "cc_slot_module:CutsceneController:inheritance:game_creation_workflow"
title: "CutsceneController Game Creation Setup Workflow"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 CutsceneController Game Creation Setup Workflow

<!-- convention-summary-start -->
### CutsceneController Game Creation Setup Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CutsceneController Game Creation Setup Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Setup

1. Verify `CutsceneControl` node exists under `Canvas/Director`.
2. Attach `CutsceneController`.
3. Add child modal nodes (`WinEffect`, `IntroFreeGame`, `JackpotWin`, `TotalWin`).
4. In `WriterModule`, insert `PLAY_CUTSCENE` commands at key celebration moments.
