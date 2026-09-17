---
id: "cc_slot_module:SlotTablePaylineData:method:onloadExtend"
title: "SlotTablePaylineData.onloadExtend Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "methods", "onloadExtend"]
---

# 🚀 `SlotTablePaylineData.onloadExtend(): void`

<!-- convention-summary-start -->
### SlotTablePaylineData.onloadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineData.onloadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
public onloadExtend(): void
```

---

## 2. Trigger Source & Execution Lifecycle

Invoked by `BaseDataModule.onLoad()` during component instantiation.

---

## 3. Algorithmic Steps

Queries and caches `this.config = this.getComponent(PaylineConfig)`.

---

## 4. Full Source Code

```typescript
onloadExtend(): void {
    this.config = this.getComponent(PaylineConfig);
}
```
