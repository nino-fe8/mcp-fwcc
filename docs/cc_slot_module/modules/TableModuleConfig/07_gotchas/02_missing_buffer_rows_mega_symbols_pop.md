---
id: "cc_slot_module:TableModuleConfig:gotcha:missing_buffer_rows_mega_symbols_pop"
title: "Gotcha: Insufficient Buffer Rows Causes Mega Symbol Visual Popping"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "gotchas", "mega_symbols", "buffer_rows"]
---

# ⚠️ Gotcha: Insufficient Buffer Rows Causes Mega Symbol Visual Popping

<!-- convention-summary-start -->
### Gotcha: Insufficient Buffer Rows Causes Mega Symbol Visual Popping Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Insufficient Buffer Rows Causes Mega Symbol Visual Popping.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Defect Symptom
In games featuring 2x2 or 3x3 Mega Symbols (Gigablox), symbols pop in abruptly at the top of the visible table mask during reel spins instead of sliding smoothly into view.

---

## 2. Root Cause Analysis
Default `BUFFER_TOP = 1` only allocates a 1-row margin above the viewport. For a 3x3 Mega Symbol, parts of the top 2 rows remain unrendered outside the buffer, creating an abrupt visual snap when entering the mask boundary.

---

## 3. Recommended Resolution
For games with Mega Symbols of height $H$, configure:
```typescript
public BUFFER_TOP: number = 3;
public BUFFER_BOT: number = 3;
```
