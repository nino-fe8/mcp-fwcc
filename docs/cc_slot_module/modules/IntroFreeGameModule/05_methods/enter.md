---
id: "cc_slot_module:IntroFreeGameModule:methods:enter"
title: "IntroFreeGameModule.enter Method"
category: "cc_slot_module"
tags: ["IntroFreeGameModule", "intro_free_game_module", "cc_slot_module", "methods", "enter"]
---

# 📖 `IntroFreeGameModule.enter()`

<!-- convention-summary-start -->
### IntroFreeGameModule.enter Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroFreeGameModule.enter Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Overridden lifecycle hook that schedules automated modal exit after `timeShow` seconds.

```typescript
public enter(): void
```

---

## 2. Complete Source Code Implementation

```typescript
enter(): void {
    this.scheduleOnce(this.exit, this.timeShow);
}
```
