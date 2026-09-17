---
id: "cc_slot_module:CascadeModuleData:properties_and_state:inspector_properties"
title: "CascadeModuleData Properties Specification"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ CascadeModuleData Properties Specification

<!-- convention-summary-start -->
### CascadeModuleData Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CascadeModuleData Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Registered Reactive Keys

```typescript
registeredKeys = ["matrix0", "matrix", "normalGameMatrix", "freeGameMatrix", "traceWay"];
```

| Key Name | Ingestion Source | Purpose |
| :--- | :--- | :--- |
| `matrix` / `matrix0` | Server session payload | Active round symbol matrix. |
| `normalGameMatrix` | Server Normal Game | Main game specific matrix array. |
| `freeGameMatrix` | Server Free Game | Free spins specific matrix array. |
| `traceWay` | Server hit payload | Flat integer array of winning symbol indexes to eliminate. |
