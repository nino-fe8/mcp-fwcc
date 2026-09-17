---
id: "cc_slot_module:PortraitBetModule:gotchas:01_inverted_active_logic_gotcha"
title: "Inverted Active Logic Gotcha"
category: "cc_slot_module"
tags: ["PortraitBetModule", "portraitbetmodule", "cc_slot_module", "gotchas", "active_logic"]
---

# ⚠️ Inverted Active Logic Gotcha

<!-- convention-summary-start -->
### Inverted Active Logic Gotcha Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Inverted Active Logic Gotcha.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Defect & Solution

Note that `this.minBetBtn.node.active = !minBetEnable` means the button is visible *only when the bet can still be decreased*:

```typescript
onMinBetEnable(minBetEnable: boolean): void {
    super.onMinBetEnable(minBetEnable);
    this.minBetBtn.node.active = !minBetEnable;
}
```
