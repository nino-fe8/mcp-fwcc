---
id: "cc_slot_module:NormalGameDirectorModule:customization:game_creation_workflow"
title: "Game Creation Workflow: Base Game Director Setup"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Base Game Director Setup

<!-- convention-summary-start -->
### Game Creation Workflow: Base Game Director Setup Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Game Creation Workflow: Base Game Director Setup.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `scripts/GameMode/NormalGameDirectorModule[GameId].ts`, `NormalGameWriterModule[GameId].ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


Follow this 4-step checklist when setting up the Base Game director:

---

## Step 1: Create Custom Director and Writer Subclasses
Create `scripts/GameMode/NormalGameDirectorModule[GameId].ts` and `NormalGameWriterModule[GameId].ts`.

---

## Step 2: Attach to `Canvas/Director/GameMode/NormalGame`
1. Open scene `g[GameId]L.fire`.
2. Attach the customized director and writer components to node `NormalGame`.
3. Drag child components (`BoardG`, `PaylineModule`) into the `moduleList` array.

---

## Step 3: Wire Writer in `onExtendedLoad()`
```typescript
onExtendedLoad(): void {
    super.onExtendedLoad();
    this.node["director"] = this;
    this.node["writer"] = this.getComponent(NormalGameWriterModule9666);
    this.init();
}
```

---

## Step 4: Validate Authentication and Spins
1. Boot game ➔ Verify `onJoinGameSuccess()` logs and unlocks spin button.
2. Trigger spin ➔ Confirm standard `NormalSpinTrigger` ➔ `StartSpinning` ➔ `StopSpinningTable` sequence runs smoothly.
