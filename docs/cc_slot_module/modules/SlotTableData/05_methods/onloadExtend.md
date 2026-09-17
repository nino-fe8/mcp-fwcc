---
id: "cc_slot_module:SlotTableData:method:onloadExtend"
title: "SlotTableData.onloadExtend() Method Specification"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "method", "onloadExtend", "co_location"]
---

# `SlotTableData.onloadExtend(): void`

<!-- convention-summary-start -->
### SlotTableData.onloadExtend() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableData.onloadExtend() Method Specification.
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

## 2. Trigger Source & Lifecycle
* **Invoker**: Called by `BaseDataModule.onLoad()` during component initialization.

---

## 3. Detailed Algorithmic Execution Logic
1. Queries the co-located sibling component `TableModuleConfig` on the same node via `this.getComponent(TableModuleConfig)`.
2. Stores the reference in `this.config`.

---

## 4. Un-truncated Source Code Implementation
```typescript
onloadExtend(): void {
	this.config = this.getComponent(TableModuleConfig);
}
```
