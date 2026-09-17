---
id: "cc_slot_module:GameConfig:gotcha:win_level_threshold_ordering"
title: "Gotcha: Non-Ascending WIN_LEVEL_CONFIG Thresholds"
category: "cc_slot_module"
tags: ["GameConfig", "gameconfig", "cc_slot_module", "gotchas", "WIN_LEVEL_CONFIG", "win_level", "thresholds", "logic_error"]
---

# 🛑 Gotcha: Non-Ascending `WIN_LEVEL_CONFIG` Thresholds

<!-- convention-summary-start -->
### Gotcha: Non-Ascending WIN_LEVEL_CONFIG Thresholds Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Non-Ascending WIN_LEVEL_CONFIG Thresholds.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Symptom & Visual Defect
A small win (e.g. 2x total bet) triggers the Level 4 Super Win celebration and plays the 6-second coin shower audio.

---

## 2. Root Cause & Technical Defect
The win level evaluator (`GameDataStore.getWinLevel()`) iterates through `WIN_LEVEL_CONFIG.THRESHOLDS` sequentially expecting strictly ascending cutoffs (e.g. `[1, 5, 10]`). If thresholds are specified out of order (e.g. `[10, 5, 1]`), the threshold comparison algorithm evaluates the level incorrectly.

---

## 3. Standard Code Solution & Fix
Always define `THRESHOLDS` in strictly ascending order:

```typescript
public readonly WIN_LEVEL_CONFIG: any = {
    // Strictly ascending: [Threshold_Lv2, Threshold_Lv3, Threshold_Lv4]
    THRESHOLDS: [1, 5, 10],
    COUNT_MONEY_TIME: { 1: 0, 2: 0, 3: 4, 4: 6 },
    WIN_LINE_TIME:    { 1: 1, 2: 2, 3: 4, 4: 6 },
};
```
