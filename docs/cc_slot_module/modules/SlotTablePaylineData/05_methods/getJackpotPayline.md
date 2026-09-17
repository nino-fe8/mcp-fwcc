---
id: "cc_slot_module:SlotTablePaylineData:method:getJackpotPayline"
title: "SlotTablePaylineData.getJackpotPayline Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "methods", "getJackpotPayline"]
---

# 🚀 `SlotTablePaylineData.getJackpotPayline(): Object`

<!-- convention-summary-start -->
### SlotTablePaylineData.getJackpotPayline Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineData.getJackpotPayline Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
public getJackpotPayline(): Object
```

---

## 2. Algorithmic Steps

Delegates to `convertJackpotPayline()`.

---

## 3. Full Source Code

```typescript
getJackpotPayline(): Object {
    const convertedPayLine = this.convertJackpotPayline();
    return convertedPayLine;
}
```
