---
id: "cc_slot_module:PaylineFactory:properties_and_state:inspector_properties"
title: "PaylineFactory Inspector Properties Specification"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ PaylineFactory Inspector Properties Specification

<!-- convention-summary-start -->
### PaylineFactory Inspector Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineFactory Inspector Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema

```typescript
@ccclass('PoolItem')
export class PoolItem {
    @property() name: string = '';
    @property(cc.Prefab) prefab: cc.Prefab = null;
    @property() initCount: number = 0;
}
```

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `poolItems` | `PoolItem[]` | `[]` | List of prefab pool configurations. |
