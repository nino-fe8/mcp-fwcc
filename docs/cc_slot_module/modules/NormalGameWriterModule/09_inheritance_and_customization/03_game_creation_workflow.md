---
id: "cc_slot_module:NormalGameWriterModule:customization:game_creation_workflow"
title: "Game Creation Workflow: Writing Custom Base Game Script Queues"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Writing Custom Base Game Script Queues

<!-- convention-summary-start -->
### Game Creation Workflow: Writing Custom Base Game Script Queues Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Game Creation Workflow: Writing Custom Base Game Script Queues.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `scripts/GameMode/NormalGameWriterModule[GameId].ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


Follow this 4-step checklist when modifying base game spin queues:

---

## Step 1: Create Custom Writer Subclass
Create `scripts/GameMode/NormalGameWriterModule[GameId].ts`:
```typescript
@ccclass("NormalGameWriterModule9666")
export default class NormalGameWriterModule9666 extends NormalGameWriterModule {
    // Custom makeScript definitions
}
```

---

## Step 2: Define New Action Methods
Prefix your method name with `makeScript`:
```typescript
makeScriptShowExpandingWilds(data: any): Object[] {
    return [
        { command: "PLAY_EXPAND_WILD_SFX" },
        { command: "EXPAND_WILD_COLUMNS", data },
        { command: "CALCULATE_WAY_PAYS", data }
    ];
}
```

---

## Step 3: Implement Command Handlers on Companion Director
On `NormalGameDirectorModule[GameId]`:
```typescript
async EXPAND_WILD_COLUMNS(data: any): Promise<void> {
    await this.wildModule.expandWild(data.wildColumns);
}
```

---

## Step 4: Dispatch Action via `runAction`
Inside the director spin sequence:
```typescript
await this.runAction("ShowExpandingWilds", spinData);
```
