---
id: "cc_slot_module:SlotObjectPool:recipes:dynamic_win_frame_pool"
title: "Recipe: Dynamic Win Frame Grid Highlighter"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "recipes", "win_frame"]
---

# 💡 Recipe: Dynamic Win Frame Grid Highlighter

<!-- convention-summary-start -->
### Recipe: Dynamic Win Frame Grid Highlighter Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Dynamic Win Frame Grid Highlighter.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Code Example

```typescript
import { SlotObjectPool } from 'cc-slot-module/PoolFactory/SlotObjectPool';

export class CustomPaylineHighlighter extends cc.Component {
    @property(SlotObjectPool)
    framePool: SlotObjectPool = null;

    highlightWinningSymbols(cells: { col: number, row: number }[]): void {
        this.framePool.clear();
        cells.forEach(cell => {
            const frameNode = this.framePool.get();
            frameNode.setPosition(cell.col * 140, cell.row * 140);
        });
    }

    clearHighlights(): void {
        this.framePool.clear();
    }
}
```
