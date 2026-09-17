---
id: "cc_slot_module:SlotTablePaylineModule:method:getPaylineData"
title: "SlotTablePaylineModule.getPaylineData Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "methods", "getPaylineData"]
---

# 🚀 `SlotTablePaylineModule.getPaylineData(): SlotTablePaylineData`

<!-- convention-summary-start -->
### SlotTablePaylineModule.getPaylineData Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineModule.getPaylineData Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected getPaylineData(): SlotTablePaylineData
```

---

## 2. Algorithmic Steps

Retrieves existing `SlotTablePaylineData` component on current node, or adds one dynamically if missing.

---

## 3. Full Source Code

```typescript
protected getPaylineData(): SlotTablePaylineData {
    return this.getComponent(SlotTablePaylineData) || this.addComponent(SlotTablePaylineData);
}
```
