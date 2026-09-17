---
id: "cc_slot_mechanics:HorizontalCascadeModule:recipes:practical"
title: "Recipe: Integrating HorizontalCascadeModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModule", "horizontal_cascade_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `HorizontalCascadeModule` Integration

<!-- convention-summary-start -->
### Recipe: Integrating HorizontalCascadeModule in Slot Games Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Integrating HorizontalCascadeModule in Slot Games.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `HorizontalCascadeModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { HorizontalCascadeModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(HorizontalCascadeModule);
if (mechanic) {
    mechanic.reset();
}
```
