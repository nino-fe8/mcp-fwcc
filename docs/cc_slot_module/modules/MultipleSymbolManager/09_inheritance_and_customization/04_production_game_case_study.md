---
id: "cc_slot_module:MultipleSymbolManager:customization:production_game_case_study"
title: "Production Case Study: Red Cliff MultipleSymbolManager9666"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "customization", "case_study", "red_cliff"]
---

# 🎮 Production Case Study: Red Cliff `MultipleSymbolManager9666`

<!-- convention-summary-start -->
### Production Case Study: Red Cliff MultipleSymbolManager9666 Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Production Case Study: Red Cliff MultipleSymbolManager9666.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Context & Setup
In Red Cliff (`g9666L`), `MultipleSymbolManager` handles distinct prefabs for normal symbols, 3-row stacked Guan Yu Wilds, and Free Spin Dragon Scatters.

---

## 2. Production Integration Excerpt

```typescript
// Configured in Scene:
// SymbolPool node has MultipleSymbolManager component
// template = SymbolStandard.prefab
// specialSymbolTemplates[0] = { symbolCode: "WILD", template: WildSpinePrefab, initCount: 5 }
// specialSymbolTemplates[1] = { symbolCode: "SCATTER", template: ScatterSpinePrefab, initCount: 5 }
```
