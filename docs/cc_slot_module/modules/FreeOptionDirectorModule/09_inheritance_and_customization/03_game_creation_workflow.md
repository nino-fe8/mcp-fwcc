---
id: "cc_slot_module:FreeOptionDirectorModule:customization:game_creation_workflow"
title: "Game Creation Workflow: FreeOptionDirector Setup"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: FreeOptionDirector Setup

<!-- convention-summary-start -->
### Game Creation Workflow: FreeOptionDirector Setup Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Game Creation Workflow: FreeOptionDirector Setup.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `FreeOptionDirector[GameId].ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


Follow this 4-step checklist:

---

## Step 1: Create `FreeOptionDirector[GameId].ts`
Inherit from `FreeOptionDirectorModule`.

---

## Step 2: Configure Option Cards in Cocos Creator
In the Inspector:
1. Populate `options` array with your option card nodes (`optionNode`) and string IDs (`optionId`).
2. Link `countDownText` to the timer label.
3. Set `countdownTime = 15`.

---

## Step 3: Add Localization Key
Ensure `FREE_OPTION_GAME_REMIND` exists in your game's language JSON dictionary.

---

## Step 4: Validate Auto-Trigger & Double-Click Protection
Test clicking rapidly on cards (verify only 1 network packet is emitted) and letting the timer run down to 0 (verify auto-selection fires).
