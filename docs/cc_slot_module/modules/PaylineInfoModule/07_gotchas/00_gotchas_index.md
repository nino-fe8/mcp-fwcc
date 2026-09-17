---
id: "cc_slot_module:PaylineInfoModule:gotchas:index"
title: "PaylineInfoModule Gotchas Index"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ PaylineInfoModule Gotchas Index

<!-- convention-summary-start -->
### PaylineInfoModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineInfoModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_unsupported_pay_system_type_crash.md`, `./02_missing_symbol_sprite_frame_mapping.md`
- **Related Docs**: [`01_unsupported_pay_system_type_crash`](./01_unsupported_pay_system_type_crash.md), [`02_missing_symbol_sprite_frame_mapping`](./02_missing_symbol_sprite_frame_mapping.md)
<!-- convention-summary-end -->


---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_unsupported_pay_system_type_crash`](./01_unsupported_pay_system_type_crash.md)** | Unmatched PAY_SYSTEM Math Type | HIGH | Setting an unhandled `gameConfig.PAY_SYSTEM` returns `undefined` from `convertPayLineInfo`, crashing string destructuring. |
| **[`02_missing_symbol_sprite_frame_mapping`](./02_missing_symbol_sprite_frame_mapping.md)** | Unmapped Small Symbol Sprite Assets | MEDIUM | If `smallSymbolFrames` misses symbol IDs, thumbnail displays null/empty sprite frames. |
