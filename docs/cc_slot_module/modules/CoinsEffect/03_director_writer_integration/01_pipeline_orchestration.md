---
id: "cc_slot_module:CoinsEffect:director_writer:pipeline_orchestration"
title: "CoinsEffect Pipeline Role & Visual Coordination"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 CoinsEffect Pipeline Role & Visual Coordination

<!-- convention-summary-start -->
### CoinsEffect Pipeline Role & Visual Coordination Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CoinsEffect Pipeline Role & Visual Coordination.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Local Event Coordination

Receives direct node events from parent cutscenes (`WinEffectModule`, `TotalWinModule`):
```text
WinEffectModule.startParticle() ➔ emits "SHOW_COINS_EFFECT" ➔ CoinsEffect
WinEffectModule.stopParticle()  ➔ emits "HIDE_COINS_EFFECT" ➔ CoinsEffect
```
