---
id: "cc_slot_module:SlotTableSoundEffectModule:method:onReelStopSound"
title: "SlotTableSoundEffectModule.onReelStopSound Method"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "methods", "onReelStopSound"]
---

# 🚀 `SlotTableSoundEffectModule.onReelStopSound(data): void`

<!-- convention-summary-start -->
### SlotTableSoundEffectModule.onReelStopSound Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableSoundEffectModule.onReelStopSound Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
public onReelStopSound(data: {
    reelIndex: number;
    context: any;
    matrix: string[][];
}): void
```

---

## 2. Trigger Source & Execution Lifecycle

Triggered via `this.node.emit('REEL_STOP_SOUND', data)` by `SlotTableModule` every time a reel column stops.

---

## 3. Algorithmic Steps

1. Extracts symbols from `matrix[reelIndex]`.
2. Scans symbols for `JACKPOT_SYMBOL`, `BONUS_SYMBOL`, or `SCATTER_SYMBOL`, incrementing corresponding counters and setting boolean flags.
3. Checks if `isFastToResult()` or `isTurbo` is active:
   - If active, plays `playSfxReelStop()` only on the final reel (`reelIndex === context.reels.length - 1`).
4. Otherwise:
   - If special symbols landed, calls `playSfxSpecialSymbol({ hasSpecialBonus, hasSpecialScatter, hasSpecialJackpot })`.
   - Else calls `playSfxReelStop()`.

---

## 4. Full Source Code

```typescript
onReelStopSound(data: any): void {
    const { reelIndex, context, matrix } = data;
    const symbols = matrix[reelIndex];

    let hasSpecialBonus = false;
    let hasSpecialScatter = false;
    let hasSpecialJackpot = false;

    symbols.forEach(symbol => {
        switch (symbol) {
            case this.tableConfig.JACKPOT_SYMBOL:
                this.countJackpot++;
                hasSpecialJackpot = true;
                break;
            case this.tableConfig.BONUS_SYMBOL:
                this.countBonus++;
                hasSpecialBonus = true;
                break;
            case this.tableConfig.SCATTER_SYMBOL:
                this.countScatter++;
                hasSpecialScatter = true;
                break;
        }
    });

    const hasSpecialSymbol = hasSpecialBonus || hasSpecialScatter || hasSpecialJackpot;

    const isFastToResult = context.isFastToResult();
    const isTurbo = context.currentMode.isTurbo;
    if (isFastToResult || isTurbo) {
        if (reelIndex === context.reels.length - 1) {
            this.playSfxReelStop();
        }
    } else if (hasSpecialSymbol) {
        this.playSfxSpecialSymbol({ hasSpecialBonus, hasSpecialScatter, hasSpecialJackpot });
    } else {
        this.playSfxReelStop();
    }
}
```
