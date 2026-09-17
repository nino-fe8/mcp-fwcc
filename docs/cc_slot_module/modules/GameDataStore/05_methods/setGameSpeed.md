---
id: "cc_slot_module:GameDataStore:method:setGameSpeed"
title: "GameDataStore.setGameSpeed() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "setGameSpeed"]
---

# `GameDataStore.setGameSpeed(speed: number): void`

<!-- convention-summary-start -->
### GameDataStore.setGameSpeed() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDataStore.setGameSpeed() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
setGameSpeed(speed: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
Stores current spin speed tier: `this.gameSpeed = speed`.

---

## 3. Un-truncated Source Code Implementation
```typescript
setGameSpeed(speed: number): void {
    this.gameSpeed = speed;
}
```
