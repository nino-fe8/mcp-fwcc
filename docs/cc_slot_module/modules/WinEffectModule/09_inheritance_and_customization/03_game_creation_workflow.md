---
id: "cc_slot_module:WinEffectModule:inheritance:game_creation_workflow"
title: "WinEffectModule Game Creation Setup Workflow"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 WinEffectModule Game Creation Setup Workflow

<!-- convention-summary-start -->
### WinEffectModule Game Creation Setup Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinEffectModule Game Creation Setup Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Setup

1. Create `WinEffect` node under `Canvas/Director/CutsceneControl`.
2. Attach `WinEffectModule` (or game subclass).
3. Assign `titleFrame` sprite frames for Big, Mega, and Super Win titles.
4. Assign `winAmount` label, `overlayNode`, and `coinsEffect` references.
