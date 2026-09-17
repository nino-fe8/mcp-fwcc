---
id: "transfer-ark:feature:jackpot_collection:index"
title: "Recipe: Jackpot Collection System with Cascade Sync, Tick Spine & Reconnect Deduction"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["SlotBaseModule", "BaseDataModule", "CompositeCascade", "CutsceneController"]
tags: ["jackpot", "collection", "cascade", "tick_animation", "reconnection", "recipe", "index"]
created_at: "2026-09-17"
author: "ARK Slot Engineering Team"
---

# 🏆 RECIPE-004: Jackpot Collection System

<!-- convention-summary-start -->
### Jackpot Collection System Master Index

- **Core Architecture / Purpose**: End-to-end technical reference and step-by-step implementation guide for the Jackpot Collection feature.
- **Key Mechanisms & Design**: 4-tier decoupled architecture (`Config`, `Data`, `Module`, `Item`), cascade tumble synchronization, dual-stage Spine tick animation, and reconnection backward deduction.
- **Domain Capabilities**: feature, RECIPE_004_jackpot_collection_system
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Gui/`
- **Related Docs**: [01. Overview & Requirements](./01_overview_and_problem.md), [02. Architecture & Data Flow](./02_architecture_and_data_flow.md), [05. Full Implementation Code](./05_full_implementation_code.md)
<!-- convention-summary-end -->

> **Location**: `mcp/mcp-fwcc/docs/transfer-ark/02_feature_recipes/RECIPE_004_jackpot_collection_system/`  
> **Status**: Production Verified (Derived from Game 9666 Red Cliff)  
> **Target Modules**: `JackpotCollectionModule`, `JackpotCollectionItem`, `JackpotCollectionData`, `JackpotCollectionConfig`

---

## 📚 Table of Contents

| Section | Document | Description |
| :--- | :--- | :--- |
| **01** | [**01. Overview & Feature Requirements**](./01_overview_and_problem.md) | Business goals, visual expectations, Vendor SDK discrepancy |
| **02** | [**02. Architecture & Data Flow**](./02_architecture_and_data_flow.md) | 4-tier structure, `UPDATE_JACKPOT_COLLECTION` hook from cascade, sequence diagram |
| **03** | [**03. Visual States & Tick Spine Choreography**](./03_item_visual_and_tick_choreography.md) | Symbol idle/active, collect burst, checkmark tick (`in` $\rightarrow$ `idle` loop), `collect_done` |
| **04** | [**04. Reconnection & Backward Deduction**](./04_reconnection_and_backward_deduction.md) | Resolving server payload desync upon mid-cascade reconnection (`dataResume`) |
| **05** | [**05. Full Implementation Code**](./05_full_implementation_code.md) | Complete copy-paste ready TypeScript sources for all 4 components |
| **06** | [**06. Gotchas & Edge Cases**](./06_gotchas_and_edge_cases.md) | Inactive node queue, cascade settlement timing, Wild symbol matching trap |
| **07** | [**07. Reusability & Setup Guide**](./07_reusability_and_setup_guide.md) | Step-by-step guide to create prefabs, node hierarchy, inspector linking, and testing checklist |
