---
id: "cc_slot_module:PaylineInfoModule:gotchas:missing_symbol_sprite_frame_mapping"
title: "Gotcha: Unmapped Small Symbol Sprite Assets"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "gotchas", "sprite_mapping"]
---

# ⚠️ Gotcha: Unmapped Small Symbol Sprite Assets

<!-- convention-summary-start -->
### Gotcha: Unmapped Small Symbol Sprite Assets Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Unmapped Small Symbol Sprite Assets.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

`_symbolAssets` maps sprite frame asset names to lookup keys. If sprite frame asset names do not match `${smallSymbolPrefix}${symbolId}`, `sprSymbol.spriteFrame` resolves to `undefined` and leaves the thumbnail blank.

---

## 2. Prevention

Ensure sprite frame asset names match symbol definitions (e.g. `sym_A`, `sym_K`, `sym_10`) and assign `smallSymbolPrefix = "sym_"`.
