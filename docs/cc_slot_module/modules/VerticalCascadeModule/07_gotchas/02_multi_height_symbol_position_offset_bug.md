---
id: "cc_slot_module:VerticalCascadeModule:gotchas:multi_height_symbol_position_offset_bug"
title: "Gotcha: Y-Offset Miscalculation for 3+ Cell Mega Symbols"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "gotchas", "mega_symbols", "offset_bug"]
---

# ⚠️ Gotcha: Y-Offset Miscalculation for 3+ Cell Mega Symbols

<!-- convention-summary-start -->
### Gotcha: Y-Offset Miscalculation for 3+ Cell Mega Symbols Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Y-Offset Miscalculation for 3+ Cell Mega Symbols.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

Multi-height symbols calculate position using:
```typescript
symbol.setPosition(new cc.Vec2(position.x, position.y + (size - 1) * this.tableConfig.cellSize.y * 0.5));
```
If a slot game has asymmetric cell padding or anchors symbols by center instead of bottom, the multiplier `(size - 1) * cellSize.y * 0.5` causes symbols to appear offset from the grid border. Always verify spine skeleton root bone alignment.
