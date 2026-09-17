---
id: "cc_slot_mechanics:MegaReelSceneTest:recipes:custom_implementation"
title: "Recipe: Custom MegaReelSceneTest Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["MegaReelSceneTest", "mega_reel_scene_test", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom MegaReelSceneTest Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom MegaReelSceneTest Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom MegaReelSceneTest Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { MegaReelSceneTest } from 'assets/cc-common/cc-slot-mechanics/MegaReel/scripts/MegaReelSceneTest';

@ccclass
export default class CustomMegaReelSceneTest extends MegaReelSceneTest {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
