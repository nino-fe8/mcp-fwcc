---
id: "game-implement:9666:stack_wild:edge_cases_and_gotchas"
title: "Red Cliff (g9666) Stack Wild Edge Cases & Gotchas"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "StackWildModule", "gotchas", "edge_cases", "fast_stop"]
---

# ⚠️ Red Cliff (g9666) Stack Wild Edge Cases & Gotchas

<!-- convention-summary-start -->
### Red Cliff (g9666) Stack Wild Edge Cases & Gotchas Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Stack Wild Edge Cases & Gotchas.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 05_stack_wild_subsystem
- **Scope & Code Paths**: `SlotReelModule9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Gotcha: Spine 'in' CompleteListener Interrupted During Fast Stop
- **Symptom**: Fast stopping or spamming spin locks the expansion sequence, preventing the table from resolving win evaluations.
- **Root Cause**: `playColumnEffect()` awaits a Promise tied to the Spine `'in'` complete listener. If interrupted, the callback never fired.
- **Fix**: In `resetAllEffectAndTasks()`, drain and execute all pending resolver callbacks stored in `this._pendingInResolvers`:
```typescript
if (this._pendingInResolvers.length > 0) {
    const resolvers = this._pendingInResolvers.splice(0);
    resolvers.forEach((resolve) => resolve());
}
```

---

## 2. Gotcha: Sibling Layer Inversion During Multi-Row Reveal
- **Symptom**: Newly spawned Wild symbols appear above the fire/flame column effect, breaking visual immersion.
- **Root Cause**: New symbol instances are appended as later children of `symbolLayer`.
- **Fix**: Call `raiseColumnEffectsToTop(stackReelIndexes)` after each row iteration so column effect skeletons retain the highest sibling index.

---

## 3. Gotcha: Orphaned Stack Wild Symbol Nodes on Abrupt State Exit
- **Symptom**: When switching game modes or on table reset, expanded Wild nodes remain floating on the table.
- **Fix**: In `onDestroyExtend()` and `onDisableExtend()`, always call `clearAllStackWilds()` to return all nodes in `_stackWildReels` to `symbolManager`.

---

## 4. Gotcha: Cascade / Payline Residual Nodes Covering Stack Wild Symbols (Post Big Win)
- **Symptom**: After a Big Win or combine win on a base spin, when subsequent Cascades/Refills land Zhuge Liang (`K2`) to expand Straw Boat Stack Wild, the Stack Wild fails to display or row 0 is covered by an old symbol (e.g. Sword & Shield / Archer).
- **Root Cause**:
  1. **Cascade/Payline Layer Isolation**: During Cascade, non-winning symbols are transferred to and held by `VerticalCascadeModule.container` (`SymbolOwnerType.CASCADE_SYMBOL`) or `PaylineSymbolModule`. When `SlotReelModule.replaceWithStackWildSymbols` ran, it only iterated over `this.listSymbols` of the reel itself, leaving residual symbol nodes alive on `CascadeModule.container` (which renders in front of Reels).
  2. **Buffer Threshold Overlap**: The buffer top threshold calculation (`startY - (BUFFER_TOP - 0.5) * HEIGHT`) matched Row 0's Y coordinate (`y = 165`), mistakenly categorizing the top real symbol as a buffer symbol and preserving it.
- **Fix in `SlotReelModule9666.ts` (`replaceWithStackWildSymbols`)**:
  1. **Global Index Purge**: Invoke `this.symbolManager.removeAllSymbols(symbolIndexes)` to locate and return symbols across ALL layers (Cascade container, Payline, Reels) back to pool.
  2. **Accurate Visible Boundary**: Compute explicit bounds (`visibleTopBound = topRowY + SYMBOL_HEIGHT * 0.5` and `visibleBotBound = botRowY - SYMBOL_HEIGHT * 0.5`).
  3. Deactivate buffer symbols (`active = false`) and return all visible reel symbols to pool before attaching newly expanded Stack Wild nodes.
