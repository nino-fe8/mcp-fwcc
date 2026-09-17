---
id: "cc_slot_module:TurboButton:properties_and_state:inspector_properties"
title: "TurboButton Inspector Properties Specification"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ TurboButton Inspector Properties Specification

<!-- convention-summary-start -->
### TurboButton Inspector Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TurboButton Inspector Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `display` | `cc.Node` | `null` | Visual node holding Turbo state sprites or Spine animations. |
| `sfxTurboOn` | `string` | `"BTN_TURBO_ON"` | Sound clip played when enabling Turbo mode. |
| `sfxTurboOff`| `string` | `"BTN_TURBO_OFF"`| Sound clip played when disabling Turbo mode. |
