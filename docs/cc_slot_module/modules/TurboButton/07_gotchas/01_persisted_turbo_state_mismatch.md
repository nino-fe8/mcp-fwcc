---
id: "cc_slot_module:TurboButton:gotchas:persisted_turbo_state_mismatch"
title: "Gotcha: Local Storage Turbo Desync on Launch"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "gotchas", "local_storage"]
---

# ⚠️ Gotcha: Local Storage Turbo Desync on Launch

<!-- convention-summary-start -->
### Gotcha: Local Storage Turbo Desync on Launch Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Local Storage Turbo Desync on Launch.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

If game bootstrap fails to broadcast `GameUIEvents.TURBO.LOAD_CACHE_TURBO`, the visual button displays cached state from the model, but `SlotGameSettings.isTurboActive` remains `false`.

---

## 2. Prevention

Ensure `SlotGameBoot` or `UIManagerModule` triggers `LOAD_CACHE_TURBO` immediately upon completing scene hydration.
