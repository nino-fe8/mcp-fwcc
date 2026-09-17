---
id: "cc_slot_module:BaseDataModule:method:isFreeMode"
title: "BaseDataModule.isFreeMode() Method Specification"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "method", "isFreeMode"]
---

# `BaseDataModule.isFreeMode(): boolean`

<!-- convention-summary-start -->
### BaseDataModule.isFreeMode() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseDataModule.isFreeMode() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
isFreeMode(): boolean
```

---

## 2. Detailed Algorithmic Execution Logic
Tests `this.gameMode` against `FREE_GAME`, `FREE_GAME_1`, `FREE_GAME_2`, `FREE_GAME_3`, `FREE_GAME_4`. Returns `true` if matched, `false` otherwise.

---

## 3. Un-truncated Source Code Implementation
```typescript
isFreeMode(): boolean {
    switch (this.gameMode) {
        case GAME_MODE_ENUM.FREE_GAME:
        case GAME_MODE_ENUM.FREE_GAME_1:
        case GAME_MODE_ENUM.FREE_GAME_2:
        case GAME_MODE_ENUM.FREE_GAME_3:
        case GAME_MODE_ENUM.FREE_GAME_4:
            return true;
    }
    return false;
}
```
