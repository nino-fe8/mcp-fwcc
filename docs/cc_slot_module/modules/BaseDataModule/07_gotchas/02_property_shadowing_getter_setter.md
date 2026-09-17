---
id: "cc_slot_module:BaseDataModule:gotcha:property_shadowing_getter_setter"
title: "Gotcha: Property Shadowing Destroys Custom Class Methods"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "gotchas", "property_shadowing"]
---

# ⚠️ Gotcha: Property Shadowing Destroys Custom Class Methods

<!-- convention-summary-start -->
### Gotcha: Property Shadowing Destroys Custom Class Methods Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Property Shadowing Destroys Custom Class Methods.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Defect Symptom
Calling `tableData.matrix()` throws `TypeError: this.matrix is not a function`.

---

## 2. Root Cause Analysis
`BaseDataModule.onDataUpdate(key, value)` executes:
```typescript
this[key] = value;
```
If a subclass declared a method named `matrix()`, setting `this['matrix'] = [[...]]` overwrites the prototype method on the instance with raw data.

---

## 3. Recommended Resolution
Name methods with descriptive prefixes (`getMatrix()`, `parseMatrix()`) or override `onDataUpdate`:
```typescript
onDataUpdate(key: string, value: any): void {
    if (key === 'matrix') {
        this._parsedMatrix = this.formatMatrix(value);
    }
}
```
