---
id: "cc_slot_mechanics:GigabloxReelModule:recipes:custom_implementation"
title: "Recipe: Custom GigabloxReelModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["GigabloxReelModule", "gigablox_reel_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom GigabloxReelModule Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom GigabloxReelModule Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom GigabloxReelModule Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { GigabloxReelModule } from 'assets/cc-common/cc-slot-mechanics/Gigablox/scripts/GigabloxReelModule';

@ccclass
export default class CustomGigabloxReelModule extends GigabloxReelModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
