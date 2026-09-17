---
id: "cc_slot_mechanics:MultiplierReelModule:recipes:custom_implementation"
title: "Recipe: Custom MultiplierReelModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MultiplierReelModule", "multiplier_reel_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MultiplierReelModule Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom MultiplierReelModule Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom MultiplierReelModule Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MultiplierReelModule } from 'assets/cc-common/cc-slot-mechanics/MultiplierReel/scripts/MultiplierReelModule';

@ccclass
export default class CustomMultiplierReelModule extends MultiplierReelModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
