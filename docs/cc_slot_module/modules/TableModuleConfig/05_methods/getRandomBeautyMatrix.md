---
id: "cc_slot_module:TableModuleConfig:method:getRandomBeautyMatrix"
title: "TableModuleConfig.getRandomBeautyMatrix() Method Specification"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "method", "getRandomBeautyMatrix", "attract_mode"]
---

# `TableModuleConfig.getRandomBeautyMatrix(): string[][]`

<!-- convention-summary-start -->
### TableModuleConfig.getRandomBeautyMatrix() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TableModuleConfig.getRandomBeautyMatrix() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public getRandomBeautyMatrix(): string[][]
```

---

## 2. Detailed Algorithmic Execution Logic
Picks a random index from `this.BEAUTY_MATRIX` array and returns that curated symbol matrix.

---

## 3. Un-truncated Source Code Implementation
```typescript
public getRandomBeautyMatrix(): string[][] {
    const randomIndex = Math.floor(Math.random() * this.BEAUTY_MATRIX.length);
    return this.BEAUTY_MATRIX[randomIndex];
}
```
