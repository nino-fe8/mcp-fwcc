---
id: "cc_slot_module:IconPromotion:overview:scene_and_prefabs"
title: "IconPromotion Scene Node Hierarchy"
category: "cc_slot_module"
tags: ["IconPromotion", "icon_promotion", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ IconPromotion Scene Node Hierarchy

<!-- convention-summary-start -->
### IconPromotion Scene Node Hierarchy Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IconPromotion Scene Node Hierarchy.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Canonical Hierarchy Placement

Mounted at `Canvas/Director/UIManager/Promotion`:

```text
Canvas/Director/UIManager/Promotion
├── IconPromotion [Component: IconPromotion, cc.Sprite]
└── PromotionSpinTimes [Component: SlotPromotionSpinTimes, cc.Label]
```
