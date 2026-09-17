---
id: "cc_slot_module:SlotTableModule:customization:override_points_matrix"
title: "SlotTableModule Extension Points Matrix"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 SlotTableModule Extension Points Matrix

<!-- convention-summary-start -->
### SlotTableModule Extension Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule Extension Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Extension Points Matrix

| Method Name | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`onReelStopExtend(idx)`** | Virtual hook | `YES` | None (Virtual) | Trigger column landing particles, Mascot reactions, or camera punches. |
| **`onReelPreStopExtend(idx)`**| Virtual hook | `YES` | None (Virtual) | Play anticipation anticipation SFX pitch increments. |
| **`onChangeStateExtend(s)`** | Virtual hook | `YES` | None (Virtual) | Update UI spin buttons or Turbo HUD indicators. |
| **`mapResumeMatrix()`** | Virtual hook | `YES` | None (Virtual) | Remap symbol codes after Megaways / Transformation rounds. |
| **`createReelNode(col)`** | Instantiates `reelPrefab` | `YES` | None | Customize column node parenting, positioning, or masking. |
