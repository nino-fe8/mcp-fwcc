---
id: "cc_slot_mechanics:MultiplierReelConfig:recipes:custom_implementation"
title: "Recipe: Custom MultiplierReelConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MultiplierReelConfig", "multiplier_reel_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MultiplierReelConfig Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom MultiplierReelConfig Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom MultiplierReelConfig Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MultiplierReelConfig } from 'assets/cc-common/cc-slot-mechanics/MultiplierReel/scripts/MultiplierReelConfig';

@ccclass
export default class CustomMultiplierReelConfig extends MultiplierReelConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
