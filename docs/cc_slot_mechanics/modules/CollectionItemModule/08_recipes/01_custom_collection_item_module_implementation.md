---
id: "cc_slot_mechanics:CollectionItemModule:recipes:custom_implementation"
title: "Recipe: Custom CollectionItemModule Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["CollectionItemModule", "collection_item_module", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom CollectionItemModule Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom CollectionItemModule Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom CollectionItemModule Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { CollectionItemModule } from 'assets/cc-common/cc-slot-mechanics/CollectionItem/scripts/CollectionItemModule';

@ccclass
export default class CustomCollectionItemModule extends CollectionItemModule {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
