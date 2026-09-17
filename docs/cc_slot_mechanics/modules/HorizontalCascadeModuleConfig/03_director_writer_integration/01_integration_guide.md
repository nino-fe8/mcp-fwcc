---
id: "cc_slot_mechanics:HorizontalCascadeModuleConfig:integration:director"
title: "HorizontalCascadeModuleConfig Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["HorizontalCascadeModuleConfig", "horizontal_cascade_module_config", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `HorizontalCascadeModuleConfig` Director & ScriptExecutor Integration

<!-- convention-summary-start -->
### HorizontalCascadeModuleConfig Director & ScriptExecutor Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for HorizontalCascadeModuleConfig Director & ScriptExecutor Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Script Writer Command Integration

In the ARK Slot framework, `HorizontalCascadeModuleConfig` hooks directly into the writer command array:

```typescript
makeScriptStartSpinning(): Object[] {
    const listScript = [];
    listScript.push({
        command: "_startSpinningTable",
    });
    return listScript;
}
```

---

## 2. Director Event Handlers

| Event Name | Source | Listener Module | Functional Payload |
| :--- | :--- | :--- | :--- |
| **`TABLE_START_RESPIN`** | `GameModeDirector` / `SlotTable` | `HorizontalCascadeModuleConfig` | `{ totalWay, matrix, colIndex }` |
| **`CASCADE_DROP_COMPLETED`** | `GameModeDirector` / `SlotTable` | `HorizontalCascadeModuleConfig` | `{ totalWay, matrix, colIndex }` |
| **`DISAPPEAR_ANIM_END`** | `GameModeDirector` / `SlotTable` | `HorizontalCascadeModuleConfig` | `{ totalWay, matrix, colIndex }` |
