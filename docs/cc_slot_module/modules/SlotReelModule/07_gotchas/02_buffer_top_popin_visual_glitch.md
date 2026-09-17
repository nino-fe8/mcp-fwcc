---
id: "cc_slot_module:SlotReelModule:gotcha:buffer_top_popin_visual_glitch"
title: "Gotcha: Top Buffer Pop-In Visual Glitch During Fast Spin"
category: "cc_slot_module"
tags: ["SlotReelModule", "slot_reel_module", "cc_slot_module", "gotchas", "buffer_top", "visual_glitch", "popin"]
---

# ⚠️ Gotcha: Top Buffer Pop-In Visual Glitch During Fast Spin

<!-- convention-summary-start -->
### Gotcha: Top Buffer Pop-In Visual Glitch During Fast Spin Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Top Buffer Pop-In Visual Glitch During Fast Spin.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Symptom & Visual Artifact
In Turbo mode, new symbols rolling onto the top of the reel appear suddenly inside the visible viewport mask rather than sliding in smoothly from above the mask frame.

---

## 2. Root Cause
If `BUFFER_TOP` is configured as `1`, but high-speed Turbo moves the column downward by more than $1\times \text{SYMBOL\_HEIGHT}$ per frame, the top buffer node enters the visible screen area before the next `recycleSymbol()` can spawn a replacement above it.

---

## 3. Standard Configuration Fix
In `TableModuleConfig`:
```typescript
export const TableConfig = {
    BUFFER_TOP: 2, // Ensure at least 2 offscreen buffer rows
    BUFFER_BOT: 2,
    // ...
};
```
