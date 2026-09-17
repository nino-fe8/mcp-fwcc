---
id: "cc_slot_mechanics:MultiplierReelData:recipes:custom_implementation"
title: "Recipe: Custom MultiplierReelData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MultiplierReelData", "multiplier_reel_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MultiplierReelData Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom MultiplierReelData Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom MultiplierReelData Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MultiplierReelData } from 'assets/cc-common/cc-slot-mechanics/MultiplierReel/scripts/MultiplierReelData';

@ccclass
export default class CustomMultiplierReelData extends MultiplierReelData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
