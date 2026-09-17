---
id: "cc_slot_mechanics:SlotTableMegaModule:recipes:practical"
title: "Recipe: Integrating SlotTableMegaModule in Slot Games"
category: "cc_slot_mechanics"
tags: ["SlotTableMegaModule", "slot_table_mega_module", "cc_slot_mechanics", "recipes", "integration"]
---

# 💡 Recipe: Practical `SlotTableMegaModule` Integration

<!-- convention-summary-start -->
### Recipe: Integrating SlotTableMegaModule in Slot Games Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Integrating SlotTableMegaModule in Slot Games.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Reference Game Implementation (e.g. Red Cliff 9666)

In production slot titles like **Red Cliff (g9666)**, `SlotTableMegaModule` is instantiated inside `MainGamePrefab` / `FreeGamePrefab`:

```typescript
import { SlotTableMegaModule } from "cc-slot-mechanics";

// Accessing component from scene graph
const mechanic = this.getComponent(SlotTableMegaModule);
if (mechanic) {
    mechanic.reset();
}
```
