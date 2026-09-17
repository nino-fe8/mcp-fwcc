---
id: "cc_slot_module:FreeOptionDirectorModule:customization:override_points_matrix"
title: "FreeOptionDirectorModule Extension Points Matrix"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 FreeOptionDirectorModule Extension Points Matrix

<!-- convention-summary-start -->
### FreeOptionDirectorModule Extension Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeOptionDirectorModule Extension Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Extension Points Matrix

| Method Name | Default Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`enter()`** | Resets timer & enables buttons | `YES` | `MANDATORY` | Trigger option card entrance animations. |
| **`optionClick(ev, optionId)`** | Disables buttons & dispatches request | `YES` | `RECOMMENDED` | Play selection particle effects or sound stings. |
| **`_runAutoTrigger()`** | Selects random option | `YES` | Optional | Custom fallback policy (e.g. always pick default option 1). |
| **`localizeText()`** | Fetches `FREE_OPTION_GAME_REMIND` | `YES` | Optional | Custom multi-lingual layout. |
