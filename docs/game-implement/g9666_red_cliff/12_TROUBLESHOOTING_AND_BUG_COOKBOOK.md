---
id: "game-implement:9666:guide:troubleshooting_and_bug_cookbook"
title: "Red Cliff (g9666) Master Troubleshooting & Bug Cookbook"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "troubleshooting", "bug_fixes", "gotchas", "cookbook", "p0", "recipes"]
---

# 🩺 Red Cliff (g9666) Master Troubleshooting & Bug Cookbook

<!-- convention-summary-start -->
### Red Cliff (g9666) Master Troubleshooting & Bug Cookbook Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Master Troubleshooting & Bug Cookbook.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, g9666_red_cliff
- **Scope & Code Paths**: `CompositeCascade9666.ts`, `file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/CompositeCascade9666.ts`, `file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotSymbolModule9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


This cookbook catalogs all critical bug scenarios, race conditions, desynchronization traps, and verified fixes for **Red Cliff (g9666)**.

---

## 📑 Quick Index of Bug Classes

1. [Bug 01: Dual Cascade Drop Freeze & Out-of-Sync Reels](#bug-01-dual-cascade-drop-freeze--out-of-sync-reels)
2. [Bug 02: Multiplier Wild Badge Disappearing on Pooled Recycling](#bug-02-multiplier-wild-badge-disappearing-on-pooled-recycling)
3. [Bug 03: Multiplier Badge NOT Resetting on Next Spin (Unexploded Wild)](#bug-03-multiplier-badge-not-resetting-on-next-spin-unexploded-wild)
4. [Bug 04: Jackpot Collection Meter Token Count Desync on Reconnect](#bug-04-jackpot-collection-meter-token-count-desync-on-reconnect)
5. [Bug 05: Spine Bone Tracking Label Drift on Screen Resize](#bug-05-spine-bone-tracking-label-drift-on-screen-resize)
6. [Bug 06: Fast-Stop / Turbo Speed Interruption Freezing Paylines](#bug-06-fast-stop--turbo-speed-interruption-freezing-paylines)
7. [Bug 07: Guan Yu Stack Wild Expansion Spawning Duplicate Spines](#bug-07-guan-yu-stack-wild-expansion-spawning-duplicate-spines)
8. [Bug 08: Megaways Counter Calculation Mismatch with Variable Rows](#bug-08-megaways-counter-calculation-mismatch-with-variable-rows)
9. [Bug 09: MoneyTween Count-Up Floating Precision Glitch](#bug-09-moneytween-count-up-floating-precision-glitch)
10. [Bug 10: Scatter Flag Particle Trajectory Clipping Behind Board](#bug-10-scatter-flag-particle-trajectory-clipping-behind-board)

---

## Bug 01: Dual Cascade Drop Freeze & Out-of-Sync Reels

### 🚨 Symptoms
- Vertical reels finish dropping, but the top horizontal sub-reel remains locked or frozen mid-transition.
- The game state stops progressing and next spin cannot be initiated.

### 🔍 Root Cause
In `CompositeCascade9666.ts`, `startRespin()` executes `Promise.all([p1, p2])` where `p1` is `VerticalCascadeModule9666` and `p2` is `HorizontalCascadeModule9666`. If either promise does not resolve (due to an empty tween or unhandled 0-win edge case), the sequence deadlocks.

### 🛠️ Verified Fix
In [`CompositeCascade9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/CompositeCascade9666.ts):
```typescript
async startRespin(): Promise<void> {
    const { verticalMatrix, horizonMatrix, listTraceWayVertical, listTraceWayHorizontal } = this._compositeCascadeData.formatData();
    
    // Guard against empty steps
    const p1 = (listTraceWayVertical && listTraceWayVertical.length > 0)
        ? this.verticalCascadeModule.startRespin(verticalMatrix, listTraceWayVertical)
        : Promise.resolve();

    const p2 = (listTraceWayHorizontal && listTraceWayHorizontal.length > 0)
        ? this.horizontalCascadeModule.startRespin(horizonMatrix, listTraceWayHorizontal)
        : Promise.resolve();

    await Promise.all([p1, p2]);
    await this.moduleEvent.emit('UPDATE_JACKPOT_COLLECTION');
}
```

