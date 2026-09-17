---
id: "game-implement:9666:transform:edge_cases"
title: "Red Cliff (g9666) Transform Symbol Edge Cases, Fast-Stop & Gotchas"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "TransformSymbolModule9666", "edge_cases", "gotchas", "fast_stop"]
---

# ⚠️ Red Cliff (g9666) Transform Symbol Edge Cases & Gotchas

<!-- convention-summary-start -->
### Red Cliff (g9666) Transform Symbol Edge Cases & Gotchas Summary

- **Core Architecture / Purpose**: Defensive programming guide, troubleshooting tips, and known gotchas for the Transform Symbol subsystem.
- **Key Mechanisms & Design**: Handles Fast-Stop interruptions, node leak prevention, resize coordinate drifting, and pool starvation.
- **Domain Capabilities**: game_implement, 05_transform_symbol_subsystem
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Table/TransformSymbolModule9666 .ts`
- **Related Docs**: [01_transform_architecture_and_pool.md](./01_transform_architecture_and_pool.md)
<!-- convention-summary-end -->

---

## 1. Top 4 Critical Gotchas & Verified Fixes

### Gotcha 1: Ghost Overlay Node on Fast-Stop (Skip)
- **Symptom**: Player presses Fast Stop while the Grass Boat morph animation is playing. An orphaned Wild `K` node remains floating over the reel even after new symbols have dropped in.
- **Root Cause**: `onTransformSymbol()` was interrupted before normal cleanup handlers were invoked.
- **Fix in Red Cliff**:
  In `TransformSymbolModule9666.ts`, `onLoadExtend` binds `this.moduleEvent.on('TABLE_STOP_SPIN', this.onVerticalTableStop, this)`. When `TABLE_STOP_SPIN` or `TABLE_FAST_STOP` is received, `this.clearTransformSymbols()` immediately iterates `_transformSymbols`, stops active tweens, and returns nodes to `symbolManager.returnToPool()`.

---

### Gotcha 2: Space in Filename (`TransformSymbolModule9666 .ts`)
- **Symptom**: Import errors when importing `TransformSymbolModule9666` in test suites or TypeScript compiler tools.
- **Root Cause**: File on disk has an accidental trailing space before `.ts`: `TransformSymbolModule9666 .ts`.
- **Recommendation**: Maintain import paths matching exact string or import by declared class name rather than relative path string in external scripts.

---

### Gotcha 3: Coordinate Drift on Multi-Resolution Resize
- **Symptom**: When resizing the browser window or toggling full screen during the morph sequence, the overlay `K` symbol offsets slightly from the underlying reel slot.
- **Fix**: Never store fixed local positions across frames. Always recompute via:
  ```typescript
  const worldPos = slotNode.parent.convertToWorldSpaceAR(slotNode.position);
  const localPos = this.symbolLayer.convertToNodeSpaceAR(worldPos);
  ```

---

### Gotcha 4: Pool Starvation During Extended Cascade Streaks
- **Symptom**: Multiple consecutive cascades with 3+ transform symbols exhaust `SlotSymbolManager9666` pool instances, triggering console warnings.
- **Fix**: Ensure `SlotSymbolManager9666` allocates minimum pool buffer size $\ge 15$ nodes and verifies `owner === SymbolOwnerType.TRANSFORM_SYMBOL` when resetting nodes.
