---
id: "cc_slot_mechanics:NudgeReelModule:methods:index"
title: "NudgeReelModule Methods Master Index"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "methods", "index"]
---

# 📖 `NudgeReelModule` Methods Master Index

<!-- convention-summary-start -->
### NudgeReelModule Methods Master Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NudgeReelModule Methods Master Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `./setupNudge.md`, `./prepareNudge.md`, `./startNudge.md`
- **Related Docs**: [`setupNudge()`](./setupNudge.md), [`prepareNudge()`](./prepareNudge.md), [`startNudge()`](./startNudge.md)
<!-- convention-summary-end -->


---

## 1. Declared Method Signatures & Summary

| Method | Parameters | Return Type | Source Range | Description |
| :--- | :--- | :--- | :---: | :--- |
| **[`setupNudge()`](./setupNudge.md)** | `{index, step, direction}` | `void` | Lines 26-30 | Implements setupNudge operation in `NudgeReelModule`. |
| **[`prepareNudge()`](./prepareNudge.md)** | `void` | `void` | Lines 32-45 | Implements prepareNudge operation in `NudgeReelModule`. |
| **[`startNudge()`](./startNudge.md)** | `void` | `void` | Lines 47-52 | Implements startNudge operation in `NudgeReelModule`. |
| **[`nudgeSpinning()`](./nudgeSpinning.md)** | `void` | `void` | Lines 54-70 | Implements nudgeSpinning operation in `NudgeReelModule`. |
| **[`recycleNudgeSymbol()`](./recycleNudgeSymbol.md)** | `void` | `void` | Lines 72-94 | Implements recycleNudgeSymbol operation in `NudgeReelModule`. |
| **[`spawnNudgeSymbol()`](./spawnNudgeSymbol.md)** | `code: string, size: cc.Vec2` | `cc.Node` | Lines 96-102 | Implements spawnNudgeSymbol operation in `NudgeReelModule`. |
| **[`spawnBottomSymbol()`](./spawnBottomSymbol.md)** | `code: string, size: cc.Vec2` | `cc.Node` | Lines 104-114 | Implements spawnBottomSymbol operation in `NudgeReelModule`. |
| **[`getRandomSymbol()`](./getRandomSymbol.md)** | `void` | `` | Lines 116-132 | Implements getRandomSymbol operation in `NudgeReelModule`. |
| **[`addNudgeSymbols()`](./addNudgeSymbols.md)** | `void` | `void` | Lines 134-150 | Implements addNudgeSymbols operation in `NudgeReelModule`. |
| **[`changeBufferSymbol()`](./changeBufferSymbol.md)** | `index: number` | `cc.Node` | Lines 152-156 | Implements changeBufferSymbol operation in `NudgeReelModule`. |
| **[`addRemainNudgeSymbols()`](./addRemainNudgeSymbols.md)** | `positionY: number` | `void` | Lines 158-166 | Implements addRemainNudgeSymbols operation in `NudgeReelModule`. |
| **[`addBufferSymbol()`](./addBufferSymbol.md)** | `positionY: number` | `void` | Lines 168-172 | Implements addBufferSymbol operation in `NudgeReelModule`. |
| **[`updateIndexSymbols()`](./updateIndexSymbols.md)** | `void` | `void` | Lines 174-186 | Implements updateIndexSymbols operation in `NudgeReelModule`. |
| **[`resetNudgeReel()`](./resetNudgeReel.md)** | `void` | `void` | Lines 188-196 | Implements resetNudgeReel operation in `NudgeReelModule`. |
| **[`resetAllEffectAndTasks()`](./resetAllEffectAndTasks.md)** | `void` | `void` | Lines 198-200 | Implements resetAllEffectAndTasks operation in `NudgeReelModule`. |
