---
id: "cc_slot_mechanics:MultiplierReel:recipes:custom_implementation"
title: "Recipe: Custom MultiplierReel Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MultiplierReel", "multiplier_reel", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MultiplierReel Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom MultiplierReel Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom MultiplierReel Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MultiplierReel } from 'assets/cc-common/cc-slot-mechanics/MultiplierReel/scripts/MultiplierReel';

@ccclass
export default class CustomMultiplierReel extends MultiplierReel {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
