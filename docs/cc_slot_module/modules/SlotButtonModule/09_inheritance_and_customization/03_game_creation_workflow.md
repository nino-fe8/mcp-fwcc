---
id: "cc_slot_module:SlotButtonModule:inheritance:game_creation_workflow"
title: "SlotButtonModule Game Creation Setup Workflow"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 SlotButtonModule Game Creation Setup Workflow

<!-- convention-summary-start -->
### SlotButtonModule Game Creation Setup Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonModule Game Creation Setup Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Setup

1. Create a button container node under `Canvas/Director/UIManager/NormalSpinButton`.
2. Attach `SlotButtonNormal`.
3. Set `gameMode = GAME_MODE_ENUM.NORMAL_GAME`.
4. Drag touch target node into `spinButtonTouch` and display animation node into `display`.
