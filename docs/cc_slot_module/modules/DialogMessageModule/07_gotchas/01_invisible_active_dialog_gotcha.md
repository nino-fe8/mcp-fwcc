---
id: "cc_slot_module:DialogMessageModule:gotchas:01_invisible_active_dialog_gotcha"
title: "Invisible Active Dialog Gotcha"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "gotchas", "opacity_bug"]
---

# ⚠️ Invisible Active Dialog Gotcha

<!-- convention-summary-start -->
### Invisible Active Dialog Gotcha Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Invisible Active Dialog Gotcha.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Defect & Solution

Always set opacity explicitly alongside node active state:

```typescript
showDialog(active: boolean): void {
    this.node.active = active;
    eno.setOpacity(this.node, active ? 255 : 0);
}
```
