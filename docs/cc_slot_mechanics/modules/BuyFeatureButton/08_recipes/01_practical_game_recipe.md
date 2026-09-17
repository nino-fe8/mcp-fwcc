---
id: "cc_slot_mechanics:BuyFeatureButton:recipes:practical"
title: "Recipe: Integrating BuyFeatureButton in Slot Games"
category: "cc_slot_mechanics"
tags: ["BuyFeatureButton", "buy_feature_button", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `BuyFeatureButton` Integration

<!-- convention-summary-start -->
### Recipe: Integrating BuyFeatureButton in Slot Games Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Integrating BuyFeatureButton in Slot Games.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `BuyFeatureButton` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { BuyFeatureButton } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(BuyFeatureButton);
if (mechanic) {
    mechanic.reset();
}
```
