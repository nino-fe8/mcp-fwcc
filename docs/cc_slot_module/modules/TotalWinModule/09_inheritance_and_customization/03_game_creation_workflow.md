---
id: "cc_slot_module:TotalWinModule:inheritance:game_creation_workflow"
title: "TotalWinModule Game Creation Setup Workflow"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 TotalWinModule Game Creation Setup Workflow

<!-- convention-summary-start -->
### TotalWinModule Game Creation Setup Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TotalWinModule Game Creation Setup Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Setup

1. Add `TotalWin` node under `Canvas/Director/CutsceneControl`.
2. Attach `TotalWinModule`.
3. Set `cutsceneType = CUTSCENE_TYPE_ENUM.TOTAL_WIN`.
4. Wire `winAmount` label and `coinsEffect` particle node references.
