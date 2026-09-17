---
id: "cc_slot_mechanics:TransformSymbolVFX:integration:director"
title: "TransformSymbolVFX Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["TransformSymbolVFX", "transform_symbol_vfx", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `TransformSymbolVFX` Director & ScriptExecutor Integration

<!-- convention-summary-start -->
### TransformSymbolVFX Director & ScriptExecutor Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TransformSymbolVFX Director & ScriptExecutor Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Script Writer Command Integration

In the ARK Slot framework, `TransformSymbolVFX` hooks directly into the writer command array:

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
| **`TRANSFORM_SYMBOL_TO_WILD`** | `GameModeDirector` / `SlotTable` | `TransformSymbolVFX` | `{ totalWay, matrix, colIndex }` |
| **`FRAME_TIER_UPGRADE`** | `GameModeDirector` / `SlotTable` | `TransformSymbolVFX` | `{ totalWay, matrix, colIndex }` |
| **`PLAY_TRANSFORM_VFX`** | `GameModeDirector` / `SlotTable` | `TransformSymbolVFX` | `{ totalWay, matrix, colIndex }` |
