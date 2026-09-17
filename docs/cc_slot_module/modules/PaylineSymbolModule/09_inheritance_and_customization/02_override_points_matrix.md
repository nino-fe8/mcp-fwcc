---
id: "cc_slot_module:PaylineSymbolModule:inheritance:override_points_matrix"
title: "PaylineSymbolModule Override Points Matrix"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 PaylineSymbolModule Override Points Matrix

<!-- convention-summary-start -->
### PaylineSymbolModule Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Override Points Matrix

| Method | Safe to Override? | Required `super` | Customization Purpose |
| :--- | :--- | :--- | :--- |
| `playSymbolAnimation` | `YES` | Optional | Custom spine skinning or sound cue pairing. |
| `dimAllPayLines` | `YES` | `RECOMMENDED` | Custom opacity tweening or grayscale shaders. |
| `clearAll` | `NO` | `MANDATORY` | Core pooling safety. |
