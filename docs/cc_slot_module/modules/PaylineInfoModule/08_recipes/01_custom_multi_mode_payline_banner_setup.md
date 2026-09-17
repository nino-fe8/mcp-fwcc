---
id: "cc_slot_module:PaylineInfoModule:recipes:custom_multi_mode_payline_banner_setup"
title: "Recipe: Setting Up Mode-Specific Payline Toast Banners"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "recipes", "multi_mode"]
---

# 💡 Recipe: Setting Up Mode-Specific Payline Toast Banners

<!-- convention-summary-start -->
### Recipe: Setting Up Mode-Specific Payline Toast Banners Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Setting Up Mode-Specific Payline Toast Banners.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Scene Structure & Inspector Configuration

1. Create `NormalPaylineInfo` node under `Canvas/Director/UIManager`.
   - Set `useAcrossAllGameModes = false`, `gameMode = NORMAL_GAME`.
2. Create `FreePaylineInfo` node under `Canvas/Director/UIManager`.
   - Set `useAcrossAllGameModes = false`, `gameMode = FREE_GAME`.
3. Drag `smallSymbolFrames` into both components.
