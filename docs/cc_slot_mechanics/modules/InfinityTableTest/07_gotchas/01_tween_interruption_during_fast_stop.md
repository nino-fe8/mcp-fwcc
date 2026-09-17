---
id: "cc_slot_mechanics:InfinityTableTest:gotchas:tween_interruption"
title: "InfinityTableTest Gotcha: Tween Cancellation during Fast Stop"
category: "cc_slot_mechanics"
tags: ["InfinityTableTest", "infinity_table_test", "cc_slot_mechanics", "gotchas", "fast_stop"]
---

# ⚠️ InfinityTableTest Gotcha: Tween Cancellation during Fast Stop

<!-- convention-summary-start -->
### InfinityTableTest Gotcha: Tween Cancellation during Fast Stop Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfinityTableTest Gotcha: Tween Cancellation during Fast Stop.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Symptom & Fix
During Fast-To-Result (FTR) or rapid spin button tapping, ongoing animation tweens must be halted cleanly using `resetAllEffectAndTasks()` to prevent visual desynchronization.
