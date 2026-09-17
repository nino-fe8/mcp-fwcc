---
id: "cc_slot_module:SlotTablePaylineModule:method:onDestroy"
title: "SlotTablePaylineModule.onDestroy Method"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "methods", "onDestroy"]
---

# 🚀 `SlotTablePaylineModule.onDestroy(): void`

<!-- convention-summary-start -->
### SlotTablePaylineModule.onDestroy Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineModule.onDestroy Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
public onDestroy(): void
```

---

## 2. Trigger Source & Execution Lifecycle

Invoked by Cocos Creator engine when the Payline container node or scene is destroyed.

---

## 3. Algorithmic Steps

Calls `this.unregisterEvents()` to unsubscribe all listeners from `this.moduleEvent`.

---

## 4. Full Source Code

```typescript
onDestroy(): void {
    this.unregisterEvents();
}
```
