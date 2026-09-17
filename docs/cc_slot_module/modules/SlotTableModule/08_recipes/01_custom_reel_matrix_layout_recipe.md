---
id: "cc_slot_module:SlotTableModule:recipe:custom_reel_matrix_layout"
title: "Recipe: Custom Irregular Reel Matrix Layout"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "recipe", "irregular_reels"]
---

# 🍳 Recipe: Custom Irregular Reel Matrix Layout

<!-- convention-summary-start -->
### Recipe: Custom Irregular Reel Matrix Layout Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Custom Irregular Reel Matrix Layout.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Problem Statement
You need to support variable column spacing where the middle reel has a wider decorative frame (e.g. 150px vs 130px).

---

## 2. Step-by-Step Implementation

### Step 1: Subclass `SlotTableModule`
```typescript
@ccclass
export class CustomSlotTableModule extends SlotTableModule {
    @property([cc.Float])
    columnOffsets: number[] = [-280, -140, 0, 140, 280];

    override createReelNode(col: number): cc.Node {
        const node = cc.instantiate(this.reelPrefab);
        node.name = `Reel_${col}`;
        node.setPosition(this.columnOffsets[col], 0);
        node.setParent(this.table);
        return node;
    }
}
```
