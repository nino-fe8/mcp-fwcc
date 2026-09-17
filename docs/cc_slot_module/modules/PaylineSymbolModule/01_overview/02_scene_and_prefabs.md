---
id: "cc_slot_module:PaylineSymbolModule:overview:scene_and_prefabs"
title: "PaylineSymbolModule Scene Graph Placement & SymbolPool"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ PaylineSymbolModule Scene Graph Placement & SymbolPool

<!-- convention-summary-start -->
### PaylineSymbolModule Scene Graph Placement & SymbolPool Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule Scene Graph Placement & SymbolPool.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `PaylineSymbolModule` is attached to a dedicated child node under `SlotTablePaylineModule`:

```text
MainGamePrefab
└── SlotTablePaylineModule (SlotTablePaylineModule, PaylineConfig, SlotTablePaylineData)
    ├── PaylineSymbolModule [Node with PaylineSymbolModule Component]
    │   └── container (Top-level Node outside of reel mask)
    └── SymbolPool [Node with SlotSymbolManager Component]
```

---

## 2. Component Wiring

- **`factory`**: Wired in Inspector to sibling `SymbolPool` node's `SlotSymbolManager`.
- **`container`**: Wired to the top-level overlay Node above all reel columns.
- **`disableHighlightContainer`**: Optional background node for darkened/dimmed symbols.
