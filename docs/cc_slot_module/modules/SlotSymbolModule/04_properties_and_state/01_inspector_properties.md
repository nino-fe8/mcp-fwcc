---
id: "cc_slot_module:SlotSymbolModule:properties:inspector_properties"
title: "SlotSymbolModule Inspector Properties Reference"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "properties", "inspector_properties"]
---

# 🎛️ SlotSymbolModule Inspector Properties Reference

<!-- convention-summary-start -->
### SlotSymbolModule Inspector Properties Reference Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule Inspector Properties Reference.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Cocos Inspector Serialized Fields

| Property Name | Type | Default Value | Role in Component |
| :--- | :--- | :--- | :--- |
| **`sprite`** | `cc.Sprite` | `null` | Render component for Static and Motion Blur textures. |
| **`spine`** | `sp.Skeleton` | `null` | Render component for Spine skeleton animations. |
| **`bg`** | `cc.Sprite` | `null` | Optional background frame/card sprite. |
| **`animName`** | `SymbolAnimationName` | `null` | Configures track names (`appear`, `idle`, `win`, `disappear`). |
| **`isDebug`** | `boolean` | `false` | Enables verbose console logging for missing animations or textures. |
