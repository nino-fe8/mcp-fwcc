---
id: "cc_slot_module:SlotSymbolModule:customization:override_points_matrix"
title: "SlotSymbolModule Override Points Matrix"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "customization", "override_points"]
---

# 📋 SlotSymbolModule Override Points Matrix

<!-- convention-summary-start -->
### SlotSymbolModule Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Points Summary

| Hook Method | Base Behavior | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `onLoadExtend()` | Empty virtual hook | `YES` | Optional | Cache game-specific child nodes or particles. |
| `initExtend(code, size)` | Empty virtual hook | `YES` | Optional | Configure custom visual skins or audio triggers. |
| `onDestroyExtend()` | Empty virtual hook | `YES` | Optional | Dispose custom node events or timers. |
| `playAnimation(name, loop)` | Plays Spine track | `YES` | `MANDATORY` | Inject custom sound stingers or particle VFX. |
| `resetBeforeBackToPool()` | Resets pose and nulls skeleton | `YES` | `MANDATORY` | Reset custom game modifiers. |
