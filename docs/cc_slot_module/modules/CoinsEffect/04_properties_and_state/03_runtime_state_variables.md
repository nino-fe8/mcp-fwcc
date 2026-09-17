---
id: "cc_slot_module:CoinsEffect:properties_and_state:runtime_state_variables"
title: "CoinsEffect Runtime State"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 CoinsEffect Runtime State

<!-- convention-summary-start -->
### CoinsEffect Runtime State Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CoinsEffect Runtime State.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Stateless Design

`CoinsEffect` manages state directly through the underlying `cc.ParticleSystem` instances.
