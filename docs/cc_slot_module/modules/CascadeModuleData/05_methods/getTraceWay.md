---
id: "cc_slot_module:CascadeModuleData:methods:getTraceWay"
title: "CascadeModuleData.getTraceWay Method"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "methods", "getTraceWay"]
---

# 📖 `CascadeModuleData.getTraceWay()`

<!-- convention-summary-start -->
### CascadeModuleData.getTraceWay Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CascadeModuleData.getTraceWay Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Sorts and returns the winning symbol coordinate indexes.

```typescript
public getTraceWay(): number[]
```

---

## 2. Complete Source Code Implementation

```typescript
getTraceWay(): number[] {
    return this["traceWay"] ? this["traceWay"].sort(function (a, b) {
        return a - b; 
    }) : [];
}
```
