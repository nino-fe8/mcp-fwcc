---
id: "cc_slot_mechanics:TumblingTableConfig:recipes:custom_implementation"
title: "Recipe: Custom TumblingTableConfig Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["TumblingTableConfig", "tumbling_table_config", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom TumblingTableConfig Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom TumblingTableConfig Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom TumblingTableConfig Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { TumblingTableConfig } from 'assets/cc-common/cc-slot-mechanics/TumblingReel/scripts/TumblingTableConfig';

@ccclass
export default class CustomTumblingTableConfig extends TumblingTableConfig {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
