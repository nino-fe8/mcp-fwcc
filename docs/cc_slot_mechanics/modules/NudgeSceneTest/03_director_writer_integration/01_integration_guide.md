---
id: "cc_slot_mechanics:NudgeSceneTest:integration:director"
title: "NudgeSceneTest Director & ScriptExecutor Integration"
category: "cc_slot_mechanics"
tags: ["NudgeSceneTest", "nudge_scene_test", "cc_slot_mechanics", "integration", "director"]
---

# 🔌 `NudgeSceneTest` Director & ScriptExecutor Integration

<!-- convention-summary-start -->
### NudgeSceneTest Director & ScriptExecutor Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NudgeSceneTest Director & ScriptExecutor Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Script Writer Command Integration

In the ARK Slot framework, `NudgeSceneTest` hooks directly into the writer command array:

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
| **`NUDGE_REEL_START`** | `GameModeDirector` / `SlotTable` | `NudgeSceneTest` | `{ totalWay, matrix, colIndex }` |
| **`NUDGE_STEP_COMPLETE`** | `GameModeDirector` / `SlotTable` | `NudgeSceneTest` | `{ totalWay, matrix, colIndex }` |
