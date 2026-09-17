---
id: "game-implement:9666:free_game:rules_and_extra_spins"
title: "Red Cliff (g9666) Free Game Rules, Progressive Multipliers & Extra Spins"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "free_game", "extra_spins", "progressive_multiplier", "ADD_FREE_SPIN_TIMES"]
---

# ⚡ Red Cliff (g9666) Free Game Rules, Multipliers & Extra Spins

<!-- convention-summary-start -->
### Red Cliff (g9666) Free Game Rules, Multipliers & Extra Spins Summary

- **Core Architecture / Purpose**: Detailed technical specification of the Free Game mode, trigger tiers, $+1$ extra spin mechanics per scatter, and cascade-progressive multipliers.
- **Key Mechanisms & Design**: Explains the progressive multiplier formula ($\times 2 \rightarrow +2$ per cascade $\le \times 20$), `ADD_FREE_SPIN_TIMES` event dispatching, and spin times counter reconciliation.
- **Domain Capabilities**: game_implement, 06_scatter_and_free_game
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameDirectorModule9666.ts`, `assets/cc-release-slot/cc1-red-cliff/scripts/Gui/CollectScatterModule.ts`
- **Related Docs**: [01_scatter_flag_collection.md](./01_scatter_flag_collection.md), [00_ALL_GAME_FEATURES_DEEP_DIVE.md](../00_ALL_GAME_FEATURES_DEEP_DIVE.md)
<!-- convention-summary-end -->

---

## 1. Free Game Trigger Matrix

From [`en_US.json`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/data/9666_Localization/en_US.json):
- **4 Scatters (`A`)**: Awards **7 Free Spins**.
- **5 Scatters (`A`)**: Awards **8 Free Spins**.
- **6 Scatters (`A`)**: Awards **9 Free Spins**.

The total bet remains identical to the triggering base game bet.

---

## 2. Cascade Progressive Multiplier Architecture

In Free Game mode:
1. **Initial Spin Multiplier**: Every Free Spin resets to **$\times 2$** (instead of $\times 1$ in normal game):
   ```typescript
   // MultiplierModule9666.ts
   private resetMultiplier(isFreegame = false): void {
       MultiplierModule9666.currentMultiplier = isFreegame ? 2 : 1;
       this.updateLabel();
       this.hideMultiplier();
   }
   ```
2. **Cascade Increments**:
   - For every consecutive win/cascade within the same spin, the multiplier increases by $+ \times 2$:
     $$\text{Multiplier}_{\text{cascade}}(k) = \min(20, 2 + 2 \times k)$$
   - Cap: Multiplier reaches a maximum ceiling of **$\times 20$**.
3. **Multiplier Ingot Boosts**:
   - If a Multiplier Ingot (`K1-x`) lands during a free spin cascade, its value is added on top of the progressive multiplier.

---

## 3. Real-Time Extra Spin Mechanics (+1 per Scatter)

### 3.1 Gameplay Mechanic
During Free Game, Scatters do **not** trigger a separate mini-game. Instead, every Scatter symbol `A` that lands awards **+1 additional Free Spin**.

### 3.2 Code Sequence
1. In [`FreeGameDirectorModule9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameDirectorModule9666.ts):
   ```typescript
   override async _startRespinningTable(data: any): Promise<void> {
       await Promise.all([
           this.moduleEvent.emit("TABLE_START_RESPIN", data),
           this._collectScatter(),
       ]);
   }
   ```
2. In [`CollectScatterModule.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/CollectScatterModule.ts):
   - Instantiates `collectEffectSpinTemplate` over each Scatter.
   - Plays SFX `ADD_SPIN`.
   - Emits `this.eventManager.emit('ADD_FREE_SPIN_TIMES', 1)`.
3. In [`FreeGameDirectorModule9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameDirectorModule9666.ts):
   ```typescript
   private onAddFreeSpinTimes(count: number): void {
       const spinTimesModule = this.spinTimes?.getComponent(SpinTimesModule);
       const currentShown = spinTimesModule
           ? (parseInt(spinTimesModule.spinTimesLabel.string, 10) || 0)
           : this.dataStore.freeSpinTimes;
       const newTotal = currentShown + count;
       this.dataStore.freeSpinTimes = newTotal;
       this._updateSpinTimes(newTotal);
   }
   ```
   This ensures that the HUD Spin Times label updates cleanly and in real time without waiting for the spin to complete.
