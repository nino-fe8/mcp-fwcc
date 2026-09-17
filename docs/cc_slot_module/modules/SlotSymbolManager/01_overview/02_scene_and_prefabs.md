---
id: "cc_slot_module:SlotSymbolManager:overview:scene_and_prefabs"
title: "SlotSymbolManager Scene Node Placement & Pool Structure"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "symbol_manager", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ SlotSymbolManager Scene Node Placement & Pool Structure

<!-- convention-summary-start -->
### SlotSymbolManager Scene Node Placement & Pool Structure Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolManager Scene Node Placement & Pool Structure.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Node Placement (Cocos Creator 2.4 Production Tree)

Inspected live from production scenes (`g9000L` / `g9666L`), `SlotSymbolManager` instances are mounted at 3 strategic locations for isolated pooling:

```text
Canvas/Director/GameMode/MainGamePrefab
├── SlotTableModule
│   └── SymbolPool [Node] (Component: SlotSymbolManager - Main reel symbol pool)
├── SlotTablePaylineModule
│   └── SymbolPool [Node] (Component: SlotSymbolManager - Payline win symbol animation pool)
└── SymbolManger [Node] (Component: SlotSymbolManager - Backup/Feature symbol manager)
```

---

## 2. Dual Pool Architecture

- **`SlotTableModule/SymbolPool`**: Pre-allocates and recycles symbols for normal column spinning in `SlotReelModule`.
- **`SlotTablePaylineModule/SymbolPool`**: Dedicated node pool for win animation overlays, completely avoiding pool exhaustion during turbo spins.
