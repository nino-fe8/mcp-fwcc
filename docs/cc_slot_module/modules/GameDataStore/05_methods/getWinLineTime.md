---
id: "cc_slot_module:GameDataStore:method:getWinLineTime"
title: "GameDataStore.getWinLineTime() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "getWinLineTime"]
---

# `GameDataStore.getWinLineTime(level: number): number`

<!-- convention-summary-start -->
### GameDataStore.getWinLineTime() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDataStore.getWinLineTime() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
getWinLineTime(level: number): number
```

---

## 2. Detailed Algorithmic Execution Logic
Queries payline presentation delay duration from `this.gameConfig.WIN_LEVEL_CONFIG.WIN_LINE_TIME` (default: `{ 1: 1, 2: 2, 3: 4, 4: 6 }`).

---

## 3. Un-truncated Source Code Implementation
```typescript
getWinLineTime(level: number): number {
    const map = this.gameConfig && this.gameConfig.WIN_LEVEL_CONFIG && this.gameConfig.WIN_LEVEL_CONFIG.WIN_LINE_TIME || { 1: 1, 2: 2, 3: 4, 4: 6 };
    return map[level] || 0;
}
```
