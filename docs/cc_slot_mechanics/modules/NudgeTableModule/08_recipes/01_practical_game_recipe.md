---
id: "cc_slot_mechanics:NudgeTableModule:recipes:practical"
title: "Recipe: Integrating NudgeTableModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["NudgeTableModule", "nudge_table_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `NudgeTableModule` Integration

<!-- convention-summary-start -->
### Recipe: Integrating NudgeTableModule in Slot Games Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Integrating NudgeTableModule in Slot Games.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `NudgeTableModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { NudgeTableModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(NudgeTableModule);
if (mechanic) {
    mechanic.reset();
}
```
