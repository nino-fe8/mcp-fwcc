---
id: "cc_slot_module:SlotTableNearWinModule:inheritance:game_creation_workflow"
title: "SlotTableNearWinModule Game Creation Workflow"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "inheritance", "workflow"]
---

# 📋 SlotTableNearWinModule Game Creation Workflow

<!-- convention-summary-start -->
### SlotTableNearWinModule Game Creation Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule Game Creation Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Integration Checklist

1. **Hierarchy Placement**: Ensure `SlotTableNearWinModule` is attached to the `Table` node containing `SlotTableModule` and `TableModuleConfig`.
2. **Overlay Node Assignment**: Create an overlay node `NearWinOverlay` as a sibling or child of `Table`, attach a `sp.Skeleton` or `cc.Animation`, and drag it into `nearWinEffect`.
3. **Trigger Thresholds**: Adjust `startAtScatterCount` (default: 2) and `stopAtScatterCount` (default: 5) to match the game's GDD rules.
4. **Sound Mapping**: Confirm that `soundNearWinId` (default: `"NEAR_WIN"`) is defined in `SlotSoundPlayerModule` sound mapping table.
5. **Turbo & FTR Verification**: Verify in test mode that anticipation effects are cleanly bypassed when Turbo is active or Fast Stop is pressed.
