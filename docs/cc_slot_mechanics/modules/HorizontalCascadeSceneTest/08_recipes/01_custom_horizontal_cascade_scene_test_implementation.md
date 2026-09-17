---
id: "cc_slot_mechanics:HorizontalCascadeSceneTest:recipes:custom_implementation"
title: "Recipe: Custom HorizontalCascadeSceneTest Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeSceneTest", "horizontal_cascade_scene_test", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom HorizontalCascadeSceneTest Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom HorizontalCascadeSceneTest Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom HorizontalCascadeSceneTest Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { HorizontalCascadeSceneTest } from 'assets/cc-common/cc-slot-mechanics/HorizontalCascade/scripts/HorizontalCascadeSceneTest';

@ccclass
export default class CustomHorizontalCascadeSceneTest extends HorizontalCascadeSceneTest {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
