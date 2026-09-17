---
id: "cc_slot_module:CascadeModuleConfig:gotchas:uninitialized_positions_array_access"
title: "Gotcha: Uninitialized positions Array Access in onLoad"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "gotchas", "positions", "uninitialized_array"]
---

# ⚠️ Gotcha: Uninitialized `positions` Array Access in `onLoad`

<!-- convention-summary-start -->
### Gotcha: Uninitialized positions Array Access in onLoad Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Uninitialized positions Array Access in onLoad.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

In `CascadeModuleConfig`:
```typescript
public readonly CASCADE_TABLE_CONFIG = {
    format: [3, 3, 3, 3, 3],
    cellSize: new Vec2(180, 160),
    positions: [],
}
```
`positions` is declared as an empty array `[]`. It is populated dynamically at runtime by `VerticalCascadeModule.initLayout()` during its `onLoadExtend()` phase.

If another custom component attempts to read `config.CASCADE_TABLE_CONFIG.positions[col][row]` during `onLoad()` before `VerticalCascadeModule.initLayout()` has executed, it encounters `undefined` or throws `TypeError: Cannot read property of undefined`.

---

## 2. Best Practice

Only read `config.CASCADE_TABLE_CONFIG.positions` during or after `start()`, or call `initLayout()` explicitly before accessing cell coordinates.
