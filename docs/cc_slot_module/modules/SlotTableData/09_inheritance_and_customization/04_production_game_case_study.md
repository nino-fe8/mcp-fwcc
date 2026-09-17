---
id: "cc_slot_module:SlotTableData:customization:production_game_case_study"
title: "Production Case Study: Red Cliff SlotTableData"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "customization", "case_study", "red_cliff"]
---

# 🎮 Production Case Study: Red Cliff `SlotTableData`

<!-- convention-summary-start -->
### Production Case Study: Red Cliff SlotTableData Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Production Case Study: Red Cliff SlotTableData.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Context
Red Cliff (`g9666L`) utilizes standard 5x3 table geometry. `SlotTableData` directly binds with `TableModuleConfig` and parses 15-symbol matrices across both normal spins and free spin multiplier rounds.

---

## 2. Production Integration Excerpt

```typescript
// Standard instantiation in Red Cliff Table prefab:
// Mounted on: Canvas/Director/GameMode/NormalGame/BoardG/Table
// Components:
// 1. SlotTableModule9666
// 2. SlotTableData
// 3. TableModuleConfig
// 4. SlotSymbolManager
```
