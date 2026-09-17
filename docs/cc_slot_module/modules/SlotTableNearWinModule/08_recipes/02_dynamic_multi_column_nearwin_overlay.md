---
id: "cc_slot_module:SlotTableNearWinModule:recipes:dynamic_multi_column_nearwin_overlay"
title: "Recipe: Dynamic Multi-Column Near-Win Overlays"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "recipes", "multi_column"]
---

# 💡 Recipe: Dynamic Multi-Column Near-Win Overlays

<!-- convention-summary-start -->
### Recipe: Dynamic Multi-Column Near-Win Overlays Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Dynamic Multi-Column Near-Win Overlays.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Context & Use Case

For 6-reel Megaways or cluster games where multiple columns stop concurrently or dual anticipation highlights are needed.

---

## 2. Production Code Excerpt

```typescript
const { ccclass, property } = cc._decorator;
import { SlotTableNearWinModule } from "SlotTableNearWinModule";

@ccclass
export class MultiColumnNearWinModule extends SlotTableNearWinModule {
    @property({ type: [cc.Node] })
    nearWinEffectPool: cc.Node[] = [];

    _playNearWinEffect(col: number): void {
        const { isNearWin } = this._nearWinData[col] || {};
        if (!isNearWin) {
            return this._stopNearWinEffect();
        }

        const effectNode = this.nearWinEffectPool[col] || this.nearWinEffect;
        if (effectNode) {
            effectNode.active = true;
            effectNode.setPosition(this._getXPosition(col), effectNode.position.y);
            this._playSoundNearWin();
        }
    }
}
```
