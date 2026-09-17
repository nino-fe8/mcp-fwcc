---
id: "cc_core_lib:HowlerSoundPlayer:api:properties"
title: "HowlerSoundPlayer Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["HowlerSoundPlayer", "howler_sound_player", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `HowlerSoundPlayer` Detailed Properties & Schema

<!-- convention-summary-start -->
### HowlerSoundPlayer Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for HowlerSoundPlayer Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`currentMusic`** | `any` | Currently playing background music sound ID or audio descriptor. |
| **`_musicTween`** | `any` | Active `cc.Tween` instance handling BGM volume fading or cross-fading. |

---

## 2. State Mutation Guardrails

All state fields in `HowlerSoundPlayer` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
