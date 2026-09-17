---
id: "cc_slot_module:SlotTablePaylineModule:method:getSchedule"
title: "SlotTablePaylineModule.getSchedule Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "methods", "getSchedule"]
---

# 🚀 `SlotTablePaylineModule.getSchedule(): SlotPaylineSchedule`

<!-- convention-summary-start -->
### SlotTablePaylineModule.getSchedule Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineModule.getSchedule Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected getSchedule(): SlotPaylineSchedule
```

---

## 2. Algorithmic Steps

Retrieves existing `SlotPaylineSchedule` on current node or attaches one dynamically.

---

## 3. Full Source Code

```typescript
protected getSchedule(): SlotPaylineSchedule {
    return this.getComponent(SlotPaylineSchedule) || this.addComponent(SlotPaylineSchedule);
}
```
