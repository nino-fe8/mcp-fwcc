---
id: "cc_slot_module:IconPromotion:recipes:custom_promotion_hud_badge_setup"
title: "Recipe: Setting Up Marketing Promotion Badges"
category: "cc_slot_module"
tags: ["IconPromotion", "icon_promotion", "cc_slot_module", "recipes", "setup"]
---

# 💡 Recipe: Setting Up Marketing Promotion Badges

<!-- convention-summary-start -->
### Recipe: Setting Up Marketing Promotion Badges Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Setting Up Marketing Promotion Badges.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Setup

1. Create a node under `Canvas/Director/UIManager/Promotion`.
2. Attach `IconPromotion` component.
3. Attach `cc.Sprite` with marketing banner texture.
4. Mount child node `PromotionSpinTimes` with `SlotPromotionSpinTimes` component.
