---
id: "cc_slot_mechanics:SlotTableMegaModule:integration:director"
title: "SlotTableMegaModule Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["SlotTableMegaModule", "slot_table_mega_module", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `SlotTableMegaModule` Director & ScriptExecutor Integration

<!-- convention-summary-start -->
### SlotTableMegaModule Director & ScriptExecutor Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableMegaModule Director & ScriptExecutor Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Script Writer Command Integration

In the ARK Slot framework, `SlotTableMegaModule` hooks directly into the writer command array:

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
| **`MEGA_REEL_LINK`** | `GameModeDirector` / `SlotTable` | `SlotTableMegaModule` | `{ totalWay, matrix, colIndex }` |
| **`MEGA_REEL_UNLINK`** | `GameModeDirector` / `SlotTable` | `SlotTableMegaModule` | `{ totalWay, matrix, colIndex }` |
