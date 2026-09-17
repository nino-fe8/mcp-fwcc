---
id: "cc_slot_module:SlotSymbolManager:gotcha:node_pool_leak_on_unreturned_symbols"
title: "Gotcha: NodePool Depletion Leak on Unreturned Symbols"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "gotchas", "pool_leak"]
---

# ⚠️ Gotcha: NodePool Depletion Leak on Unreturned Symbols

<!-- convention-summary-start -->
### Gotcha: NodePool Depletion Leak on Unreturned Symbols Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: NodePool Depletion Leak on Unreturned Symbols.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Defect Symptom
As the player spins hundreds of times, memory allocation steadily climbs, and FPS drops due to frequent instantiate calls and GC sweeps.

---

## 2. Root Cause Analysis
If custom reel spin animations borrow blur symbols via `createBlurSymbol()` but fail to invoke `returnSymbol(node)` when reels come to rest, nodes accumulate in `usingSymbols` and are never returned to `symbolPool`.

---

## 3. Recommended Resolution
Always pair every `createSymbol()` / `createBlurSymbol()` invocation with a matching `returnSymbol(node)` call upon reel stop.
