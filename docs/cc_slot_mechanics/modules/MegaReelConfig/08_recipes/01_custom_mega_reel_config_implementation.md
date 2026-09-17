---
id: "cc_slot_mechanics:MegaReelConfig:recipes:custom_implementation"
title: "Recipe: Custom MegaReelConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MegaReelConfig", "mega_reel_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MegaReelConfig Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom MegaReelConfig Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom MegaReelConfig Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MegaReelConfig } from 'assets/cc-common/cc-slot-mechanics/MegaReel/scripts/MegaReelConfig';

@ccclass
export default class CustomMegaReelConfig extends MegaReelConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
