---
id: "cc_slot_mechanics:TableGigabloxData:recipes:custom_implementation"
title: "Recipe: Custom TableGigabloxData Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["TableGigabloxData", "table_gigablox_data", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom TableGigabloxData Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom TableGigabloxData Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom TableGigabloxData Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { TableGigabloxData } from 'assets/cc-common/cc-slot-mechanics/Gigablox/scripts/TableGigabloxData';

@ccclass
export default class CustomTableGigabloxData extends TableGigabloxData {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
