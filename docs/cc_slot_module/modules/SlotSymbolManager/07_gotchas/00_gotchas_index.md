---
id: "cc_slot_module:SlotSymbolManager:gotchas:index"
title: "SlotSymbolManager Gotchas Index"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ SlotSymbolManager Gotchas Index

<!-- convention-summary-start -->
### SlotSymbolManager Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolManager Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_sticky_symbol_reclaimed_without_isForce.md`, `./02_missing_layer_config_priority_z_order_glitch.md`, `./03_node_pool_leak_on_unreturned_symbols.md`
- **Related Docs**: [`01_sticky_symbol_reclaimed_without_isForce`](./01_sticky_symbol_reclaimed_without_isForce.md), [`02_missing_layer_config_priority_z_order_glitch`](./02_missing_layer_config_priority_z_order_glitch.md), [`03_node_pool_leak_on_unreturned_symbols`](./03_node_pool_leak_on_unreturned_symbols.md)
<!-- convention-summary-end -->


## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_sticky_symbol_reclaimed_without_isForce`](./01_sticky_symbol_reclaimed_without_isForce.md)** | Sticky Wilds disappear unexpectedly on table clear. | `removeSymbol()` called without `isForce = true` on non-sticky symbols or vice-versa. | 🔴 Critical (Game Logic Loss) |
| **[`02_missing_layer_config_priority_z_order_glitch`](./02_missing_layer_config_priority_z_order_glitch.md)** | Wilds/Scatters render behind standard symbols. | `setGameConfig()` omitted or `Priority` missing in `GameConfig.SYMBOL_CONFIG`. | 🟡 High (Visual Glitch) |
| **[`03_node_pool_leak_on_unreturned_symbols`](./03_node_pool_leak_on_unreturned_symbols.md)** | Memory growth and frame rate degradation over extended sessions. | Symbol instances instantiated during blur/reel animation omitted from `returnSymbol()`. | 🟡 High (Memory Leak) |
