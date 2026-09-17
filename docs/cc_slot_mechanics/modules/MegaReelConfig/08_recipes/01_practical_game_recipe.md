---
id: "cc_slot_mechanics:MegaReelConfig:recipes:practical"
title: "Recipe: Integrating MegaReelConfig in Slot Games"
category: "cc_slot_mechanics"
tags: ["MegaReelConfig", "mega_reel_config", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `MegaReelConfig` Integration

<!-- convention-summary-start -->
### Recipe: Integrating MegaReelConfig in Slot Games Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Integrating MegaReelConfig in Slot Games.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `MegaReelConfig` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { MegaReelConfig } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(MegaReelConfig);
if (mechanic) {
    mechanic.reset();
}
```
