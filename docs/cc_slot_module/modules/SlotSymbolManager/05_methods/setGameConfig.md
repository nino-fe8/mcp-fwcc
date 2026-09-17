---
id: "cc_slot_module:SlotSymbolManager:method:setGameConfig"
title: "SlotSymbolManager.setGameConfig() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "setGameConfig", "layerConfig"]
---

# `SlotSymbolManager.setGameConfig(gameConfig: GameConfig): void`

<!-- convention-summary-start -->
### SlotSymbolManager.setGameConfig() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolManager.setGameConfig() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public setGameConfig(gameConfig: GameConfig): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Stores reference: `this.gameConfig = gameConfig`.
2. Resets `this.layerConfig = {}`.
3. Iterates over `gameConfig.SYMBOL_CONFIG`:
   * Reads `symbolConfig.Id` and `symbolConfig.Priority`.
   * Maps `this.layerConfig[symbolConfig.Id] = symbolConfig.Priority`.

---

## 3. Un-truncated Source Code Implementation
```typescript
setGameConfig(gameConfig: GameConfig): void {
    this.gameConfig = gameConfig;
    this.layerConfig = {};
    for (const key in gameConfig.SYMBOL_CONFIG) {
        const symbolConfig = gameConfig.SYMBOL_CONFIG[key];
        this.layerConfig[symbolConfig.Id] = symbolConfig.Priority;
    }
}
```
