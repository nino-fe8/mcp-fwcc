---
id: "cc_slot_module:ExtraBetModule:overview:scene_and_prefabs"
title: "ExtraBetModule Scene Node Hierarchy"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ ExtraBetModule Scene Node Hierarchy

<!-- convention-summary-start -->
### ExtraBetModule Scene Node Hierarchy Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule Scene Node Hierarchy.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Canonical Placement

Mounted at `Canvas/Director/UIManager/ExtraBet`:

```text
Canvas/Director/UIManager/ExtraBet [Component: ExtraBetModule]
├── BtnDecreaseExtraBet [cc.Button]
├── BtnIncreaseExtraBet [cc.Button]
└── ExtraBetLabel [cc.Label]
```
