---
id: "cc_slot_module:SlotButtonModule:recipes:spine_state_machine_customization"
title: "Recipe: Setting Up Spine Skeleton Spin Button Animations"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonSpine", "cc_slot_module", "recipes", "spine", "animation"]
---

# 💡 Recipe: Setting Up Spine Skeleton Spin Button Animations

<!-- convention-summary-start -->
### Recipe: Setting Up Spine Skeleton Spin Button Animations Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Setting Up Spine Skeleton Spin Button Animations.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Spine Component Configuration

Attach `SlotButtonSpine` to the `display` node:

```typescript
@property(sp.Skeleton) spineBtnSpin: sp.Skeleton = null;
@property(sp.Skeleton) spineHover: sp.Skeleton = null;
```

Configure the animation clip names in the Cocos Inspector:
- `animIdle`: `"Spin"` (looping glowing button)
- `animStop`: `"Stop"` (red square / fast stop state)
- `animHover`: `"Hover"` (mouseover light aura)
- `animSpinToStop`: `"Spin_To_Stop"` (transitional animation between spin and stop)
