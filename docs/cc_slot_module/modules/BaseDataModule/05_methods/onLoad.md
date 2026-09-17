---
id: "cc_slot_module:BaseDataModule:method:onLoad"
title: "BaseDataModule.onLoad() Method Specification"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "method", "onLoad", "lifecycle"]
---

# `BaseDataModule.onLoad(): void`

<!-- convention-summary-start -->
### BaseDataModule.onLoad() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseDataModule.onLoad() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
onLoad(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Finds sibling `SlotBaseModule` via `this.baseMode = this.getComponent(SlotBaseModule)`.
2. Sets `this.gameMode = this.baseMode.gameMode`.
3. Resolves IoC injections: `applyInjections(this, this.baseMode.gameLogic.getGameId())`.
4. Calls virtual subclass initialization hook: `this.onloadExtend()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
onLoad(): void {
    this.baseMode = this.getComponent(SlotBaseModule);
    this.gameMode = this.baseMode.gameMode;
    applyInjections(this, this.baseMode.gameLogic.getGameId());
    this.onloadExtend();
}
```
