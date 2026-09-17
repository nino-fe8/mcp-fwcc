---
id: "cc_slot_module:CoinsEffect:properties_and_state:inspector_properties"
title: "CoinsEffect Inspector Properties Specification"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ CoinsEffect Inspector Properties Specification

<!-- convention-summary-start -->
### CoinsEffect Inspector Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CoinsEffect Inspector Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `coinParticles` | `cc.ParticleSystem[]` | `[]` | Array of particle system components emitting coin showers. |
