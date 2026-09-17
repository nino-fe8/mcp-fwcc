---
id: "cc_slot_module:BaseDataModule:gotcha:missing_registered_keys_no_update"
title: "Gotcha: Missing or Misspelled registeredKeys Silently Skips Updates"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "gotchas", "registeredKeys"]
---

# ⚠️ Gotcha: Missing or Misspelled registeredKeys Silently Skips Updates

<!-- convention-summary-start -->
### Gotcha: Missing or Misspelled registeredKeys Silently Skips Updates Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Missing or Misspelled registeredKeys Silently Skips Updates.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Defect Symptom
Server emits spin payload with `cascadeMatrix`, but `CascadeModuleData` never triggers and UI reels do not update.

---

## 2. Root Cause Analysis
`GameDataStore.updateDataModules()` only delivers updates for keys matching the module's `registeredKeys`:
```typescript
if (module.registeredKeys.includes(key)) {
    module.onDataUpdate(key, dataStore.playSession[key]);
}
```
If `registeredKeys` is empty or case does not match (e.g. `cascadematrix` vs `cascadeMatrix`), no error is thrown, but state slice is completely ignored.

---

## 3. Recommended Resolution
Always explicitly declare exact key names:
```typescript
public registeredKeys: string[] = ['cascadeMatrix', 'cascadeMultiplier'];
```
