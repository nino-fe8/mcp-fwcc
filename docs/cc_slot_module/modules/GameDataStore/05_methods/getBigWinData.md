---
id: "cc_slot_module:GameDataStore:method:getBigWinData"
title: "GameDataStore.getBigWinData() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "getBigWinData", "big_win", "cutscenes"]
---

# `GameDataStore.getBigWinData(): object`

<!-- convention-summary-start -->
### GameDataStore.getBigWinData() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDataStore.getBigWinData() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public getBigWinData(): any
```

---

## 2. Detailed Algorithmic Execution Logic
Extracts `{ bigWinAmount, totalBet, winType, winAmountPS, isFinished }` from `this.playSession` combined with `{ winLevel, delayTime, time }` from `this.getWinAmountInfo()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getBigWinData(): any {
    let { bigWinAmount, totalBet, winType, winAmountPS, isFinished } = this.playSession;
    const { winLevel, delayTime, time } = this.getWinAmountInfo();
    return { winAmount: bigWinAmount, totalBet, winType, winAmountPS, isFinished, winLevel, delayTime, time };
}
```
