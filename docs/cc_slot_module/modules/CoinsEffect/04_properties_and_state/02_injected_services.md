---
id: "cc_slot_module:CoinsEffect:properties_and_state:injected_services"
title: "CoinsEffect Injected Dependencies"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "properties", "injected_services"]
---

# 💉 CoinsEffect Injected Dependencies

<!-- convention-summary-start -->
### CoinsEffect Injected Dependencies Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CoinsEffect Injected Dependencies.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Zero IoC Dependencies

`CoinsEffect` extends `cc.Component` directly and relies purely on Inspector property wiring and local node events.