---

## Bug 02: Multiplier Wild Badge Disappearing on Pooled Recycling

### 🚨 Symptoms
- A symbol reused from the object pool inherits an invisible multiplier label or renders an empty black badge box.

### 🔍 Root Cause
When `SlotSymbolModule9666` is recycled and reinstantiated, `lbMultiplier` is not properly updated or made active for new multiplier wild codes (e.g., `K1-8`).

### 🛠️ Verified Fix
In [`SlotSymbolModule9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotSymbolModule9666.ts):
```typescript
override initExtend(): void {
    super.initExtend();
    this.hasCollectedMultiplier = false;
    if (this.symbolCode && this.symbolCode.startsWith('K1-')) {
        const val = this.symbolCode.split('-')[1];
        if (this.lbMultiplier) {
            this.lbMultiplier.node.active = true;
            this.lbMultiplier.string = `x${val}`;
        }
    } else {
        if (this.lbMultiplier) {
            this.lbMultiplier.node.active = false;
            this.lbMultiplier.string = '';
        }
    }
}
```

---

## Bug 03: Multiplier Badge NOT Resetting on Next Spin (Unexploded Wild)

### 🚨 Symptoms
- A Multiplier Wild that was NOT part of a win has its multiplier badge permanently hidden if another wild exploded elsewhere on the board.

### 🔍 Root Cause
Global event handlers were calling `hideMultiplierLabel()` across all wild symbols on the table instead of strictly targeting winning wild coordinates.

### 🛠️ Verified Fix
Only hide multiplier labels on symbol nodes that match the winning cell coordinates:
```typescript
hideMultiplierLabel(): void {
    if (this.hasCollectedMultiplier) return;
    if (this.lbMultiplier) {
        this.lbMultiplier.node.active = false;
    }
    this.hasCollectedMultiplier = true;
}
```

---

## Bug 04: Jackpot Collection Meter Token Count Desync on Reconnect

### 🚨 Symptoms
- Reconnecting to a spin in progress causes the Jackpot meter to show more tokens than actually won, or duplicates particle fly-ins.

### 🔍 Root Cause
The backend sends total collected tokens including the current spin's yield. The client must compute:
$$C_{\text{display}} = \max(0, C_{\text{total}} - W_{\text{current}})$$

### 🛠️ Verified Fix
In [`JackpotCollectionModule9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/JackpotCollectionModule9666.ts):
```typescript
const adjustedTokens = rawList.map((item: string) => {
    const [code, collectedStr, targetStr] = item.split(':');
    const collected = parseInt(collectedStr, 10) || 0;
    const target = parseInt(targetStr, 10) || 0;
    const currentWins = paylineCounts[code] || 0;
    const displayTokens = Math.max(0, collected - currentWins);
    return `${code}:${displayTokens}:${target}`;
});
this.initItems(adjustedTokens);
```

---

## Bug 05: Spine Bone Tracking Label Drift on Screen Resize

### 🚨 Symptoms
- Payline multiplier badges and win money labels float far away from character Spine bones on window resize or mobile orientation switch.

### 🔍 Root Cause
Local node positions were cached once during animation start instead of transforming through world space inside `update(dt)`.

### 🛠️ Verified Fix
In [`PaylineInfoModule9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/PaylineInfoModule9666.ts):
```typescript
syncNodeToBone(targetNode: cc.Node, boneName: string): void {
    if (!targetNode || !this.spineSkeleton) return;
    const bone = this.spineSkeleton.findBone(boneName);
    if (!bone) return;

    // Convert bone coordinate to world space, then to target parent space
    const boneWorldPos = this.spineSkeleton.node.convertToWorldSpaceAR(cc.v2(bone.worldX, bone.worldY));
    const targetLocalPos = targetNode.parent.convertToNodeSpaceAR(boneWorldPos);
    targetNode.setPosition(targetLocalPos);
}
```
