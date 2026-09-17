---
id: "transfer-ark:feature:jackpot_win_cutscene:03_dual_spine"
title: "Jackpot Win Cutscene - Dual-Spine Sync & Bone Tracking"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["JackpotWinModule"]
tags: ["spine_sync", "bone_tracking", "world_transform", "dual_spine", "symbol_parade"]
created_at: "2026-09-17"
author: "ARK Slot Engineering Team"
---

# 3. 🦴 Dual-Spine Sync & Bone Tracking

<!-- convention-summary-start -->
### Jackpot Win Cutscene - Dual-Spine Sync & Bone Tracking Summary

- **Core Architecture / Purpose**: Deep dive into the real-time bone coordinate synchronization that powers both the contributing Symbol Parade and floating Money Label.
- **Key Mechanisms & Design**: 
  - Dynamic attachment of individual symbol spines to `slot_symbol_1..6` bones with opacity/slot color synchronization.
  - Frame-by-frame world-to-local coordinate transformation of `slot_coin` bone to drive `winAmount`.
- **Domain Capabilities**: feature, RECIPE_005_jackpot_win_celebration_cutscene
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Cutscene/JackpotWinModule9666.ts`
- **Related Docs**: [02. State Machine & Lifecycle](./02_state_machine_and_lifecycle.md), [05. Full Implementation Code](./05_full_implementation_code.md)
<!-- convention-summary-end -->

---

## 3.1 Mechanism 1: Symbol Parade Bone Sync

Before the jackpot banner appears, `jackpotCollectSpine` showcases the contributing symbols.

### The Algorithm:
1. Identify the number of collected symbols $N$ (e.g. 3 to 6).
2. Play the corresponding parade animation: `idle_symbol_${N}`.
3. For each symbol index $i \in [0, N-1]$:
   - Find bone `slot_symbol_${i + 1}` in `jackpotCollectSpine`.
   - Calculate world coordinates:
     $$P_{\text{world}} = \text{jackpotCollectSpine.node.convertToWorldSpaceAR}(\text{bone.worldX}, \text{bone.worldY})$$
   - Transform into local parent coordinate space:
     $$P_{\text{local}} = \text{node.parent.convertToNodeSpaceAR}(P_{\text{world}})$$
   - Read slot color alpha to sync fade-in/fade-out:
     $$\text{opacity} = \text{Math.round}(\text{slot.color.a} \times 255)$$

```typescript
private syncSymbolIconToBone(node: cc.Node, bone: any, index: number): void {
    if (!this.jackpotCollectSpine || !node.parent) return;

    const worldPos = this.jackpotCollectSpine.node.convertToWorldSpaceAR(cc.v2(bone.worldX, bone.worldY));
    const localPos = node.parent.convertToNodeSpaceAR(worldPos);
    node.setPosition(localPos);
    node.setScale(this.iconScale.x, this.iconScale.y);
    node.setSiblingIndex(node.parent.childrenCount - 1);

    const slot = this.jackpotCollectSpine.findSlot(`${this.symbolSlotPrefix}${index + 1}`);
    if (slot && slot.color) {
        (node as any).opacity = Math.round(slot.color.a * 255);
    }
}
```

---

## 3.2 Mechanism 2: Real-time Win Amount Bone Tracking

The jackpot banner bounces, wobbles, and scales dramatically during the celebration. If `winAmount` were statically placed, the text would slide off the golden banner.

### Implementation inside `update()`:
```typescript
update(_dt: number): void {
    if (this._isMoneySlotMoving) {
        this.syncMoneyToSlot();
    }
}

syncMoneyToSlot(): void {
    if (!this.jackpotSpine?.skeletonData || !this.winAmount?.parent) return;
    if (this._isMoneyHidden) {
        this.winAmount.active = false;
        return;
    }

    // Force Spine to update bone transforms for current frame
    this.jackpotSpine.updateWorldTransform();
    const bone = this.jackpotSpine.findBone(this.boneCoinName); // "slot_coin"
    if (!bone) return;

    this.winAmount.active = !!bone.active;
    const offsetX = this.moneyOffset ? this.moneyOffset.x : 0;
    const offsetY = this.moneyOffset ? this.moneyOffset.y : 10;
    const worldPos = this.jackpotSpine.node.convertToWorldSpaceAR(
        cc.v2(bone.worldX + offsetX, bone.worldY + offsetY)
    );
    this.winAmount.setPosition(this.winAmount.parent.convertToNodeSpaceAR(worldPos));
}
```

### Critical Rules:
1. **Always call `updateWorldTransform()`**: Spine bone coordinates are not guaranteed to be refreshed before Cocos component `update()` runs unless explicitly called.
2. **Handle `moneyOffset`**: Provide an inspector `cc.Vec2` offset to fine-tune the label's vertical alignment against the coin graphic without requiring Spine artist re-exports.
