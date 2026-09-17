---
id: "cc_slot_mechanics:HorizontalCascadeModuleConfig:recipes:custom_implementation"
title: "Recipe: Custom HorizontalCascadeModuleConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModuleConfig", "horizontal_cascade_module_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom HorizontalCascadeModuleConfig Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom HorizontalCascadeModuleConfig Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom HorizontalCascadeModuleConfig Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { HorizontalCascadeModuleConfig } from 'assets/cc-common/cc-slot-mechanics/HorizontalCascade/scripts/HorizontalCascadeModuleConfig';

@ccclass
export default class CustomHorizontalCascadeModuleConfig extends HorizontalCascadeModuleConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
