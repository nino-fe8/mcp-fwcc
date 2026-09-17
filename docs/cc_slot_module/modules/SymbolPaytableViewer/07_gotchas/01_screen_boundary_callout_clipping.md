---
id: "cc_slot_module:SymbolPaytableViewer:gotchas:01_screen_boundary_callout_clipping"
title: "Screen Boundary Callout Clipping"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "gotchas", "clipping"]
---

# ⚠️ Screen Boundary Callout Clipping

<!-- convention-summary-start -->
### Screen Boundary Callout Clipping Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Screen Boundary Callout Clipping.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Solution

Flip horizontal layout direction based on `colIndex <= midIndex`:

```typescript
direction: colIndex <= midIndex 
    ? Layout.HorizontalDirection.LEFT_TO_RIGHT 
    : Layout.HorizontalDirection.RIGHT_TO_LEFT
```
