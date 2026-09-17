---
id: "cc_slot_module:SlotObjectPool:inheritance:game_creation_workflow"
title: "SlotObjectPool Game Creation Workflow"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "inheritance", "workflow"]
---

# 🛠️ SlotObjectPool Game Creation Workflow

<!-- convention-summary-start -->
### SlotObjectPool Game Creation Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotObjectPool Game Creation Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Workflow Steps

1. Create a node named `WinFramePool` under `Canvas/Director/GameMode/BoardG/Payline`.
2. Add the `SlotObjectPool` component.
3. Drag the `WinFramePrefab` asset to `prefabObject`.
4. Set `initCount` to match table dimensions ($col 	imes row$).
