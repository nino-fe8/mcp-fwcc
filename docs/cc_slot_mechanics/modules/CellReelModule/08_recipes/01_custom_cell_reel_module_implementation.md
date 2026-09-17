---
id: "cc_slot_mechanics:CellReelModule:recipes:custom_implementation"
title: "Recipe: Custom CellReelModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["CellReelModule", "cell_reel_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom CellReelModule Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom CellReelModule Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom CellReelModule Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { CellReelModule } from 'assets/cc-common/cc-slot-mechanics/SlotCellTable/scripts/CellReelModule';

@ccclass
export default class CustomCellReelModule extends CellReelModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
