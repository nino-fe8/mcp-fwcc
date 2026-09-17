---
id: "cc_slot_module:SlotButtonModule:recipes:sprite_frame_switcher_customization"
title: "Recipe: Setting Up 2D SpriteFrame Spin Button States"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonSprite", "cc_slot_module", "recipes", "sprite", "texture_swap"]
---

# 💡 Recipe: Setting Up 2D SpriteFrame Spin Button States

<!-- convention-summary-start -->
### Recipe: Setting Up 2D SpriteFrame Spin Button States Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Setting Up 2D SpriteFrame Spin Button States.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. SpriteFrame Texture Setup

For lightweight mobile games without Spine licenses:
1. Attach `SlotButtonSprite` to the `display` node.
2. Assign the 7 `cc.SpriteFrame` assets in Inspector:
   - `normal`: Idle golden spin button.
   - `pressed`: Darkened / indented button state.
   - `hover`: Highlighted desktop state.
   - `disabled`: Grayscale button state.
   - `stopNormal`: Red square Stop button.
   - `stopHover`: Highlighted stop button.
   - `stopPress`: Depressed stop button.
