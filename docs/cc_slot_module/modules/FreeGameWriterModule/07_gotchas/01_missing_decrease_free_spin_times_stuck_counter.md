---
id: "cc_slot_module:FreeGameWriterModule:gotcha:missing_decrease_free_spin_times_stuck_counter"
title: "Gotcha: Missing decreaseFreeGameSpinTimes Command Freezes Badge Counter"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "gotchas", "spin_counter"]
---

# ⚠️ Gotcha: Missing decreaseFreeGameSpinTimes Command Freezes Badge Counter

<!-- convention-summary-start -->
### Gotcha: Missing decreaseFreeGameSpinTimes Command Freezes Badge Counter Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Missing decreaseFreeGameSpinTimes Command Freezes Badge Counter.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Defect Symptom
The Free Spin counter (e.g. `Spins Left: 10`) stays frozen at 10 while the reels spin, and abruptly jumps to 9 only when the spin finishes.

---

## 2. Root Cause Analysis
In `makeScriptFreeSpinTrigger()`, if `_decreaseFreeGameSpinTimes` is omitted, the counter is not updated at the moment the spin commences.

---

## 3. Recommended Resolution
Ensure `_decreaseFreeGameSpinTimes` is the final setup step in `makeScriptFreeSpinTrigger()`:
```typescript
listScript.push({ command: "_decreaseFreeGameSpinTimes" });
```
