---
id: "cc_slot_module:BonusGameItemModule:customization:game_creation_workflow"
title: "Game Creation Workflow: Configuring Bonus Chest Items"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: Configuring Bonus Chest Items

<!-- convention-summary-start -->
### Game Creation Workflow: Configuring Bonus Chest Items Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Game Creation Workflow: Configuring Bonus Chest Items.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


Follow this 4-step checklist when building custom chest items:

---

## Step 1: Create Chest Item Prefab
Create a Prefab with `BonusGameItemModule`, `cc.Button`, and `cc.Sprite` for `itemSprite`.

---

## Step 2: Populate `itemSfList` in Inspector
Add elements mapping server reward strings (e.g. `"100"`, `"500"`, `"MINI"`, `"GRAND"`) to corresponding SpriteFrame assets.

---

## Step 3: Assign Audio Keys
Set `soundBoxClick` and `soundBoxOpen` sound keys.

---

## Step 4: Validate Touch & Animation
Test clicking the item ➔ Verify sound plays, sprite frame renders cleanly, and score floats up.
