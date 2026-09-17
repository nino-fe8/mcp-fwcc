---
id: "cc_slot_module:SlotGameSettings:gotcha:fast_to_result_unhandled_skips"
title: "Gotcha: Visual De-sync via Unhandled isFastToResult Mode"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "gotchas", "isFastToResult", "FTR", "visual_desync"]
---

# 🛑 Gotcha: Visual De-sync via Unhandled `isFastToResult` Mode

<!-- convention-summary-start -->
### Gotcha: Visual De-sync via Unhandled isFastToResult Mode Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Visual De-sync via Unhandled isFastToResult Mode.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Symptom & Visual Defect
When playing in Fast-to-Result (FTR / Instant Spin) mode, coin particle showers or near-win border glow effects continue playing across multiple subsequent spins.

---

## 2. Root Cause & Technical Defect
In FTR mode (`gameSettings.isFastToResult === true`), the director compresses or skips timeline steps. If custom visual components schedule long async delays without checking `this.gameSettings.isFastToResult`, animations overlap and desynchronize.

---

## 3. Standard Code Solution & Fix
Check `this.gameSettings.isFastToResult` and zero out durations, or implement the `@FastToResult` method decorator:

```typescript
async playFeatureAnimation(): Promise<void> {
    if (this.gameSettings && this.gameSettings.isFastToResult) {
        // Skip animation and apply final state immediately
        this.applyFinalVisualState();
        return;
    }

    // Otherwise run full duration tween
    await this.runLongTweenAsync();
}
```
