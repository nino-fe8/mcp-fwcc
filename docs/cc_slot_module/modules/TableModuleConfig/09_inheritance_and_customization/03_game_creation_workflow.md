---
id: "cc_slot_module:TableModuleConfig:customization:game_creation_workflow"
title: "Game Creation Workflow: TableModuleConfig Setup"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "customization", "workflow", "checklist"]
---

# 🚀 Game Creation Workflow: TableModuleConfig Setup

<!-- convention-summary-start -->
### Game Creation Workflow: TableModuleConfig Setup Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Game Creation Workflow: TableModuleConfig Setup.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `TableModuleConfig[GameId].ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


Follow this 4-step checklist:

---

## Step 1: Create `TableModuleConfig[GameId].ts`
Inherit from `TableModuleConfig` and configure `TABLE_FORMAT`, `SYMBOL_WIDTH`, `SYMBOL_HEIGHT`.

---

## Step 2: Mount to Scene Table Node
Attach `TableModuleConfig[GameId]` to `Canvas/Director/GameMode/BoardG/Table`.

---

## Step 3: Populate Special Symbol Constants
Assign `SCATTER_SYMBOL`, `WILD_SYMBOL`, `BONUS_SYMBOL` matching paytable IDs.

---

## Step 4: Validate Speed Profiles & Indexes
Verify `SYMBOL_INDEXES` output against expected matrix coordinate numbers.
