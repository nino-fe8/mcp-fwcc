---
id: "cc_slot_module:PaylineWinFrameModule:inheritance:game_creation_workflow"
title: "PaylineWinFrameModule Game Creation Workflow"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "inheritance", "workflow"]
---

# 📋 PaylineWinFrameModule Game Creation Workflow

<!-- convention-summary-start -->
### PaylineWinFrameModule Game Creation Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineWinFrameModule Game Creation Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Checklist for New Slot Games

1. Create a child node `WinFramesLayer` under `Payline`.
2. Attach `PaylineWinFrameModule`.
3. In Inspector, assign `container` to the desired frame rendering node.
4. Assign `template` to your game's glowing win frame prefab (containing Spine or Sprite animations).
5. Ensure the win frame prefab script handles the `PLAY_ANIMATION`, `HIDE`, and `RESET` node events.
