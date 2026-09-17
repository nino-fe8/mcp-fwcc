---
id: "cc_slot_module:GameDirector:customization:game_creation_workflow"
title: "Game Creation Workflow: Configuring the Master GameDirector"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Configuring the Master GameDirector

<!-- convention-summary-start -->
### Game Creation Workflow: Configuring the Master GameDirector Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Game Creation Workflow: Configuring the Master GameDirector.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


Follow this 4-step checklist when setting up the master `GameDirector`:

---

## Step 1: Attach `GameDirector` to `Canvas/Director`
Open `g[GameId]L.fire` and attach `GameDirector` to the `Canvas/Director` node.

---

## Step 2: Configure `gameModes` Array in Inspector
Add elements for:
1. `NORMAL_GAME` ➔ Drag `Canvas/Director/GameMode/NormalGame`.
2. `FREE_GAME` ➔ Drag `Canvas/Director/GameMode/FreeGame`.
3. `BONUS_GAME` ➔ Drag `Canvas/Director/GameMode/BonusGame`.

---

## Step 3: Verify Game Mode Nodes Implement `BaseGameMode`
Ensure all mode container nodes have scripts extending `BaseGameMode` or `GameModeDirectorModule`.

---

## Step 4: Validate Mode Stack Switching
1. Boot game ➔ Verify Normal Game activates.
2. Trigger Free Game ➔ Verify Normal Game node deactivates and Free Game enters.
3. Finish Free Game ➔ Verify Normal Game node reactivates and calls `onBackToGameMode()`.
