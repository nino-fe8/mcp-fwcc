---
id: "transfer-ark:cc_slot_module:free_game_resume_shows_normal_game_matrix_before_first_free_spin"
title: "Free Game Resume Shows Normal Game Matrix Before First Free Spin"
category: "cc_slot_module"
game_ids: ["g9666","all"]
sdk_modules: ["FreeGameDirectorModule","SlotTableModule","TableModuleConfig"]
tags: ["bugfix","ark_business","free_game","resume","beauty_matrix"]
created_at: "2026-08-27"
author: "ARK Slot Engineering Team"
---

# BUG-008: Free Game Resume Shows Normal Game Matrix Before First Free Spin

<!-- convention-summary-start -->
### Free Game Resume Shows Normal Game Matrix Before First Free Spin Summary

- **Core Architecture / Purpose**: Documents root cause, architectural pitfalls, reproduction steps, and official code fix for Free Game Resume Shows Normal Game Matrix Before First Free Spin.
- **Key Mechanisms & Design**: Guards edge cases, prevents race conditions/null crashes, and enforces state machine integrity during game transitions.
- **Domain Capabilities**: cc_slot_module, 01_bugs_and_gotchas
- **Scope & Code Paths**: `FreeGameDirectorModule.ts`, `FreeGameDirectorModule<GameId>.ts`, `SlotTableModule<GameId>.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. 📌 Problem / Feature Overview
- **Symptom**: When a player triggers Free Spins and immediately reloads/reconnects (F5/Resume) before performing any free spin, the board restores and displays the **old Normal Game matrix** (the scatter trigger spin) instead of the **Free Game Beauty Matrix**.
- **Scope**: Reconnection / session resume into `FreeGameDirectorModule`.

---

## 2. 🏢 Vendor SDK vs ARK Business Discrepancy
- **Vendor SDK Default Behavior**: 
  - On `_resumeFreeTable()`, base `FreeGameDirectorModule` emits `SYNC_TABLE` without arguments.
  - `SlotTableModule.syncTable()` calls `_slotTableData.getResumeMatrix(gameMode)`.
  - Because no Free Game spins have occurred yet, `dataStore.playSession.freeGameMatrix` is not present, so `getResumeMatrix()` falls back to `normalGameMatrix` or the last spin's raw matrix.
- **ARK Business Requirement**: 
  - If a player enters Free Game for the first time or resumes when `freeGameRemain === freeGame` (0 free spins executed), the table must display the designated **Free Game Beauty Matrix** (`FREE_BEAUTY_MATRIX`).
  - Only when at least 1 free spin has executed should `_resumeFreeTable()` restore the real server result matrix of the previous free spin.

---

## 3. 🔍 Root Cause Analysis in Base SDK
1. In `FreeGameDirectorModule.ts`:
   ```typescript
   _resumeFreeTable(): Promise<void> {
       this.moduleEvent.emit("SYNC_TABLE");
       return Promise.resolve();
   }
   ```
2. `SlotTableData.getResumeMatrix()` has no built-in distinction between "resumed after 0 free spins" vs "resumed mid-feature", defaulting to whatever matrix exists in `DataStore`.

---

## 4. 🛠️ Implementation & Override Solution

### Step 1: Override `_resumeFreeTable()` & `syncNormalTable()` in Game-Specific FreeGameDirector
In `FreeGameDirectorModule<GameId>.ts`:
```typescript
override syncNormalTable(_data?: any): void {
    const beautyIndex = Math.floor(Math.random() * 2);
    this.moduleEvent.emit("SYNC_FREE_BEAUTY_MATRIX", beautyIndex);
}

override _resumeFreeTable(): Promise<void> {
    const { freeGameRemain, freeGame, freeGameTotal, freeGameMatrix } = this.dataStore.playSession;
    const hasNotSpunFreeGame = (freeGameRemain !== undefined && freeGame !== undefined && freeGameRemain === freeGame)
        || (freeGameTotal === 0)
        || !freeGameMatrix;

    if (hasNotSpunFreeGame) {
        const beautyIndex = Math.floor(Math.random() * 2);
        this.moduleEvent.emit("SYNC_FREE_BEAUTY_MATRIX", beautyIndex);
        return Promise.resolve();
    }

    return super._resumeFreeTable();
}
```

### Step 2: Handle `SYNC_FREE_BEAUTY_MATRIX` in Table Modules
In `SlotTableModule<GameId>.ts` and `HorizontalTableModule<GameId>.ts`:
```typescript
protected registerEvents(): void {
    super.registerEvents();
    this.moduleEvent.on('SYNC_FREE_BEAUTY_MATRIX', this.onSyncFreeBeautyMatrix, this);
}

private onSyncFreeBeautyMatrix(beautyIndex: number): void {
    const freeBeautyList = (this.config as any)?.FREE_BEAUTY_MATRIX;
    if (freeBeautyList && freeBeautyList.length > 0) {
        const matrix = freeBeautyList[beautyIndex % freeBeautyList.length];
        this.syncTable(matrix);
    }
}
```

### Step 3: Define `FREE_BEAUTY_MATRIX` in Table Configs
In `TableModuleConfig<GameId>.ts` & `HorizontalTableModuleConfig<GameId>.ts`:
```typescript
public FREE_BEAUTY_MATRIX: string[][][] = [
    // Configuration for Free Spins Matrix (1)
    [ ... ],
    // Configuration for Free Spins Matrix (2)
    [ ... ],
];
```

---

## 5. ⚠️ Gotchas & Edge Cases
1. **Shared Random Index**: Emit `beautyIndex` from `FreeGameDirectorModule` so all tables (Main Table + Horizontal/Top Table) receive and display the exact same pair index.
2. **Scatter Deduction on Resume**: Ensure `syncSpinTimes()` correctly accounts for active scatters when calculating remaining spins on resume.

---

## 6. ♻️ Reusability Guide for Future Game Titles
1. Add `FREE_BEAUTY_MATRIX` to table configs.
2. Add `SYNC_FREE_BEAUTY_MATRIX` event subscriber to table modules.
3. In game-specific `FreeGameDirectorModule`, override `syncNormalTable()` and `_resumeFreeTable()` to check `hasNotSpunFreeGame`.

---

## 7. 🔗 Codebase References
- `assets/cc-common/cc-slot-module/GameMode/FreeGame/FreeGameDirectorModule.ts`
- `assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameDirectorModule9666.ts`
- `assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotTableModule9666.ts`
- `assets/cc-release-slot/cc1-red-cliff/scripts/Table/TableModuleConfig9666.ts`
