---
id: "cc_slot_module:PaylineNumberModule:gotchas:index"
title: "PaylineNumberModule Gotchas & Engine Defects Index"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ PaylineNumberModule Gotchas & Engine Defects Index

<!-- convention-summary-start -->
### PaylineNumberModule Gotchas & Engine Defects Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineNumberModule Gotchas & Engine Defects Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_number_id_naming_mismatch.md`
- **Related Docs**: [`01_number_id_naming_mismatch`](./01_number_id_naming_mismatch.md)
<!-- convention-summary-end -->


---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_number_id_naming_mismatch`](./01_number_id_naming_mismatch.md)** | Auto Node Naming Mismatch (`node.name.split('_')`) | MEDIUM | If badge node name doesn't match `name_ID`, auto `numberID` parsing fails. |
