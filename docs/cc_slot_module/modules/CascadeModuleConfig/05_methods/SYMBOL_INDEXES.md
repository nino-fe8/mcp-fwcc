---
id: "cc_slot_module:CascadeModuleConfig:methods:SYMBOL_INDEXES"
title: "CascadeModuleConfig.SYMBOL_INDEXES Getter"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "methods", "SYMBOL_INDEXES", "SlotUtils"]
---

# 📖 `CascadeModuleConfig.SYMBOL_INDEXES`

<!-- convention-summary-start -->
### CascadeModuleConfig.SYMBOL_INDEXES Getter Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CascadeModuleConfig.SYMBOL_INDEXES Getter.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Getter Overview & Signature

Returns the cached 2D matrix of symbol index coordinates generated via `eno.SlotUtils.generateSymbolIndexes()`.

```typescript
public get SYMBOL_INDEXES(): number[][]
```

---

## 2. Complete Source Code Implementation

```typescript
public get SYMBOL_INDEXES(): number[][] {
    if (this._symbolIndexes === null) {
        this._symbolIndexes = eno.SlotUtils.generateSymbolIndexes(this.CASCADE_TABLE_CONFIG.format);
    }
    return this._symbolIndexes;
}
```
