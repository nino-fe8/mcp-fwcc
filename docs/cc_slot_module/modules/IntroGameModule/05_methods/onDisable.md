---
id: "cc_slot_module:IntroGameModule:methods:onDisable"
title: "IntroGameModule.onDisable Method"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "methods", "onDisable"]
---

# 📖 `IntroGameModule.onDisable()`

<!-- convention-summary-start -->
### IntroGameModule.onDisable Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroGameModule.onDisable Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Stops all active node actions and tweens when the component is deactivated.

```typescript
public onDisable(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDisable(): void {
    this.node.stopAllActions();
}
```
