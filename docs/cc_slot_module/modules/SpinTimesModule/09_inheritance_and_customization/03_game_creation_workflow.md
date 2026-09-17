---
id: "cc_slot_module:SpinTimesModule:inheritance:game_creation_workflow"
title: "SpinTimesModule Game Creation Setup Workflow"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 SpinTimesModule Game Creation Setup Workflow

<!-- convention-summary-start -->
### SpinTimesModule Game Creation Setup Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SpinTimesModule Game Creation Setup Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Setup

1. Create a child badge node attached to `NormalSpinButton` and `FreeSpinButton`.
2. Attach `SpinTimesModule` to each badge node.
3. Configure `gameMode`: `NORMAL_GAME` for normal spin auto-counter, `FREE_GAME` for free spins.
4. Assign `spinTimesLabel` in Inspector.
