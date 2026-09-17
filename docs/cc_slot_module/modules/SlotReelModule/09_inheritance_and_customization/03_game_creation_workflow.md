---
id: "cc_slot_module:SlotReelModule:customization:game_creation_workflow"
title: "SlotReelModule Game Creation Workflow Checklist"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "customization", "game_creation", "workflow"]
---

# 🚀 SlotReelModule Game Creation Workflow Checklist

<!-- convention-summary-start -->
### SlotReelModule Game Creation Workflow Checklist Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotReelModule Game Creation Workflow Checklist.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Integration Checklist

1. **Reel Prefab Setup**: Wire `SlotReelModule` onto the column prefab under `Table/ReelContainer`.
2. **Buffer Dimensions**: Verify `BUFFER_TOP >= 2` and `BUFFER_BOT >= 2` in `TableModuleConfig`.
3. **Symbol Manager Linkage**: Ensure `SlotTableModule` injects `SlotSymbolManager` via `initReel({ pool })`.
4. **Coordinate Math**: Check cell width and height match art assets exactly.
5. **QA Spin Testing**: Verify continuous roll, Turbo skip, and FTR bounce-stops in browser and mobile emulator.
