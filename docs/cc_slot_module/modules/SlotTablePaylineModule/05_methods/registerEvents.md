---
id: "cc_slot_module:SlotTablePaylineModule:method:registerEvents"
title: "SlotTablePaylineModule.registerEvents Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "methods", "registerEvents"]
---

# 🚀 `SlotTablePaylineModule.registerEvents(): void`

<!-- convention-summary-start -->
### SlotTablePaylineModule.registerEvents Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineModule.registerEvents Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected registerEvents(): void
```

---

## 2. Trigger Source & Execution Lifecycle

Invoked by `SlotBaseModule` during initialization. Binds listeners to `this.moduleEvent`.

---

## 3. Algorithmic Steps

1. Subscribes `this.moduleEvent.on("SETUP_PAYLINES", this.onSetupPaylines, this)`.
2. Subscribes `this.moduleEvent.on("TABLE_FORMAT_CHANGED", this.onTableFormatChanged, this)`.

---

## 4. Full Source Code

```typescript
protected registerEvents(): void {
    this.moduleEvent.on("SETUP_PAYLINES", this.onSetupPaylines, this);
    this.moduleEvent.on("TABLE_FORMAT_CHANGED", this.onTableFormatChanged, this);
}
```
