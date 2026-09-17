---
id: "cc_slot_module:JackpotWinModule:methods:exit"
title: "JackpotWinModule.exit Method"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "methods", "exit"]
---

# 📖 `JackpotWinModule.exit()`

<!-- convention-summary-start -->
### JackpotWinModule.exit Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinModule.exit Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Restores main background music and invokes `super.exit()`.

```typescript
public exit(): void
```

---

## 2. Complete Source Code Implementation

```typescript
exit(): void {
    this.resumeMainBGM();
    super.exit();
}
```
