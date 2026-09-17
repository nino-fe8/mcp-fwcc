---
id: "cc_slot_module:GameDataStore:method:getCurrentGameModeData"
title: "GameDataStore.getCurrentGameModeData() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "getCurrentGameModeData"]
---

# `GameDataStore.getCurrentGameModeData(): any`

<!-- convention-summary-start -->
### GameDataStore.getCurrentGameModeData() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDataStore.getCurrentGameModeData() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
getCurrentGameModeData(): any
```

---

## 2. Detailed Algorithmic Execution Logic
Returns cached session object for current game mode: `this.gameModeData.get(this.currentGameMode) || {}`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getCurrentGameModeData(): any {
    return this.gameModeData.get(this.currentGameMode) || {};
}
```
