---
id: "cc_slot_module:SlotSymbolResourceManager:customization:override_points_matrix"
title: "SlotSymbolResourceManager Override Points Matrix"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "customization", "override_points"]
---

# 📋 SlotSymbolResourceManager Override Points Matrix

<!-- convention-summary-start -->
### SlotSymbolResourceManager Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolResourceManager Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Points Summary

| Method Signature | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- |
| `initAssets(): void` | `YES` | Optional | Custom asset dictionary indexing. |
| `getSymbolFrame(code)` | `YES` | Optional | Atlas or CDN sprite frame resolution. |
| `getBlurSymbolFrame(code)` | `YES` | Optional | Custom blur texture overrides. |
| `getSymbolSkeleton(code)` | `YES` | Optional | Dynamic Spine SkeletonData resolution. |
| `getColorNormal()` / `getColorDim()` | `YES` | Optional | Customized RGB dimming color palettes. |
