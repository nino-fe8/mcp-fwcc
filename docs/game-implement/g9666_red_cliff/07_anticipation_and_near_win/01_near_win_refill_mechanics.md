---
id: "game-implement:9666:anticipation:near_win_refill"
title: "Red Cliff (g9666) Near Win Refill Mechanics & Cascade Anticipation"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SlotTableNearWinRefillModule9666", "near_win", "refill", "anticipation"]
---

# ⏳ Red Cliff (g9666) Near Win Refill Mechanics & Anticipation

<!-- convention-summary-start -->
### Red Cliff (g9666) Near Win Refill Mechanics Summary

- **Core Architecture / Purpose**: Technical reference for reel slowdown and anticipation mechanics during cascade refills in Red Cliff (g9666).
- **Key Mechanisms & Design**: Focuses on `SlotTableNearWinRefillModule9666.ts`, tracking live Scatter symbols on the grid, evaluating the 4-scatter threshold, and triggering suspense states during vertical drop refills.
- **Domain Capabilities**: game_implement, 07_anticipation_and_near_win
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotTableNearWinRefillModule9666.ts`
- **Related Docs**: [02_audio_ducking_and_suspense_sfx.md](./02_audio_ducking_and_suspense_sfx.md), [00_ALL_GAME_FEATURES_DEEP_DIVE.md](../00_ALL_GAME_FEATURES_DEEP_DIVE.md)
<!-- convention-summary-end -->

---

## 1. Feature Concept: Cascade-Time Anticipation

Traditional slot games only play Near Win anticipation during the initial reel spin. Red Cliff (g9666) introduces **Cascade Refill Near Win**:
- If 3 Scatters (`A`) are collected or landed, and winning symbols explode leaving empty spaces, the incoming refill symbols have a chance to drop the critical 4th Scatter!
- The engine slows down the refill drop animation on remaining columns and triggers heightened audio-visual tension.

---

## 2. Threshold Evaluation & Live Matrix Counting

In [`SlotTableNearWinRefillModule9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotTableNearWinRefillModule9666.ts):

```typescript
@property freeGameScatterThreshold: number = 4;
private _liveMatrixScatterCount: number = 0;

setupNearWinRefill(args: { matrix: string[][]; dropColumns: number[]; context: any }): void {
    if (this.dataStore?.currentGameMode === GAME_MODE_ENUM.FREE_GAME) {
        return; // Near Win only active during Normal Game
    }
    const liveScatterCount = this.dataStore?.playSession?.scatterCount ?? 0;
    if (liveScatterCount >= this.stopAtScatterCount) {
        return;
    }
    this._liveMatrixScatterCount = this._countScatterInMatrix(args?.matrix);
    super.setupNearWinRefill(args);
}
```

### 2.1 Counting Algorithm
The module scans the 2D column/row matrix:
```typescript
private _countScatterInMatrix(matrix: string[][]): number {
    if (!matrix) return 0;
    let count = 0;
    for (let col = 0; col < matrix.length; col++) {
        for (let row = 0; row < matrix[col].length; row++) {
            const symbolCode = matrix[col][row]?.split('_')[0];
            if (symbolCode === this.scatterSymbol) {
                count++;
            }
        }
    }
    return count;
}
```
If `_liveMatrixScatterCount === 3` and remaining columns are dropping new symbols, Near Win activates.
