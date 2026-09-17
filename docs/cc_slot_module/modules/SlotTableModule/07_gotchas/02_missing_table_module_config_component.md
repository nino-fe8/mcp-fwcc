---
id: "cc_slot_module:SlotTableModule:gotcha:missing_table_module_config_component"
title: "Gotcha: Missing TableModuleConfig Component Breaks Grid Instantiation"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "gotchas", "config_missing"]
---

# ⚠️ Gotcha: Missing TableModuleConfig Component Breaks Grid Instantiation

<!-- convention-summary-start -->
### Gotcha: Missing TableModuleConfig Component Breaks Grid Instantiation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Missing TableModuleConfig Component Breaks Grid Instantiation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Defect Symptom
In Cocos Creator Editor or during gameplay launch, the table node stays completely empty. In the console, a warning appears: `Config not add to this node`, and no reels are instantiated.

---

## 2. Root Cause Analysis
In `onLoadExtend()`, `SlotTableModule` fetches `this.config = this.getComponent(TableModuleConfig)`. If `TableModuleConfig` is omitted from the inspector or placed on a parent node instead of the same node as `SlotTableModule`, `TOTAL_COLS` and `SYMBOL_WIDTH` are never initialized (`NaN`), preventing reel placement.

---

## 3. Recommended Resolution
Always ensure `TableModuleConfig` is attached directly to the same node as `SlotTableModule` (`Canvas/Director/GameMode/BoardG/Table`).
