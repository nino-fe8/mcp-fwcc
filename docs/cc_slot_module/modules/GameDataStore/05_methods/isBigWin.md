---
id: "cc_slot_module:GameDataStore:method:isBigWin"
title: "GameDataStore.isBigWin() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "isBigWin"]
---

# `GameDataStore.isBigWin(): boolean`

<!-- convention-summary-start -->
### GameDataStore.isBigWin() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDataStore.isBigWin() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
isBigWin(): boolean
```

---

## 2. Detailed Algorithmic Execution Logic
Tests `!!this.playSession.bigWinAmount && !!this.playSession.winType`. Returns `true` if Big Win dialog should be presented.

---

## 3. Un-truncated Source Code Implementation
```typescript
isBigWin(): boolean {
    let { bigWinAmount, winType } = this.playSession;
    return !!bigWinAmount && !!winType;
}
```
