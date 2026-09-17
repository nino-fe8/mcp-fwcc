---
id: "cc_slot_module:systems:cascade_and_avalanche_system:custom_cascade_game_creation"
title: "Step-by-Step Custom Cascading Slot Game Creation Guide"
category: "cc_slot_module"
tags: ["cc_slot_module", "systems", "cascade", "game_creation", "workflow", "tutorial"]
---

# 🚀 Step-by-Step Custom Cascading Slot Game Creation Guide

<!-- convention-summary-start -->
### Step-by-Step Custom Cascading Slot Game Creation Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Step-by-Step Custom Cascading Slot Game Creation Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_cascade_and_avalanche_system
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Setup Checklist

1. **Hierarchy Placement**:
   - Inside `MainGamePrefab`, create node `CascadeModule` under `BoardG` or alongside `SlotTableModule`.
2. **Attach Components**:
   - Add `VerticalCascadeModule`.
   - Add `CascadeModuleData`.
   - Add `CascadeModuleConfig`.
   - Add `SlotModuleEditorTag`.
3. **Configure Grid Layout**:
   - In `CascadeModuleConfig`, configure `CASCADE_TABLE_CONFIG` (`format`, `cellSize`).
4. **Symbol Manager Linkage**:
   - Wire `symbolManager` property to the table's `SlotSymbolManager` instance.
5. **Add Script Steps**:
   - Include `TABLE_START_RESPIN` and `TABLE_STOP_RESPIN` in your game's writer script pipeline.
