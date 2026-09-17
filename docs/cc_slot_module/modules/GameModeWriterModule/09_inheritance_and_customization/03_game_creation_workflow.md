---
id: "cc_slot_module:GameModeWriterModule:customization:game_creation_workflow"
title: "Game Creation Workflow: Authoring Declarative Action Pipelines"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Authoring Declarative Action Pipelines

<!-- convention-summary-start -->
### Game Creation Workflow: Authoring Declarative Action Pipelines Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Game Creation Workflow: Authoring Declarative Action Pipelines.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `scripts/GameMode/CustomModeWriterModule.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


Follow this 3-step checklist when authoring declarative action pipelines:

---

## Step 1: Subclass `GameModeWriterModule`
Create `scripts/GameMode/CustomModeWriterModule.ts`.

---

## Step 2: Override or Add `makeScript` Methods
Assemble command objects in the desired chronological execution order:
```typescript
makeScriptStopSpinningTable(data: any): Object[] {
    let listScript = [];
    listScript.push({ command: "_stopSpinningTable", data });
    listScript.push({ command: "_customFeatureEffect", data });
    listScript.push({ command: "_setUpPaylines", data });
    return listScript;
}
```

---

## Step 3: Implement Command Handlers on Companion Director
On companion director, declare `async _customFeatureEffect(data)` returning a Promise.
