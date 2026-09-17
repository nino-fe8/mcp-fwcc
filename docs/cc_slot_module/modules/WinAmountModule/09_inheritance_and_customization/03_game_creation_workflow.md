---
id: "cc_slot_module:WinAmountModule:inheritance:game_creation_workflow"
title: "WinAmountModule Game Creation Setup Workflow"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 WinAmountModule Game Creation Setup Workflow

<!-- convention-summary-start -->
### WinAmountModule Game Creation Setup Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountModule Game Creation Setup Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Setup

1. Create a node under `Canvas/Director/UIManager/WinAmount`.
2. Attach `WinAmountModule`.
3. Add child node with `cc.Label` component for `labelWinAmount`.
4. Optionally add child node with `sp.Skeleton` for `winFrameEffect`.
5. Bind references in Inspector.
