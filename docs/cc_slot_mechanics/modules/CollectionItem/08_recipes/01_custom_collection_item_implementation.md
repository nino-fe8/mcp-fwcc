---
id: "cc_slot_mechanics:CollectionItem:recipes:custom_implementation"
title: "Recipe: Custom CollectionItem Subclass Implementation"
category: "cc_slot_mechanics"
tags: ["CollectionItem", "collection_item", "cc_slot_mechanics", "recipes", "custom_subclass"]
---

# 💡 Recipe: Custom CollectionItem Subclass Implementation

<!-- convention-summary-start -->
### Recipe: Custom CollectionItem Subclass Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom CollectionItem Subclass Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclass Implementation Example

```typescript
const { ccclass, property } = cc._decorator;
import { CollectionItem } from 'assets/cc-common/cc-slot-mechanics/CollectionItem/scripts/CollectionItem';

@ccclass
export default class CustomCollectionItem extends CollectionItem {
    onLoadExtend(): void {
        // Custom initialization
    }
}
```
