---
id: "cc_slot_module:SlotTablePaylineData:method:isRightPayLine"
title: "SlotTablePaylineData.isRightPayLine Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "methods", "isRightPayLine"]
---

# 🚀 `SlotTablePaylineData.isRightPayLine(rawPayLine): boolean`

<!-- convention-summary-start -->
### SlotTablePaylineData.isRightPayLine Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineData.isRightPayLine Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected isRightPayLine(rawPayLine: string): boolean
```

---

## 2. Algorithmic Steps

Splits the raw backend payline string by `";"` and inspects whether the final segment includes `"R"`.

---

## 3. Full Source Code

```typescript
protected isRightPayLine(rawPayLine: string): boolean {
    const arr = rawPayLine.split(";");
    const lastElement = arr[arr.length - 1];
    return lastElement.includes("R");
}
```
