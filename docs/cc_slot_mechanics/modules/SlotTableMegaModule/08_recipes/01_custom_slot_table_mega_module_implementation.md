---
id: "cc_slot_mechanics:SlotTableMegaModule:recipes:custom_implementation"
title: "Recipe: Custom SlotTableMegaModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["SlotTableMegaModule", "slot_table_mega_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom SlotTableMegaModule Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom SlotTableMegaModule Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom SlotTableMegaModule Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { SlotTableMegaModule } from 'assets/cc-common/cc-slot-mechanics/MegaReel/scripts/SlotTableMegaModule';

@ccclass
export default class CustomSlotTableMegaModule extends SlotTableMegaModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
