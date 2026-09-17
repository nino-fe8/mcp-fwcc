---
id: "cc_slot_module:SlotSymbolResourceManager:customization:game_creation_workflow"
title: "SlotSymbolResourceManager Game Creation Workflow Checklist"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "customization", "workflow"]
---

# 🚀 SlotSymbolResourceManager Game Creation Workflow Checklist

<!-- convention-summary-start -->
### SlotSymbolResourceManager Game Creation Workflow Checklist Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolResourceManager Game Creation Workflow Checklist.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Integration Checklist

1. **Mount on SymbolPrefab**: Ensure `SlotSymbolResourceManager` is attached to the same node as `SlotSymbolModule`.
2. **Populate Sprite Frames**: Drag all symbol textures (`symbolSfList`) matching `GameConfig.RANDOM_SYMBOLS_CODE`.
3. **Populate Motion Blur Frames**: Drag blurred textures (`blurSymbolSfList`). If blurred assets are unavailable, Base class automatically falls back to static frames.
4. **Populate Spine Skeletons**: Drag `.json` / `.skel` SkeletonData assets for Wild, Scatter, and High-Pay symbols (`symbolSkeletons`).
5. **Adjust Dim Color**: Configure `colorDim` (e.g., `cc.Color(100, 100, 100, 255)`) to match game art lighting.
