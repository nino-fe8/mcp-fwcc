---
id: "cc_slot_mechanics:CollectionItem:integration:director"
title: "CollectionItem Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["CollectionItem", "collection_item", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `CollectionItem` Director & ScriptExecutor Integration

<!-- convention-summary-start -->
### CollectionItem Director & ScriptExecutor Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CollectionItem Director & ScriptExecutor Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Script Writer Command Integration

In the ARK Slot framework, `CollectionItem` hooks directly into the writer command array:

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
| **`COLLECT_SCATTER`** | `GameModeDirector` / `SlotTable` | `CollectionItem` | `{ totalWay, matrix, colIndex }` |
| **`COLLECTION_TARGET_REACHED`** | `GameModeDirector` / `SlotTable` | `CollectionItem` | `{ totalWay, matrix, colIndex }` |
