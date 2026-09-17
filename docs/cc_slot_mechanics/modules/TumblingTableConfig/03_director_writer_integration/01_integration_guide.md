---
id: "cc_slot_mechanics:TumblingTableConfig:integration:director"
title: "TumblingTableConfig Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["TumblingTableConfig", "tumbling_table_config", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `TumblingTableConfig` Director & ScriptExecutor Integration

<!-- convention-summary-start -->
### TumblingTableConfig Director & ScriptExecutor Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TumblingTableConfig Director & ScriptExecutor Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Script Writer Command Integration

In the ARK Slot framework, `TumblingTableConfig` hooks directly into the writer command array:

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
| **`TUMBLING_DROP_START`** | `GameModeDirector` / `SlotTable` | `TumblingTableConfig` | `{ totalWay, matrix, colIndex }` |
| **`TUMBLING_DROP_SETTLE`** | `GameModeDirector` / `SlotTable` | `TumblingTableConfig` | `{ totalWay, matrix, colIndex }` |
