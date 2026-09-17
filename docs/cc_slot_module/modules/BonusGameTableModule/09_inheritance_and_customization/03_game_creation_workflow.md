---
id: "cc_slot_module:BonusGameTableModule:customization:game_creation_workflow"
title: "Game Creation Workflow: Configuring Bonus Pick Grid"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Configuring Bonus Pick Grid

<!-- convention-summary-start -->
### Game Creation Workflow: Configuring Bonus Pick Grid Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Game Creation Workflow: Configuring Bonus Pick Grid.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


Follow this 4-step checklist when configuring the Bonus Pick Grid:

---

## Step 1: Create Chest Prefab
Create a Prefab containing `BonusGameItemModule`, `cc.Button`, and `cc.Sprite`.

---

## Step 2: Attach `BonusGameTableModule` and `BonusTableConfig`
Attach `BonusGameTableModule` to `Canvas/Director/GameMode/BonusGame/Table`. Assign `boxPrefab` in Inspector.

---

## Step 3: Configure Grid Dimensions in `BonusTableConfig`
Set `COL_NUMBER`, `ROW_NUMBER`, `WIDTH_STEP`, `HEIGHT_STEP`, and `bonusType`.

---

## Step 4: Validate Interactive Picks & Terminal Reveal
1. Enter Bonus Game ➔ Verify grid instantiates cleanly.
2. Click boxes ➔ Verify `OPEN_ITEM` reveals correct prize.
3. Finish bonus ➔ Verify remaining boxes reveal with dimmed styling.
