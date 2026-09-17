---
id: "cc_slot_module:IntroGameModule:gotchas:index"
title: "IntroGameModule Gotchas & Engine Defects Index"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ IntroGameModule Gotchas & Engine Defects Index

<!-- convention-summary-start -->
### IntroGameModule Gotchas & Engine Defects Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroGameModule Gotchas & Engine Defects Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_local_storage_parse_corrupt_crash.md`
- **Related Docs**: [`01_local_storage_parse_corrupt_crash`](./01_local_storage_parse_corrupt_crash.md)
<!-- convention-summary-end -->


---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_local_storage_parse_corrupt_crash`](./01_local_storage_parse_corrupt_crash.md)** | Corrupted `localStorage` Data Throws `JSON.parse` Exception | HIGH | Non-JSON text in `sys.localStorage.getItem("HideIntroGame")` throws syntax error, preventing game startup. |
