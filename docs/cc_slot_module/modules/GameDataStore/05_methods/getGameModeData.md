---
id: "cc_slot_module:GameDataStore:method:getGameModeData"
title: "GameDataStore.getGameModeData() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "getGameModeData"]
---

# `GameDataStore.getGameModeData(gameMode: number): any`

<!-- convention-summary-start -->
### GameDataStore.getGameModeData() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDataStore.getGameModeData() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
getGameModeData(gameMode: number): any
```

---

## 2. Detailed Algorithmic Execution Logic
Returns cached session object for specified mode: `this.gameModeData.get(gameMode) || {}`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getGameModeData(gameMode: number): any {
    return this.gameModeData.get(gameMode) || {};
}
```
