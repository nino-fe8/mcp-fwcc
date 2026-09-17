---
id: "cc_slot_module:PaylineFactory:recipes:compound_payline_vfx_factory"
title: "Recipe: Configuring Multi-Prefab Payline Factories"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "recipes", "vfx_pooling"]
---

# 💡 Recipe: Configuring Multi-Prefab Payline Factories

<!-- convention-summary-start -->
### Recipe: Configuring Multi-Prefab Payline Factories Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Configuring Multi-Prefab Payline Factories.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Objective

Configure a single `PaylineFactory` on the scene to manage Win Frames, Multiplier Labels, and Line Sparks simultaneously.

```typescript
// Inspector poolItems setup:
// [0]: name = "WinFrame", initCount = 15
// [1]: name = "MultiplierBadge", initCount = 5
// [2]: name = "LineSparkVFX", initCount = 10

const frameNode = paylineFactory.getObject("WinFrame");
const badgeNode = paylineFactory.getObject("MultiplierBadge");

// Later on spin reset:
paylineFactory.returnObject(frameNode);
paylineFactory.returnObject(badgeNode);
```
