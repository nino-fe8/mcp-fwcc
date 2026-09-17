---
id: "cc_slot_module:IconPromotion:gotchas:promotional_badge_occlusion"
title: "Gotcha: UI Layer Occlusion"
category: "cc_slot_module"
tags: ["IconPromotion", "icon_promotion", "cc_slot_module", "gotchas", "layering"]
---

# ⚠️ Gotcha: UI Layer Occlusion

<!-- convention-summary-start -->
### Gotcha: UI Layer Occlusion Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: UI Layer Occlusion.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

If `IconPromotion` is nested under `MainGameBoard` instead of `Canvas/Director/UIManager/Promotion`, winning payline overlays and cascade blocks visually occlude the event badge.

---

## 2. Prevention

Always mount `IconPromotion` inside the top-level `UIManager` hierarchy.
