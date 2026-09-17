---
id: "cc_slot_module:SlotSymbolResourceManager:properties:runtime_state_variables"
title: "SlotSymbolResourceManager Runtime Asset Dictionaries"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "properties", "runtime_state", "dictionaries"]
---

# 📊 SlotSymbolResourceManager Runtime Asset Dictionaries

<!-- convention-summary-start -->
### SlotSymbolResourceManager Runtime Asset Dictionaries Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolResourceManager Runtime Asset Dictionaries.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Internal Fast-Lookup Dictionaries

| Dictionary Name | Key Type | Value Type | Populated In | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `staticFrameAssets` | `string` (`symbolCode`) | `cc.SpriteFrame` | `initAssets()` | $O(1)$ fast lookup for static textures. |
| `blurFrameAssets` | `string` (`symbolCode`) | `cc.SpriteFrame` | `initAssets()` | $O(1)$ fast lookup for motion-blur textures. |
| `backgroundFrameAssets`| `string` (`symbolCode`) | `cc.SpriteFrame` | `initAssets()` | $O(1)$ fast lookup for card backgrounds. |
| `skeletonAssets` | `string` (`symbolCode`) | `sp.SkeletonData` | `initAssets()` | $O(1)$ fast lookup for Spine skeletons. |
