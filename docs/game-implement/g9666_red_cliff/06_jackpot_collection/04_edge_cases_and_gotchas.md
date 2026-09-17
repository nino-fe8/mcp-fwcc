---
id: "game-implement:9666:jackpot:edge_cases"
title: "Red Cliff (g9666) Jackpot Collection Edge Cases & Troubleshooting"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "jackpot_collection", "edge_cases", "gotchas", "troubleshooting"]
---

# ⚠️ Red Cliff (g9666) Jackpot Collection Edge Cases & Gotchas

<!-- convention-summary-start -->
### Red Cliff (g9666) Jackpot Collection Edge Cases & Gotchas Summary

- **Core Architecture / Purpose**: Diagnostic and troubleshooting reference for token meter desync, rapid network reconnects, and mid-cascade disconnections.
- **Key Mechanisms & Design**: Defensive handling of `cleanSym` prefixes, Wild substitutions participating in token collections, and particle pooling safety.
- **Domain Capabilities**: game_implement, 06_jackpot_collection
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Gui/JackpotCollectionModule9666.ts`
- **Related Docs**: [03_smart_resume_deduction_math.md](./03_smart_resume_deduction_math.md)
<!-- convention-summary-end -->

---

## 1. Top 4 Critical Gotchas & Verified Solutions

### Gotcha 1: Wild Symbol Double-Count During Smart Resume
- **Symptom**: When a payline contains a Wild symbol (`K`), the smart resume logic counts it toward multiple hero token meters if multiple heroes win in that same cascade step.
- **Root Cause**: Wild substitutes for all heroes.
- **Fix in Code**:
  In `JackpotCollectionModule9666.ts`, `cleanSym.startsWith('K')` is checked only in the context of the specific payline that the Wild participated in:
  ```typescript
  const sym = pl.symbolId || pl.symbolName || pl.symbolCode || pl.symbol;
  if (sym) winningSymbolIds.add(String(sym).trim());
  ```
  Only the specific hero ID associated with that winning line accumulates the Wild match.

---

### Gotcha 2: Multi-Size Mega Symbol Prefix Mismatch
- **Symptom**: Mega symbols like `2_1_2` or `2_1_3` fail to match `symId` during resume check, causing token deduction to evaluate to 0 and the meter to jump unexpectedly.
- **Fix**:
  Always strip multi-size coordinate postfixes before comparing:
  ```typescript
  const cleanSym = String(sym).split('_')[0];
  if (cleanSym === symId || cleanSym.startsWith('K')) {
      count++;
  }
  ```

---

### Gotcha 3: Missing `itemContainer` or `itemPrefab` Reference
- **Symptom**: Console error `itemPrefab or itemContainer is not set` when loading into trial mode or custom scenes.
- **Fix**:
  Guard instantiation with fallback warnings:
  ```typescript
  if (!this.itemPrefab || !this.itemContainer) {
      console.warn("itemPrefab or itemContainer is not set");
      return;
  }
  ```

---

### Gotcha 4: Memory Leak on Rapid Mode Transitions
- **Symptom**: Memory consumption creeps up after repeatedly entering and exiting Free Game.
- **Fix**:
  Call `this.resetCollection()` inside `onLoadExtend`, `enter()`, and `onDestroy`:
  ```typescript
  protected resetCollection(): void {
      this.itemContainer.removeAllChildren();
      this._items = [];
      this._isCollectionComplete = false;
  }
  ```
